import type { Deity } from "../lib/embedded";
import { DeityEmblem } from "./DeityEmblem";

const FIELDS: [keyof Deity, string][] = [
  ["category", "大分類"],
  ["subcategory", "細分"],
  ["title", "主要司職"],
  ["gender", "性別"],
  ["dynasty", "時代"],
  ["origin", "出處"],
];

export function DeityDetail({ deity, onClose }: { deity: Deity; onClose: () => void }) {
  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose} aria-label="關閉">×</button>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "start" }}>
          <div>
            <DeityEmblem deity={deity} size={200} />
          </div>
          <div>
            <h3>{deity.name}</h3>
            {deity.alias && <div className="alias">別稱／尊號：{deity.alias}</div>}
            <div className="fields">
              {FIELDS.map(([k, label]) =>
                deity[k] ? (
                  <div key={k}><span>{label}</span>{deity[k]}</div>
                ) : null
              )}
            </div>
            <div className="desc">{deity.description}</div>
            {deity.keywords && (
              <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {deity.keywords.split(" ").filter(Boolean).map((k) => (
                  <span key={k} className="chip">{k}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
