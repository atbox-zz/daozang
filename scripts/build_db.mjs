// 中華道藏 · 建庫腳本
// 從 assets/deities_*.mjs 與 assets/talismans.mjs 建立 SQLite 資料庫
// 輸出：src-tauri/resources/daozang.db（打包用）、assets/daozang.db（開發用副本）
import { DatabaseSync } from "node:sqlite";
import { mkdirSync, copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { curatedDeities } = await import(join(root, "assets/deities_curated.mjs"));
const { genTaisui, genXiu, genYuanchen } = await import(join(root, "assets/deities_generated.mjs"));
const { talismans } = await import(join(root, "assets/talismans.mjs"));

const allDeities = [
  ...curatedDeities,
  ...genTaisui(),
  ...genXiu(),
  ...genYuanchen(),
];

const outDir = join(root, "src-tauri/resources");
mkdirSync(outDir, { recursive: true });
const dbPath = join(outDir, "daozang.db");

const db = new DatabaseSync(dbPath);
db.exec(`
  PRAGMA journal_mode=DELETE;
  PRAGMA foreign_keys=ON;

  CREATE TABLE IF NOT EXISTS deities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    alias TEXT DEFAULT '',
    category TEXT DEFAULT '',
    subcategory TEXT DEFAULT '',
    title TEXT DEFAULT '',
    gender TEXT DEFAULT '',
    dynasty TEXT DEFAULT '',
    origin TEXT DEFAULT '',
    description TEXT DEFAULT '',
    keywords TEXT DEFAULT ''
  );

  CREATE TABLE IF NOT EXISTS talismans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT DEFAULT '',
    svg_key TEXT DEFAULT '',
    meaning TEXT DEFAULT '',
    description TEXT DEFAULT ''
  );

  CREATE INDEX IF NOT EXISTS idx_deities_category ON deities(category);
  CREATE INDEX IF NOT EXISTS idx_deities_name ON deities(name);
  CREATE INDEX IF NOT EXISTS idx_talismans_category ON talismans(category);
`);

db.exec("DELETE FROM deities; DELETE FROM talismans;");

const insD = db.prepare(
  "INSERT INTO deities (name,alias,category,subcategory,title,gender,dynasty,origin,description,keywords) VALUES (?,?,?,?,?,?,?,?,?,?)"
);
for (const d of allDeities) {
  insD.run(d.name, d.alias || "", d.category || "", d.subcategory || "", d.title || "", d.gender || "", d.dynasty || "", d.origin || "", d.description || "", d.keywords || "");
}

const insT = db.prepare(
  "INSERT INTO talismans (name,category,svg_key,meaning,description) VALUES (?,?,?,?,?)"
);
for (const t of talismans) {
  insT.run(t.name, t.category, t.svg_key, t.meaning, t.description);
}

const stats = {
  deities: db.prepare("SELECT COUNT(*) c FROM deities").get().c,
  categories: db.prepare("SELECT COUNT(DISTINCT category) c FROM deities").get().c,
  talismans: db.prepare("SELECT COUNT(*) c FROM talismans").get().c,
};
console.log("資料庫建立完成:", dbPath);
console.log(`  神仙 ${stats.deities} 位（${stats.categories} 大分類）／ 符咒圖騰 ${stats.talismans} 個`);
db.close();

copyFileSync(dbPath, join(root, "assets/daozang.db"));
console.log("副本已複製至 assets/daozang.db");
