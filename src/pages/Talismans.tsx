import { useEffect, useMemo, useState } from "react";
import { getTalismans } from "../lib/api";
import type { Talisman } from "../lib/embedded";
import { TalismanSVG } from "../talismans/svgs";

// 道藏真符 PNG 對照表：import.meta.glob 原始路徑鍵 → 打包後 URL
const talismanImages = import.meta.glob(
  "/src/assets/talismans/*.png",
  { eager: true, import: "default" }
) as Record<string, string>;

// 出處標籤分類：真符（金）／意繪（琥珀）／圖騰法器（灰）
function originClass(t: Talisman): string {
  if (t.image) return "origin-tag is-real";
  if (t.origin.includes("意繪")) return "origin-tag is-drawing";
  return "origin-tag is-totem";
}

function TalismanArt({ t }: { t: Pick<Talisman, "svg_key" | "image"> }) {
  if (t.image) {
    const src = talismanImages[t.image];
    if (src) return <img src={src} className="talisman-img" alt={t.svg_key} />;
  }
  return <TalismanSVG svgKey={t.svg_key} />;
}

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
        <p>符籙圖像擷取自明正統道藏等公有領域掃描，圖騰／法器為向量意繪；本頁所列圖騰與法器（太極、八卦、河圖洛書、桃木劍、法印等）非道藏書寫符籙，僅取其象。</p>
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
            <div className="talisman-thumb"><TalismanArt t={t} /></div>
            <div className="name">{t.name}</div>
            <div className="mean">{t.meaning}</div>
            <span className={originClass(t)}>{t.origin}</span>
          </div>
        ))}
      </div>

      {sel && (
        <div className="detail-overlay" onClick={() => setSel(null)}>
          <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setSel(null)} aria-label="關閉">×</button>
            <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 22, alignItems: "start" }}>
              <div className="talisman-paper detail-paper"><TalismanArt t={sel} /></div>
              <div>
                <h3 style={{ margin: 0, color: "var(--gold-bright)" }}>{sel.name}</h3>
                <div className="alias">{sel.category}</div>
                <div style={{ margin: "8px 0 14px" }}>
                  <span className={originClass(sel)}>{sel.origin}</span>
                </div>
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
