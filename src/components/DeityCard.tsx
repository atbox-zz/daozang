import type { Deity } from "../lib/embedded";
import { DeityEmblem } from "./DeityEmblem";

export function DeityCard({ deity, onOpen }: { deity: Deity; onOpen: (d: Deity) => void }) {
  return (
    <div className="deity-card" onClick={() => onOpen(deity)}>
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8 }}>
        <DeityEmblem deity={deity} size={72} />
        <div style={{ minWidth: 0 }}>
          <h4>{deity.name}</h4>
          <div className="cat">{deity.category} · {deity.subcategory}</div>
        </div>
      </div>
      {deity.title && <div className="sub">{deity.title}</div>}
      <div className="desc">{deity.description}</div>
    </div>
  );
}
