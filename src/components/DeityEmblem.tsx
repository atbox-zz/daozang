// 神仙「法印」程式化圖像元件
// 以硃紅玉印為體，依分類配色並取一篆字為符，中央刻神號——每位神仙皆得獨特一印。
import type { Deity } from "../lib/embedded";

const CAT: Record<string, { accent: string; symbol: string }> = {
  三清四御: { accent: "#e9c95c", symbol: "道" },
  星宿斗部: { accent: "#9db6ff", symbol: "星" },
  雷部護法: { accent: "#c08bff", symbol: "雷" },
  幽冥地府: { accent: "#7fa3b5", symbol: "幽" },
  山川水澤: { accent: "#58d4bd", symbol: "水" },
  八仙: { accent: "#e8b44a", symbol: "蓮" },
  財神: { accent: "#f0c05a", symbol: "寶" },
  福祿壽喜: { accent: "#ef8fae", symbol: "福" },
  民間神祇: { accent: "#e06a5a", symbol: "龕" },
  上古神話: { accent: "#6fd0a8", symbol: "龍" },
  文教醫藥: { accent: "#9cc77a", symbol: "文" },
  歷史人物神化: { accent: "#d19a6a", symbol: "忠" },
};

function layout(chars: string[]): { x: number; y: number; size: number }[] {
  const n = chars.length;
  if (n === 4)
    return [
      { x: 82, y: 102, size: 44 },
      { x: 118, y: 102, size: 44 },
      { x: 82, y: 156, size: 44 },
      { x: 118, y: 156, size: 44 },
    ];
  if (n === 3)
    return [
      { x: 100, y: 96, size: 40 },
      { x: 100, y: 134, size: 40 },
      { x: 100, y: 172, size: 40 },
    ];
  if (n === 2)
    return [
      { x: 100, y: 104, size: 48 },
      { x: 100, y: 158, size: 48 },
    ];
  return [{ x: 100, y: 132, size: 60 }];
}

export function DeityEmblem({ deity, size = 200 }: { deity: Deity; size?: number }) {
  const cfg = CAT[deity.category] ?? { accent: "#d4af37", symbol: "道" };
  const chars = deity.name.split("");
  const slots = layout(chars);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={`${deity.name}神印`}
      style={{ display: "block" }}
    >
      <defs>
        <radialGradient id={`emG${deity.id}`} cx="38%" cy="30%" r="90%">
          <stop offset="0%" stopColor="#b23b34" />
          <stop offset="55%" stopColor="#9c2c26" />
          <stop offset="100%" stopColor="#7c1f1b" />
        </radialGradient>
      </defs>
      {/* 印身 */}
      <rect x="6" y="6" width="188" height="188" rx="26" fill={`url(#emG${deity.id})`} stroke="#5f1613" strokeWidth="2" />
      {/* 外框回紋角 */}
      {[
        [14, 14], [172, 14], [14, 172], [172, 172],
      ].map(([x, y], i) => (
        <g key={i} stroke={cfg.accent} strokeWidth="2" fill="none" opacity="0.85">
          <path d={`M ${x + 6} ${y} h ${8} v ${8} h -8 z`} />
        </g>
      ))}
      {/* 內框 */}
      <rect x="18" y="18" width="164" height="164" rx="18" fill="none" stroke={cfg.accent} strokeWidth="1.4" opacity="0.5" />
      {/* 頂部：分類符 */}
      <text
        x="100" y="56" textAnchor="middle" fontSize="26" fontWeight="700"
        fill={cfg.accent} fontFamily="KaiTi, 'Noto Serif TC', serif"
      >
        {cfg.symbol}
      </text>
      {/* 中央神號 */}
      {slots.map((s, i) => (
        <text
          key={i} x={s.x} y={s.y} textAnchor="middle" fontSize={s.size}
          fill="#f5efdd" fontFamily="KaiTi, 'Noto Serif TC', serif" fontWeight="700"
        >
          {chars[i]}
        </text>
      ))}
      {/* 底部：分類 */}
      <text x="100" y="188" textAnchor="middle" fontSize="11" fill={cfg.accent} opacity="0.8" fontFamily="KaiTi, 'Noto Serif TC', serif">
        {deity.category}
      </text>
    </svg>
  );
}
