// API 層：Tauri 環境走 invoke（真實 SQLite），瀏覽器/預覽環境走內嵌資料
import type { Deity, Talisman, CategoryInfo, DbStats, QueryResult } from "./embedded";
import {
  embeddedDeities,
  embeddedTalismans,
  embeddedStats,
  embeddedCategories,
  embeddedFilter,
} from "./embedded";

export const isTauri =
  typeof window !== "undefined" &&
  ("__TAURI_INTERNALS__" in window || "__TAURI__" in window);

async function invoke<T>(cmd: string, args: Record<string, unknown> = {}): Promise<T> {
  if (!isTauri) throw new Error("NOT_TAURI");
  const mod = await import("@tauri-apps/api/core");
  return mod.invoke(cmd, args) as Promise<T>;
}

export async function getStats(): Promise<DbStats> {
  if (isTauri) return invoke("db_stats");
  return embeddedStats();
}

export async function getCategories(): Promise<CategoryInfo[]> {
  if (isTauri) return invoke("list_categories");
  return embeddedCategories();
}

export async function getDeities(opts: { category?: string; keyword?: string; limit?: number }): Promise<Deity[]> {
  if (isTauri) {
    return invoke("list_deities", {
      category: opts.category ?? null,
      keyword: opts.keyword ?? null,
      limit: opts.limit ?? 300,
      offset: 0,
    });
  }
  return embeddedFilter(opts);
}

export async function searchDeities(keyword: string): Promise<Deity[]> {
  if (isTauri) return invoke("search_deities", { keyword, limit: 80 });
  return embeddedFilter({ keyword, limit: 80 });
}

export async function getDeity(id: number): Promise<Deity | null> {
  if (isTauri) return invoke("get_deity", { id });
  return embeddedDeities.find((d) => d.id === id) ?? null;
}

export async function getTalismans(category?: string): Promise<Talisman[]> {
  if (isTauri) return invoke("get_talismans", { category: category ?? null });
  return category ? embeddedTalismans.filter((t) => t.category === category) : embeddedTalismans;
}

export async function runQuery(sql: string): Promise<QueryResult> {
  if (isTauri) return invoke("run_query", { sql });
  return simulateSql(sql);
}

// ---------- 瀏覽器模式的迷你 SQL 模擬器（僅供預覽，支援常用唯讀語法） ----------
function simulateSql(sql: string): QueryResult {
  const s = sql.replace(/;\s*$/, "").trim();
  const upper = s.toUpperCase();
  if (!/^(SELECT|PRAGMA|WITH)/.test(upper)) {
    throw new Error("僅允許唯讀查詢（SELECT / PRAGMA / EXPLAIN / WITH）");
  }
  if (/\bINTO\b/i.test(s)) throw new Error("偵測到寫入操作，已拒絕");

  const fromMatch = s.match(/\bFROM\s+([a-zA-Z_]+)/i);
  if (!fromMatch) throw new Error("無法解析 FROM 子句");
  const table = fromMatch[1].toLowerCase();
  let rows: Record<string, unknown>[] = table === "talismans" ? (embeddedTalismans as unknown as Record<string, unknown>[]) : (embeddedDeities as unknown as Record<string, unknown>[]);

  // WHERE
  const whereMatch = s.match(/\bWHERE\s+(.+?)(?:\bORDER\b|\bLIMIT\b|$)/i);
  if (whereMatch) {
    const cond = whereMatch[1].trim();
    const like = cond.match(/([a-z_]+)\s+LIKE\s+'%([^']+)%'/i);
    const eq = cond.match(/([a-z_]+)\s*=\s*'([^']+)'/i);
    if (like) rows = rows.filter((r) => String(r[like[1].toLowerCase()] ?? "").includes(like[2]));
    else if (eq) rows = rows.filter((r) => String(r[eq[1].toLowerCase()]) === eq[2]);
  }

  // LIMIT
  let limit = rows.length;
  const limMatch = s.match(/\bLIMIT\s+(\d+)/i);
  if (limMatch) limit = Math.min(limit, parseInt(limMatch[1], 10));

  // SELECT 欄位 / 聚合
  const selectBody = (s.match(/SELECT\s+(.+?)\s+FROM/i) ?? [])[1]?.trim() ?? "*";
  const groupBy = /GROUP BY/i.test(s);

  const parseSelect = () =>
    selectBody === "*"
      ? Object.keys(rows[0] ?? {}).map((c) => ({ expr: c, alias: c }))
      : selectBody.split(",").map((p) => {
          const t = p.trim().replace(/`/g, "");
          const am = t.match(/^(.*?)\s+AS\s+([\w]+)$/i);
          return am ? { expr: am[1].trim(), alias: am[2] } : { expr: t, alias: t };
        });

  if (groupBy) {
    const groupCol = (s.match(/\bGROUP BY\s+([a-z_]+)/i) ?? [])[1];
    const cols = parseSelect();
    const map = new Map<string, Record<string, unknown> & { _cnt: number }>();
    for (const r of rows) {
      const k = String(r[groupCol] ?? "");
      if (!map.has(k)) map.set(k, { ...r, _cnt: 0 });
      (map.get(k) as { _cnt: number })._cnt++;
    }
    const agg = [...map.values()].map((r) => {
      const out: Record<string, unknown> = {};
      for (const c of cols) {
        if (/^count\s*\(/i.test(c.expr)) out[c.alias] = r._cnt;
        else out[c.alias] = r[c.alias] ?? r[c.expr];
      }
      return out;
    });
    const order = /\bORDER BY\s+([\w]+)\s*(DESC|ASC)?/i.exec(s);
    if (order) {
      const dir = order[2]?.toUpperCase() === "DESC" ? -1 : 1;
      agg.sort((a, b) => (Number(a[order[1]]) - Number(b[order[1]])) * dir);
    }
    return { columns: Object.keys(agg[0] ?? {}), rows: agg.map((r) => Object.values(r)), row_count: agg.length };
  }

  // 純聚合（無 GROUP BY）：COUNT(*) 等
  if (/^count\s*\(/i.test(selectBody) || /^count\s*\(/i.test(selectBody.split(",")[0].trim())) {
    return { columns: ["count"], rows: [[rows.length]], row_count: 1 };
  }

  const cols = parseSelect();
  return {
    columns: cols.map((c) => c.alias),
    rows: rows.slice(0, limit).map((r) => cols.map((c) => r[c.expr] ?? null)),
    row_count: rows.length,
  };
}
