import { useEffect, useMemo, useState } from "react";
import { getTalismans } from "../lib/api";
import type { Talisman } from "../lib/embedded";
import { TalismanSVG } from "../talismans/svgs";

export default function Talismans() {
  const [list, setList] = useState<Talisman[]>([]);
  const [cat, setCat] = useState<string>("");
  const [sel, setSel] = useState<Talisman | null>(null);

  useEffect(() => {
    getTalismans(cat || undefined).then(setList).catch(() => {});
  }, [cat]);

  const cats = useMemo(() => {
    const s = new Set<string>();
    for (const t of list) s.add(t.category);
    return [...s];
  }, [list]);

  return (
    <>
      <div className="page-head">
        <h2>符咒圖騰</h2>
        <p>太極八卦、河圖洛書、星斗符籙、法印法器——以向量圖繪製道教符籙之象，可辨其形、知其義。</p>
      </div>

      <div style={{ marginBottom: 18, display: "flex", flexWrap: "wrap" }}>
        <button className={`chip ${cat === "" ? "active" : ""}`} onClick={() => setCat("")}>全部</button>
        {cats.map((c) => (
          <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={() => setCat(cat === c ? "" : c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="talisman-grid">
        {list.map((t) => (
          <div key={t.id} className="talisman-card" onClick={() => setSel(t)}>
            <TalismanSVG svgKey={t.svg_key} />
            <div className="name">{t.name}</div>
            <div className="mean">{t.meaning}</div>
          </div>
        ))}
      </div>

      {sel && (
        <div className="detail-overlay" onClick={() => setSel(null)}>
          <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setSel(null)} aria-label="關閉">×</button>
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 22, alignItems: "start" }}>
              <div className="talisman-paper"><TalismanSVG svgKey={sel.svg_key} /></div>
              <div>
                <h3 style={{ margin: 0, color: "var(--gold-bright)" }}>{sel.name}</h3>
                <div className="alias">{sel.category}</div>
                <div className="desc" style={{ borderTop: "1px solid var(--line)", paddingTop: 12 }}>
                  <b style={{ color: "var(--gold-bright)" }}>涵義：</b> {sel.meaning}
                  <p style={{ color: "var(--ink-dim)", marginTop: 10 }}>{sel.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
