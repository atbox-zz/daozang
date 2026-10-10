//! SQLite 資料庫存取指令（rusqlite, bundled）
//! 所有查詢指令經由 tauri state 中的 DbState(Mutex<Connection>) 執行。

use rusqlite::{params, Connection, OptionalExtension};
use serde::Serialize;
use tauri::State;

use crate::DbState;

#[derive(Debug, Serialize)]
pub struct Deity {
    pub id: i64,
    pub name: String,
    pub alias: String,
    pub category: String,
    pub subcategory: String,
    pub title: String,
    pub gender: String,
    pub dynasty: String,
    pub origin: String,
    pub description: String,
    pub keywords: String,
}

#[derive(Debug, Serialize)]
pub struct Talisman {
    pub id: i64,
    pub name: String,
    pub category: String,
    pub svg_key: String,
    pub meaning: String,
    pub description: String,
}

#[derive(Debug, Serialize)]
pub struct CategoryInfo {
    pub category: String,
    pub count: i64,
}

#[derive(Debug, Serialize)]
pub struct QueryResult {
    pub columns: Vec<String>,
    pub rows: Vec<Vec<serde_json::Value>>,
    pub row_count: usize,
}

#[derive(Debug, Serialize)]
pub struct DbStats {
    pub deity_count: i64,
    pub category_count: i64,
    pub talisman_count: i64,
}

fn lock<'a>(s: &'a State<'_, DbState>) -> Result<std::sync::MutexGuard<'a, Connection>, String> {
    s.0.lock().map_err(|_| "資料庫鎖定失敗".to_string())
}

fn row_to_deity(r: &rusqlite::Row) -> rusqlite::Result<Deity> {
    Ok(Deity {
        id: r.get(0)?,
        name: r.get(1)?,
        alias: r.get(2)?,
        category: r.get(3)?,
        subcategory: r.get(4)?,
        title: r.get(5)?,
        gender: r.get(6)?,
        dynasty: r.get(7)?,
        origin: r.get(8)?,
        description: r.get(9)?,
        keywords: r.get(10)?,
    })
}

const DEITY_COLS: &str = "id,name,alias,category,subcategory,title,gender,dynasty,origin,description,keywords";

/// 分類與數量統計
#[tauri::command]
pub fn list_categories(state: State<'_, DbState>) -> Result<Vec<CategoryInfo>, String> {
    let conn = lock(&state)?;
    let mut stmt = conn
        .prepare(
            "SELECT category, COUNT(*) AS cnt FROM deities GROUP BY category ORDER BY cnt DESC, category",
        )
        .map_err(|e| e.to_string())?;
    let rows = stmt
        .query_map([], |r| {
            Ok(CategoryInfo {
                category: r.get(0)?,
                count: r.get(1)?,
            })
        })
        .map_err(|e| e.to_string())?;
    let mut out = Vec::new();
    for r in rows {
        out.push(r.map_err(|e| e.to_string())?);
    }
    Ok(out)
}

/// 依分類/關鍵字列出神仙（支援分頁）
#[tauri::command]
pub fn list_deities(
    state: State<'_, DbState>,
    category: Option<String>,
    keyword: Option<String>,
    limit: Option<i64>,
    offset: Option<i64>,
) -> Result<Vec<Deity>, String> {
    let conn = lock(&state)?;
    let limit = limit.unwrap_or(200).clamp(1, 1000);
    let offset = offset.unwrap_or(0).max(0);
    let mut sql = format!(
        "SELECT {DEITY_COLS} FROM deities WHERE 1=1"
    );
    let mut args: Vec<Box<dyn rusqlite::ToSql>> = Vec::new();
    if let Some(c) = category {
        if !c.trim().is_empty() {
            sql.push_str(" AND category = ?");
            args.push(Box::new(c));
        }
    }
    if let Some(k) = keyword {
        if !k.trim().is_empty() {
            sql.push_str(" AND (name LIKE ? OR alias LIKE ? OR title LIKE ? OR keywords LIKE ?)");
            let pat = format!("%{}%", k.trim());
            for _ in 0..4 {
                args.push(Box::new(pat.clone()));
            }
        }
    }
    sql.push_str(" ORDER BY category, id LIMIT ? OFFSET ?");
    args.push(Box::new(limit));
    args.push(Box::new(offset));

    let mut stmt = conn.prepare(&sql).map_err(|e| e.to_string())?;
    let params: Vec<&dyn rusqlite::ToSql> = args.iter().map(|b| b.as_ref()).collect();
    let rows = stmt
        .query_map(params.as_slice(), row_to_deity)
        .map_err(|e| e.to_string())?;
    let mut out = Vec::new();
    for r in rows {
        out.push(r.map_err(|e| e.to_string())?);
    }
    Ok(out)
}

/// 依 id 取得單一神仙
#[tauri::command]
pub fn get_deity(state: State<'_, DbState>, id: i64) -> Result<Option<Deity>, String> {
    let conn = lock(&state)?;
    conn.query_row(
        &format!("SELECT {DEITY_COLS} FROM deities WHERE id = ?1"),
        params![id],
        row_to_deity,
    )
    .optional()
    .map_err(|e| e.to_string())
}

/// 全文搜尋神仙（名稱/別稱/司職/關鍵字）
#[tauri::command]
pub fn search_deities(
    state: State<'_, DbState>,
    keyword: String,
    limit: Option<i64>,
) -> Result<Vec<Deity>, String> {
    let conn = lock(&state)?;
    let limit = limit.unwrap_or(60).clamp(1, 200);
    let pat = format!("%{}%", keyword.trim());
    let mut stmt = conn
        .prepare(&format!(
            "SELECT {DEITY_COLS} FROM deities \
             WHERE name LIKE ?1 OR alias LIKE ?1 OR title LIKE ?1 OR keywords LIKE ?1 OR description LIKE ?1 \
             ORDER BY category, id LIMIT ?2"
        ))
        .map_err(|e| e.to_string())?;
    let rows = stmt
        .query_map(params![pat, limit], row_to_deity)
        .map_err(|e| e.to_string())?;
    let mut out = Vec::new();
    for r in rows {
        out.push(r.map_err(|e| e.to_string())?);
    }
    Ok(out)
}

/// 列出符咒圖騰
#[tauri::command]
pub fn get_talismans(state: State<'_, DbState>, category: Option<String>) -> Result<Vec<Talisman>, String> {
    let conn = lock(&state)?;
    let mut sql = "SELECT id,name,category,svg_key,meaning,description FROM talismans WHERE 1=1".to_string();
    if let Some(c) = category {
        if !c.trim().is_empty() {
            sql.push_str(" AND category = ?1");
            return query_talismans(&conn, &sql, Some(c));
        }
    }
    query_talismans(&conn, &sql, None)
}

fn query_talismans(conn: &Connection, sql: &str, cat: Option<String>) -> Result<Vec<Talisman>, String> {
    let mut stmt = conn.prepare(sql).map_err(|e| e.to_string())?;
    let rows = if let Some(c) = cat {
        stmt.query_map(params![c], |r| {
            Ok(Talisman {
                id: r.get(0)?,
                name: r.get(1)?,
                category: r.get(2)?,
                svg_key: r.get(3)?,
                meaning: r.get(4)?,
                description: r.get(5)?,
            })
        })
    } else {
        stmt.query_map([], |r| {
            Ok(Talisman {
                id: r.get(0)?,
                name: r.get(1)?,
                category: r.get(2)?,
                svg_key: r.get(3)?,
                meaning: r.get(4)?,
                description: r.get(5)?,
            })
        })
    }
    .map_err(|e| e.to_string())?;
    let mut out = Vec::new();
    for r in rows {
        out.push(r.map_err(|e| e.to_string())?);
    }
    Ok(out)
}

/// 依 id 取得單一符咒
#[tauri::command]
pub fn get_talisman(state: State<'_, DbState>, id: i64) -> Result<Option<Talisman>, String> {
    let conn = lock(&state)?;
    conn.query_row(
        "SELECT id,name,category,svg_key,meaning,description FROM talismans WHERE id = ?1",
        params![id],
        |r| {
            Ok(Talisman {
                id: r.get(0)?,
                name: r.get(1)?,
                category: r.get(2)?,
                svg_key: r.get(3)?,
                meaning: r.get(4)?,
                description: r.get(5)?,
            })
        },
    )
    .optional()
    .map_err(|e| e.to_string())
}

/// 統計資料
#[tauri::command]
pub fn db_stats(state: State<'_, DbState>) -> Result<DbStats, String> {
    let conn = lock(&state)?;
    let deity_count: i64 = conn
        .query_row("SELECT COUNT(*) FROM deities", [], |r| r.get(0))
        .map_err(|e| e.to_string())?;
    let category_count: i64 = conn
        .query_row("SELECT COUNT(DISTINCT category) FROM deities", [], |r| r.get(0))
        .map_err(|e| e.to_string())?;
    let talisman_count: i64 = conn
        .query_row("SELECT COUNT(*) FROM talismans", [], |r| r.get(0))
        .map_err(|e| e.to_string())?;
    Ok(DbStats {
        deity_count,
        category_count,
        talisman_count,
    })
}

/// 唯讀 SQL 執行（供「資料庫查詢」頁使用）
/// 僅允許 SELECT / PRAGMA / EXPLAIN / WITH 開頭之唯讀語句，避免誤寫。
#[tauri::command]
pub fn run_query(state: State<'_, DbState>, sql: String) -> Result<QueryResult, String> {
    let trimmed = sql.trim();
    let upper = trimmed.to_uppercase();
    let allowed = [
        "SELECT", "PRAGMA", "EXPLAIN", "WITH", "VALUES",
    ];
    if !allowed.iter().any(|p| upper.starts_with(p)) {
        return Err("僅允許唯讀查詢（SELECT / PRAGMA / EXPLAIN / WITH）".into());
    }
    if trimmed.to_lowercase().contains(" into ") {
        return Err("偵測到寫入操作，已拒絕".into());
    }
    let conn = lock(&state)?;
    let mut stmt = conn.prepare(trimmed).map_err(|e| e.to_string())?;
    let column_count = stmt.column_count();
    let columns: Vec<String> = stmt
        .column_names()
        .iter()
        .map(|s| s.to_string())
        .collect();
    let mut rows = Vec::new();
    let mut q = stmt.query([]).map_err(|e| e.to_string())?;
    while let Some(row) = q.next().map_err(|e| e.to_string())? {
        let mut vals = Vec::new();
        for i in 0..column_count {
            let v: rusqlite::types::Value = row.get(i).unwrap_or(rusqlite::types::Value::Null);
            let json = match v {
                rusqlite::types::Value::Null => serde_json::Value::Null,
                rusqlite::types::Value::Integer(n) => serde_json::Value::from(n),
                rusqlite::types::Value::Real(f) => {
                    if f.fract() == 0.0 && f.abs() < 9e15 {
                        serde_json::Value::from(f as i64)
                    } else {
                        serde_json::Value::from(f)
                    }
                }
                rusqlite::types::Value::Text(t) => serde_json::Value::String(t),
                rusqlite::types::Value::Blob(b) => {
                    serde_json::Value::String(format!("<blob {}B>", b.len()))
                }
            };
            vals.push(json);
        }
        rows.push(vals);
    }
    let row_count = rows.len();
    Ok(QueryResult {
        columns,
        rows,
        row_count,
    })
}
