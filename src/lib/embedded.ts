// 內嵌資料層：瀏覽器預覽 / 非 Tauri 環境時直接以內建資料模擬資料庫查詢
import { curatedDeities } from "../../assets/deities_curated.mjs";
import { genTaisui, genXiu, genYuanchen } from "../../assets/deities_generated.mjs";
import { talismans as rawTalismans } from "../../assets/talismans.mjs";

export type Deity = {
  id: number;
  name: string;
  alias: string;
  category: string;
  subcategory: string;
  title: string;
  gender: string;
  dynasty: string;
  origin: string;
  description: string;
  keywords: string;
};

export type Talisman = {
  id: number;
  name: string;
  category: string;
  svg_key: string;
  meaning: string;
  description: string;
};

export type CategoryInfo = { category: string; count: number };
export type DbStats = { deity_count: number; category_count: number; talisman_count: number };
export type QueryResult = { columns: string[]; rows: unknown[][]; row_count: number };

export const embeddedDeities: Deity[] = [
  ...curatedDeities,
  ...genTaisui(),
  ...genXiu(),
  ...genYuanchen(),
].map((d, i) => ({ ...d, id: i + 1 }));

export const embeddedTalismans: Talisman[] = rawTalismans.map((t, i) => ({ ...t, id: i + 1 }));

export function embeddedStats(): DbStats {
  const cats = new Set(embeddedDeities.map((d) => d.category));
  return {
    deity_count: embeddedDeities.length,
    category_count: cats.size,
    talisman_count: embeddedTalismans.length,
  };
}

export function embeddedCategories(): CategoryInfo[] {
  const map = new Map<string, number>();
  for (const d of embeddedDeities) map.set(d.category, (map.get(d.category) ?? 0) + 1);
  return [...map.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

export function embeddedFilter(opts: { category?: string; keyword?: string; limit?: number }): Deity[] {
  let list = embeddedDeities;
  if (opts.category) list = list.filter((d) => d.category === opts.category);
  if (opts.keyword) {
    const k = opts.keyword.trim();
    list = list.filter(
      (d) =>
        d.name.includes(k) ||
        d.alias.includes(k) ||
        d.title.includes(k) ||
        d.keywords.includes(k) ||
        d.description.includes(k)
    );
  }
  return list.slice(0, opts.limit ?? 200);
}
