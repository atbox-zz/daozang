import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Tauri 需要固定端口與避免自動開啟瀏覽器
// base 預設 "/"（本機／Tauri 用）；部署 GitHub Pages 專案站（/daozang/）時
// 以 VITE_BASE_PATH=/daozang/ 建置，見 .github/workflows/deploy.yml
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [react()],
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    host: false,
    hmr: false,
  },
  build: {
    target: "es2021",
    minify: "esbuild",
    sourcemap: false,
  },
});
