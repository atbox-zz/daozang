import { useState } from "react";
import { runQuery, isTauri } from "../lib/api";
import type { QueryResult } from "../lib/embedded";

const SAMPLES = [
  "SELECT category, COUNT(*) AS 位數 FROM deities GROUP BY category ORDER BY 位數 DESC;",
  "SELECT name, category, subcategory FROM deities WHERE category = '八仙';",
  "SELECT name, alias, title FROM deities WHERE keywords LIKE '%財神%' LIMIT 12;",
  "SELECT name, category, meaning FROM talismans;",
  "SELECT COUNT(*) AS 神仙總數 FROM deities;",
  "SELECT name, subcategory FROM deities WHERE subcategory = '十殿閻王' ORDER BY id;",
];

export default function Database() {
  const [sql, setSql] = useState(SAMPLES[0]);
  const [result, setResult] = useState<QueryResult | null>(null);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const run = async (text?: string) => {
    const q = (text ?? sql).trim();
    if (!q) return;
    setErr(""); setBusy(true);
    try {
      const r = await runQuery(q);
      setResult(r);
    } catch (e) {
      setErr(String((e as Error).message ?? e));
      setResult(null);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <div className="page-head">
        <h2>資料庫查詢</h2>
        <p>
          直接以 SQL 檢索 SQLite 中的 {isTauri ? "「daozang.db」" : "內嵌資料（瀏覽器預覽）"}——
          數百位神仙與符咒圖騰皆可查。
        </p>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0, color: "var(--gold-bright)" }}>SQL 編輯器</h3>
        <textarea
          className="sql-editor"
          value={sql}
          onChange={(e) => setSql(e.target.value)}
          spellCheck={false}
          placeholder="輸入唯讀 SQL（SELECT / PRAGMA / EXPLAIN / WITH）…"
        />
        <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap", alignItems: "center" }}>
          <button className="btn" onClick={() => run()} disabled={busy}>{busy ? "執行中…" : "執行查詢"}</button>
          <span style={{ fontSize: 12, color: "var(--ink-faint)" }}>
            {isTauri ? "已連接 SQLite（rusqlite）" : "瀏覽器預覽：以內嵌資料模擬查詢"}
          </span>
        </div>
        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
          {SAMPLES.map((s, i) => (
            <button key={i} className="chip" onClick={() => { setSql(s); }}>{s.slice(0, 42)}…</button>
          ))}
        </div>
      </div>

      {err && <div className="card" style={{ marginTop: 16, borderColor: "var(--red)" }}><p className="sql-warn" style={{ margin: 0 }}>⚠ {err}</p></div>}

      {result && (
        <div className="card" style={{ marginTop: 16 }}>
          <h3 style={{ marginTop: 0, color: "var(--gold-bright)" }}>
            查詢結果 <span style={{ fontSize: 13, color: "var(--ink-faint)" }}>共 {result.row_count} 筆</span>
          </h3>
          <div style={{ overflow: "auto", maxHeight: 460 }}>
            <table className="sql">
              <thead>
                <tr>{result.columns.map((c) => <th key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {result.rows.slice(0, 200).map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{String(cell ?? "")}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          {result.row_count > 200 && (
            <p style={{ color: "var(--ink-faint)", fontSize: 12, marginTop: 8 }}>僅顯示前 200 筆。</p>
          )}
        </div>
      )}
    </>
  );
}
