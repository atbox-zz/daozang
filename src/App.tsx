import { NavLink, Routes, Route } from "react-router-dom";
import { TaijiMark, DecorativeRing, IHome, IDeities, ITalisman, IMusic, IDb } from "./components/icons";
import Home from "./pages/Home";
import Deities from "./pages/Deities";
import Talismans from "./pages/Talismans";
import Music from "./pages/Music";
import Database from "./pages/Database";

const NAV = [
  { to: "/", label: "總覽", icon: <IHome />, end: true },
  { to: "/deities", label: "神仙簡介", icon: <IDeities /> },
  { to: "/talismans", label: "符咒圖騰", icon: <ITalisman /> },
  { to: "/music", label: "科儀音樂", icon: <IMusic /> },
  { to: "/database", label: "資料庫查詢", icon: <IDb /> },
];

export default function App() {
  return (
    <div className="layout">
      <DecorativeRing />
      <DecorativeRing className="bg-ring bottom" />
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark"><TaijiMark size={44} /></span>
          <div>
            <h1>中華道藏</h1>
            <small>神仙圖鑑 · 道法浩瀚</small>
          </div>
        </div>
        <nav>
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            >
              {n.icon}
              <span>{n.label}</span>
            </NavLink>
          ))}
        </nav>
        <div style={{ marginTop: "auto", paddingTop: 16, fontSize: 11, color: "var(--ink-faint)", letterSpacing: 1 }}>
          道可道，非常道<br />名可名，非常名
        </div>
      </aside>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deities" element={<Deities />} />
          <Route path="/talismans" element={<Talismans />} />
          <Route path="/music" element={<Music />} />
          <Route path="/database" element={<Database />} />
        </Routes>
        <footer className="site-footer">
          <span>中華道藏 · 神仙圖鑑　以 Bun + Vite + React 建置，SQLite 為藏</span>
          <span className="links">
            <a href="https://github.com/atbox-zz/daozang" target="_blank" rel="noreferrer">GitHub 原始碼</a>
            <a href="#/">回首頁</a>
          </span>
        </footer>
      </main>
    </div>
  );
}
