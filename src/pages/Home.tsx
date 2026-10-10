import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStats, getCategories } from "../lib/api";
import type { DbStats, CategoryInfo } from "../lib/embedded";
import { ISeal } from "../components/icons";

export default function Home() {
  const [stats, setStats] = useState<DbStats | null>(null);
  const [cats, setCats] = useState<CategoryInfo[]>([]);

  useEffect(() => {
    getStats().then(setStats).catch(() => {});
    getCategories().then(setCats).catch(() => {});
  }, []);

  const max = cats.length ? Math.max(...cats.map((c) => c.count)) : 1;

  return (
    <>
      <section className="hero">
        <ISeal />
        <h2>道可道 · 眾神之譜</h2>
        <div className="orn"><span>三清境 · 大羅天</span></div>
        <p>
          匯輯道教三清四御、星宿斗部、雷部護法、幽冥地府、山川水澤、八仙、
          財神與民間神祇等各路神仙，兼載符咒圖騰與科儀音樂，以 SQLite 為藏，供一心向道者稽考參悟。
        </p>
        <div className="metrics">
          <div className="metric"><b>{stats?.deity_count ?? "…"}</b><span>位神仙入藏</span></div>
          <div className="metric"><b>{stats?.category_count ?? "…"}</b><span>大神分類</span></div>
          <div className="metric"><b>{stats?.talisman_count ?? "…"}</b><span>符咒圖騰</span></div>
        </div>
      </section>

      <div className="grid" style={{ gridTemplateColumns: "1.15fr 1fr", alignItems: "start" }}>
        <div className="card">
          <h3 style={{ marginTop: 0, color: "var(--gold-bright)" }}>分類分布</h3>
          {cats.map((c) => (
            <div className="chart-bar" key={c.category}>
              <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.category}</span>
              <div className="track">
                <div className="fill" style={{ width: `${(c.count / max) * 100}%` }} />
              </div>
              <span className="num">{c.count}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <h3 style={{ marginTop: 0, color: "var(--gold-bright)" }}>功能導覽</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: 14 }}>
              四大模組涵蓋道教文化之「神、符、樂、數」。
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
              <Link className="btn" to="/deities">◎ 神仙簡介 — 依分類／關鍵字檢索</Link>
              <Link className="btn" to="/talismans">◎ 符咒圖騰 — 太極八卦、星斗符籙</Link>
              <Link className="btn" to="/music">◎ 科儀音樂 — 誦經、鐘鼓、步虛</Link>
              <Link className="btn" to="/database">◎ 資料庫查詢 — SQL 檢索數百位神仙</Link>
            </div>
          </div>
          <div className="card" style={{ background: "rgba(163,52,47,.06)" }}>
            <p style={{ margin: 0, color: "var(--ink-dim)", fontSize: 13 }}>
              <span style={{ color: "var(--red-bright)" }}>緣起</span>　本藏以 SQLite 為經、SVG 圖騰為緯，
              佐以 Web Audio 模擬科儀音聲，桌面式「道藏數位圖鑑」。收藏於心底，方為究竟。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
