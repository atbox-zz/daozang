import { useEffect, useMemo, useState } from "react";
import { getCategories, getDeities } from "../lib/api";
import type { Deity, CategoryInfo } from "../lib/embedded";
import { DeityCard } from "../components/DeityCard";
import { DeityDetail } from "../components/DeityDetail";

export default function Deities() {
  const [cats, setCats] = useState<CategoryInfo[]>([]);
  const [deities, setDeities] = useState<Deity[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState<string>("");
  const [keyword, setKeyword] = useState("");
  const [selected, setSelected] = useState<Deity | null>(null);

  useEffect(() => {
    getCategories().then(setCats).catch(() => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(async () => {
      try {
        const list = await getDeities({ category: activeCat || undefined, keyword: keyword.trim() || undefined, limit: 300 });
        setDeities(list);
      } finally {
        setLoading(false);
      }
    }, 180);
    return () => clearTimeout(t);
  }, [activeCat, keyword]);

  const sorted = useMemo(
    () => [...deities].sort((a, b) => a.category.localeCompare(b.category, "zh") || a.id - b.id),
    [deities]
  );

  return (
    <>
      <div className="page-head">
        <h2>神仙簡介</h2>
        <p>三清四御、星宿斗部、雷部護法、幽冥地府……搜檢各路高真仙聖之司職與來歷。</p>
      </div>

      <div className="searchbar">
        <input
          placeholder="搜尋神仙名稱、別稱、司職或關鍵字…"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn" onClick={() => setKeyword("")}>清除</button>
      </div>

      <div style={{ marginBottom: 16, display: "flex", flexWrap: "wrap" }}>
        <button className={`chip ${activeCat === "" ? "active" : ""}`} onClick={() => setActiveCat("")}>全部</button>
        {cats.map((c) => (
          <button
            key={c.category}
            className={`chip count ${activeCat === c.category ? "active" : ""}`}
            data-count={c.count}
            onClick={() => setActiveCat(activeCat === c.category ? "" : c.category)}
          >
            {c.category}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: "var(--ink-faint)" }}>正在稽考眾神……</p>
      ) : (
        <div className="grid cards">
          {sorted.map((d) => (
            <DeityCard key={d.id} deity={d} onOpen={setSelected} />
          ))}
        </div>
      )}

      {selected && <DeityDetail deity={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
