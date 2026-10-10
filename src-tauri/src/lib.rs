mod db;

use tauri::Manager;

/// 設定資料庫連線狀態（Mutex 保護，供各 command 共用）
pub struct DbState(pub std::sync::Mutex<rusqlite::Connection>);

/// 應用程式資料目錄下的資料庫路徑；首次執行時從內建資源複製
fn resolve_db(app: &tauri::AppHandle) -> Result<std::path::PathBuf, String> {
    let data_dir = app
        .path()
        .app_data_dir()
        .map_err(|e| format!("無法取得資料目錄: {e}"))?;
    std::fs::create_dir_all(&data_dir).map_err(|e| format!("無法建立資料目錄: {e}"))?;
    let dest = data_dir.join("daozang.db");
    if !dest.exists() {
        let src = app
            .path()
            .resolve("daozang.db", tauri::path::BaseDirectory::Resource)
            .map_err(|e| format!("無法定位內建資料庫: {e}"))?;
        if src.exists() {
            std::fs::copy(&src, &dest).map_err(|e| format!("複製資料庫失敗: {e}"))?;
        } else {
            return Err("內建資料庫 daozang.db 不存在".into());
        }
    }
    Ok(dest)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(|app| {
            let path = resolve_db(app.handle())?;
            let conn = rusqlite::Connection::open(&path)
                .map_err(|e| format!("開啟資料庫失敗: {e}"))?;
            conn.pragma_update(None, "foreign_keys", "ON")
                .map_err(|e| format!("設定外鍵失敗: {e}"))?;
            app.manage(DbState(std::sync::Mutex::new(conn)));
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            db::list_categories,
            db::list_deities,
            db::get_deity,
            db::search_deities,
            db::get_talismans,
            db::get_talisman,
            db::run_query,
            db::db_stats
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
