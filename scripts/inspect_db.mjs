// 中華道藏 · 資料庫檢視工具（CLI）
// 用法：node scripts/inspect_db.mjs [sql]   預設顯示統計與分類分布
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const db = new DatabaseSync(join(root, "assets/daozang.db"), { readOnly: true });

const sql = process.argv.slice(2).join(" ");
if (sql) {
  const stmt = db.prepare(sql);
  const cols = stmt.columns().map((c) => c.name);
  const rows = stmt.all();
  console.log("欄位:", cols.join(" | "));
  console.log(`共 ${rows.length} 筆`);
  for (const r of rows.slice(0, 40)) console.log(Object.values(r).map(String).join(" | ").slice(0, 140));
} else {
  const total = db.prepare("SELECT COUNT(*) c FROM deities").get().c;
  const tal = db.prepare("SELECT COUNT(*) c FROM talismans").get().c;
  console.log(`神仙總數: ${total}  符咒: ${tal}`);
  console.log("分類分布:");
  for (const r of db.prepare("SELECT category, COUNT(*) c FROM deities GROUP BY category ORDER BY c DESC").all())
    console.log(`  ${r.category.padEnd(10)} ${r.c}`);
}
db.close();
