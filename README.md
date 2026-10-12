# 中華道藏 · 神仙圖鑑（Tauri 桌面應用）

以 Tauri（Rust + WebView）打造的「道藏數位圖鑑」，四大模組：神仙簡介、符咒圖騰、科儀音樂、SQLite 資料庫查詢。

- 資料庫：SQLite（`daozang.db`，內含 **255 位神仙、12 大分類、22 個符咒圖騰**）
- 後端：Rust（`rusqlite` bundled，無需系統 SQLite）
- 前端：React + TypeScript + Vite
- 科儀音樂：Web Audio 程式合成（鐘鼓磬魚、誦經墊音），另支援載入本機音檔

## 目錄結構

```
zhonghua-daozang/
├── src/                     # 前端（React + TS）
│   ├── pages/               # Home / Deities / Talismans / Music / Database
│   ├── components/          # 卡片、詳情、圖示
│   ├── talismans/svgs.tsx   # 符咒圖騰 SVG 元件庫
│   ├── music/engine.ts      # Web Audio 科儀音樂引擎
│   └── lib/                 # API 層（Tauri invoke / 內嵌資料）、內嵌資料
├── src-tauri/               # Rust 後端
│   ├── src/db.rs            # SQLite 查詢指令
│   ├── resources/daozang.db # 打包用資料庫
│   └── tauri.conf.json
├── assets/                  # 資料種子（神仙/符咒）與開發用 DB 副本
└── scripts/                 # 建庫、檢視工具
```

## 前置需求

- **Rust**（`rustup` 安裝 stable）
- **Tauri v2 系統依賴**
  - Linux：`webkit2gtk-4.1`、`gtk3`、`libayatana-appindicator` 等，見 <https://tauri.app/start/prerequisites/>
  - macOS / Windows：無額外依賴
- **Bun**（本專案以 bun 為套件管理器，安裝見 <https://bun.sh>；`tauri.conf.json` 的 before 指令已設為 `bun run`）

> 若你偏好 npm：`bun install` 改為 `npm install`，並將 `src-tauri/tauri.conf.json` 中的 `beforeDevCommand`／`beforeBuildCommand` 改回 `npm run dev`／`npm run build`，其餘指令換成 `npm run …` 即可。

## 執行

```bash
bun install            # 安裝前端依賴（會產生 bun.lock）
bun run db:build       # （可選）從 assets 重建 SQLite 資料庫
bun run tauri dev      # 啟動桌面開發模式
```

打包安裝檔：

```bash
bun run tauri build
```

## 在瀏覽器預覽（非 Tauri）

前端已內嵌資料，可直接以瀏覽器預覽（資料庫頁以內嵌資料模擬查詢）：

```bash
bun run dev            # http://localhost:1420
```

## 部署到 GitHub Pages https://atbox-zz.github.io/daozang

本專案已內建 GitHub Actions 工作流（`.github/workflows/deploy.yml`），用 **Bun 建置、Vite base = `/daozang/`**，自動上傳至 Pages。

1. 在 GitHub 建立公開儲存庫 `atbox-zz/daozang`，把本專案推上去：
   ```bash
   git init
   git add -A
   git commit -m "中華道藏"
   git branch -M main
   git remote add origin git@github.com:atbox-zz/daozang.git
   git push -u origin main
   ```
2. 到 GitHub 儲存庫 **Settings → Pages**，Source 選 **GitHub Actions**。
3. 推上 `main` 後 Actions 會自動建置並部署，完成即可開啟：
   `https://atbox-zz.github.io/daozang/`

> 本機預覽同一部署效果：`VITE_BASE_PATH=/daozang/ bun run build`，再將 `dist/` 內容放在任意靜態伺服器的 `/daozang/` 路徑下即可。

## 資料庫

- 主檔：`src-tauri/resources/daozang.db`（隨應用打包，首次執行複製到應用資料目錄）
- 重建：`bun run db:build`
- 檢視：`node scripts/inspect_db.mjs [SQL]`（或 `bun scripts/inspect_db.mjs [SQL]`）

資料表：

| 表 | 欄位 |
| --- | --- |
| `deities` | id, name, alias, category, subcategory, title, gender, dynasty, origin, description, keywords |
| `talismans` | id, name, category, svg_key, meaning, description |

## 說明與聲明

- 神仙與符咒資料係依道教經典與民間信仰彙整之文化資訊，用於圖鑑參考。
- 符咒圖騰為向量示意繪製，非真實法符，不作實際法事用途。
- 科儀樂段為程式合成之音聲模擬，非真實道樂錄音。

## 初建 247 位神仙
## 後績新增 8 位神仙 總計255位
- 天蓬元帥	雷部護法／北極四聖，北極四聖之首、統領神兵（即八戒原形神號，別稱含「天篷」）。
- 天猷元帥	雷部護法／北極四聖，掌神兵、驅邪護法。
- 翊聖真君	雷部護法／北極四聖，黑煞將軍、鎮守北方。
- 佑聖真君	雷部護法／北極四聖，玄武之神、鎮北方。
- 玄天上帝	民間神祇／北帝 ，真武大帝、披髮仗劍蕩魔。
- 斗姆元君	星宿斗部／斗部 ，北斗之母、眾星之母。
- 齊天大聖	民間神祇／西遊神 ，孫悟空、降妖伏魔參考。
- 鬥戰勝佛	民間神祇／西遊神 ，孫悟空成佛之號（別稱含「戰鬥勝佛」）。

## 已完成
- **資料庫重建**：SQLite 兩檔（`src-tauri/resources`＋`assets`）同步為 255 位／12 分類／22 符咒
- **部署版重建**：新神仙已編入 bundle，實測搜尋「天蓬」正確回傳「天蓬元帥」

## 後績新增 9 張真符與真實出處
- 北斗七星符《北斗治法武威經》北斗七星斗圖
- 南斗六星符《太上說南斗六司延壽度人妙經》六司符之首
- 五雷符《道法會元》卷一百二 五雷祈禱大法
- 鎮宅符《太上秘法鎮宅靈符》厭鎮兇惡之鬼
- 平安符《上清靈寶大法》卷卅七 神虎護身第一符
- 辟邪符《上清靈寶大法》卷廿一 鎮宅去惡鬼符
- 太歲符《上清瓊宮靈飛六甲籙》甲子符
- 斬鬼符《上清靈寶大法》卷卅七 十五使者追鬼符
- 紫微諱《道法會元》卷五 紫皇妙道心章雲篆
- 敕水符、招財進寶符、文昌符、淨心符—— 子工作實際翻查了《道法會元》《靈寶玉鑑》《梓潼帝君本願經》《上清靈寶大法》等卷，
確認無同名可標定之真符（如「招財符」屬後世科儀、非正統道藏），故不造假，保留原向量＋「意繪示意」琥珀色標籤

## 更新重點說明
- 太極圖　　✅ 已換「中華道藏」旁的黑白陰陽魚（不再用 SVG）
- 天師寶印　✅ 已換「陽平治都功印」照片（印面）
- 招財進寶符✅ 已換網路商城 硃砂手寫招財符
- 文昌符　　✅ 已換網路實物照 文昌帝君硃砂符咒
- 敕水符　　✅ 已換網路商城《咒水符》古拓片（咒水即敕水）
- 桃木劍　　✅ 已換網路商城 雷擊桃木劍 23cm
- 淨心符　　⚠️ 查無可靠同名實物圖 保留意繪

資料：`assets/talismans.mjs` 22 筆中 **15 筆有圖片**，SQLite 已同步重建；9 張道藏真符出處原樣不變