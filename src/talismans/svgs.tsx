// 道教符咒圖騰 SVG 元件庫（純向量、無外部依賴）
// 每款圖騰以 200×200 viewBox 繪製，符紙底色由外層容器提供。

import React from "react";

type P = { className?: string };

// ---------- 輔助：太極 ----------
export function Taiji({ r = 62 }: { r?: number }) {
  const c = 100;
  return (
    <g>
      <circle cx={c} cy={c} r={r} fill="none" stroke="#8a1f1a" strokeWidth={2.4} />
      <path d={`M ${c - r} ${c} a ${r} ${r} 0 0 1 ${r * 2} 0 a ${r / 2} ${r / 2} 0 0 1 ${-r / 2} ${-r / 2} a ${r / 2} ${r / 2} 0 0 1 ${-r / 2} ${r / 2} z`} fill="#15100a" />
      <path d={`M ${c + r} ${c} a ${r} ${r} 0 0 1 ${-r * 2} 0 a ${r / 2} ${r / 2} 0 0 1 ${r / 2} ${-r / 2} a ${r / 2} ${r / 2} 0 0 1 ${r / 2} ${r / 2} z`} fill="#f5efdd" />
      <circle cx={c - r / 2} cy={c} r={r * 0.16} fill="#f5efdd" />
      <circle cx={c + r / 2} cy={c} r={r * 0.16} fill="#15100a" />
    </g>
  );
}

// ---------- 輔助：單一卦（三爻） ----------
function Trigram({ x, y, w, lines }: { x: number; y: number; w: number; lines: [boolean, boolean, boolean] }) {
  // lines[0] 最下爻 … [2] 最上爻
  const gap = 5;
  return (
    <g stroke="#15100a" strokeWidth={2.6} strokeLinecap="round">
      {lines.map((solid, i) => {
        const yy = y + (2 - i) * gap;
        return solid ? (
          <line key={i} x1={x} y1={yy} x2={x + w} y2={yy} />
        ) : (
          <g key={i}>
            <line x1={x} y1={yy} x2={x + w * 0.42} y2={yy} />
            <line x1={x + w * 0.58} y1={yy} x2={x + w} y2={yy} />
          </g>
        );
      })}
    </g>
  );
}

const GUA: Record<string, [boolean, boolean, boolean]> = {
  乾: [true, true, true],
  兌: [false, true, true],
  離: [true, false, true],
  震: [false, false, true],
  巽: [true, true, false],
  坎: [false, true, false],
  艮: [true, false, false],
  坤: [false, false, false],
};
// 先天八卦順序（由正北逆時針）
const XTIAN: [string, number][] = [
  ["乾", -90], ["巽", -135], ["坎", 180], ["艮", 135],
  ["坤", 90], ["震", 45], ["離", 0], ["兌", -45],
];
// 後天八卦順序（由正北順時針）
const HTIAN: [string, number][] = [
  ["坎", -90], ["艮", -45], ["震", 0], ["巽", 45],
  ["離", 90], ["坤", 135], ["兌", 180], ["乾", -135],
];

function BaguaRing({ order, r = 66 }: { order: [string, number][]; r?: number }) {
  return (
    <g>
      <circle cx={100} cy={100} r={r + 22} fill="none" stroke="#8a1f1a" strokeWidth={2} />
      <circle cx={100} cy={100} r={r - 12} fill="none" stroke="#8a1f1a" strokeWidth={1.4} />
      {order.map(([g, deg]) => {
        const rad = (deg * Math.PI) / 180;
        const cx = 100 + (r + 5) * Math.cos(rad);
        const cy = 100 + (r + 5) * Math.sin(rad);
        const w = 13;
        return (
          <g key={g}>
            <Trigram x={cx - w / 2} y={cy - 8} w={w} lines={GUA[g]} />
            <text x={cx} y={cy + 14} textAnchor="middle" fontSize="9" fill="#8a1f1a" fontFamily="KaiTi, serif">{g}</text>
          </g>
        );
      })}
    </g>
  );
}

// ---------- 符籙畫框 ----------
function FuFrame({ center, sub, ornaments = true }: { center: string; sub?: string; ornaments?: boolean }) {
  return (
    <g>
      <rect x="14" y="14" width="172" height="172" rx="4" fill="none" stroke="#8a1f1a" strokeWidth={2} />
      <rect x="20" y="20" width="160" height="160" rx="2" fill="none" stroke="#8a1f1a" strokeWidth={0.8} opacity={0.7} />
      {ornaments && (
        <>
          {/* 符頭三勾 */}
          <path d="M 40 34 q 6 -14 18 -16 M 58 34 q 6 -14 20 -16 M 76 34 q 6 -14 18 -16" fill="none" stroke="#15100a" strokeWidth={2.2} strokeLinecap="round" />
          {/* 左右雷紋 */}
          <path d="M 32 90 l -8 16 l 6 1 l -5 10 l 10 -10 l -5 1 l 8 -16 z" fill="#15100a" />
          <path d="M 168 90 l 8 16 l -6 1 l 5 10 l -10 -10 l 5 1 l -8 -16 z" fill="#15100a" />
          {/* 底部北斗 */}
          {[
            [50, 150], [60, 140], [72, 135], [82, 142], [92, 132], [104, 128], [112, 136],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r={3.4} fill="#15100a" />
              {i < 6 && <line x1={x} y1={y} x2={orderX[i + 1]} y2={orderY[i + 1]} stroke="#15100a" strokeWidth={1.4} />}
            </g>
          ))}
        </>
      )}
      <text x="100" y="112" textAnchor="middle" fontSize="56" fill="#15100a" fontFamily="KaiTi, 'Noto Serif TC', serif" fontWeight="700">{center}</text>
      {sub && (
        <text x="100" y="176" textAnchor="middle" fontSize="14" fill="#8a1f1a" fontFamily="KaiTi, serif" letterSpacing="4">{sub}</text>
      )}
    </g>
  );
}
const orderX = [50, 60, 72, 82, 92, 104, 112];
const orderY = [150, 140, 135, 142, 132, 128, 136];

// ---------- 各圖騰 ----------
export const TalismanArt: Record<string, React.FC<P>> = {
  taiji: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <Taiji r={70} />
      <text x="100" y="182" textAnchor="middle" fontSize="14" fill="#8a1f1a" fontFamily="KaiTi, serif">太極</text>
    </svg>
  ),
  bagua_xiantian: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <BaguaRing order={XTIAN} r={62} />
      <circle cx="100" cy="100" r="20" fill="#15100a" />
      <text x="100" y="105" textAnchor="middle" fontSize="15" fill="#f5efdd" fontFamily="KaiTi, serif">乾</text>
      <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#8a1f1a" fontFamily="KaiTi, serif">先天八卦</text>
    </svg>
  ),
  bagua_houtian: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <BaguaRing order={HTIAN} r={62} />
      <circle cx="100" cy="100" r="20" fill="#f5efdd" stroke="#15100a" strokeWidth="2" />
      <text x="100" y="105" textAnchor="middle" fontSize="15" fill="#15100a" fontFamily="KaiTi, serif">坤</text>
      <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#8a1f1a" fontFamily="KaiTi, serif">後天八卦</text>
    </svg>
  ),
  bagua_array: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <circle cx="100" cy="100" r="86" fill="none" stroke="#8a1f1a" strokeWidth="2.4" />
      <circle cx="100" cy="100" r="44" fill="none" stroke="#8a1f1a" strokeWidth="1.6" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="#8a1f1a" strokeWidth="1.2" opacity="0.7" />
      <Taiji r={16} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const names = ["乾", "坎", "艮", "震", "巽", "離", "坤", "兌"];
        const rad = (deg * Math.PI) / 180;
        const x = 100 + 66 * Math.cos(rad);
        const y = 100 + 66 * Math.sin(rad);
        return <text key={i} x={x} y={y + 5} textAnchor="middle" fontSize="17" fill="#15100a" fontFamily="KaiTi, serif">{names[i]}</text>;
      })}
      <text x="100" y="192" textAnchor="middle" fontSize="11" fill="#8a1f1a" fontFamily="KaiTi, serif">八卦陣 · 辟邪鎮煞</text>
    </svg>
  ),
  hetu: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      {[
        [100, 100, 5], [70, 76, 1], [130, 76, 6], [58, 126, 7], [142, 126, 2],
        [70, 60, 8], [130, 60, 3], [58, 142, 4], [142, 142, 9],
      ].map(([x, y, n], i) => (
        <g key={i}>
          {Array.from({ length: n }).map((_, j) => {
            const ang = (j / n) * Math.PI * 2;
            const dx = (x as number) + 7 * Math.cos(ang);
            const dy = (y as number) + 7 * Math.sin(ang);
            return <circle key={j} cx={dx} cy={dy} r="3" fill="#15100a" />;
          })}
        </g>
      ))}
      <text x="100" y="185" textAnchor="middle" fontSize="13" fill="#8a1f1a" fontFamily="KaiTi, serif">河圖 · 生成之數</text>
    </svg>
  ),
  luoshu: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      {[
        [4, 9, 2], [3, 5, 7], [8, 1, 6],
      ].map((row, r) =>
        row.map((n, c) => (
          <g key={`${r}-${c}`}>
            <rect x={30 + c * 48} y={30 + r * 48} width="44" height="44" fill="none" stroke="#8a1f1a" strokeWidth="1.6" />
            <text x={52 + c * 48} y={61 + r * 48} textAnchor="middle" fontSize="26" fill="#15100a" fontFamily="KaiTi, serif">{n}</text>
          </g>
        ))
      )}
      <text x="100" y="184" textAnchor="middle" fontSize="13" fill="#8a1f1a" fontFamily="KaiTi, serif">洛書 · 九宮縱橫皆十五</text>
    </svg>
  ),
  beidou: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <rect x="16" y="16" width="168" height="168" rx="4" fill="none" stroke="#8a1f1a" strokeWidth="1.6" />
      {[
        [46, 60], [64, 46], [84, 42], [98, 52], [110, 74], [120, 96], [132, 112],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#15100a" />
          {i < 6 && (
            <line x1={x} y1={y} x2={pts[i + 1][0]} y2={pts[i + 1][1]} stroke="#15100a" strokeWidth="2" />
          )}
        </g>
      ))}
      <text x="100" y="158" textAnchor="middle" fontSize="15" fill="#8a1f1a" fontFamily="KaiTi, serif">北斗七星</text>
      <text x="100" y="176" textAnchor="middle" fontSize="11" fill="#8a1f1a" fontFamily="KaiTi, serif">延生度厄 · 禮斗消災</text>
    </svg>
  ),
  nandou: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <rect x="16" y="16" width="168" height="168" rx="4" fill="none" stroke="#8a1f1a" strokeWidth="1.6" />
      {[
        [52, 120], [72, 100], [92, 88], [112, 84], [132, 92], [148, 108],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill="#15100a" />
          {i < 5 && (
            <line x1={x} y1={y} x2={pts6[i + 1][0]} y2={pts6[i + 1][1]} stroke="#15100a" strokeWidth="2" />
          )}
        </g>
      ))}
      <text x="100" y="162" textAnchor="middle" fontSize="15" fill="#8a1f1a" fontFamily="KaiTi, serif">南斗六星</text>
      <text x="100" y="180" textAnchor="middle" fontSize="11" fill="#8a1f1a" fontFamily="KaiTi, serif">添壽益算 · 延年保命</text>
    </svg>
  ),
  wulei: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="雷" sub="五雷號令" />
    </svg>
  ),
  zhenzhai: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="安" sub="鎮宅平安" />
    </svg>
  ),
  pingan: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="平" sub="出入平安" />
    </svg>
  ),
  caishen: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="財" sub="招財進寶" />
    </svg>
  ),
  wenchang: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="昌" sub="文昌助運" />
    </svg>
  ),
  bixie: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="煞" sub="辟邪護身" />
    </svg>
  ),
  taisui: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="歲" sub="值年太歲" />
    </svg>
  ),
  jingxin: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="靜" sub="淨心定神" />
    </svg>
  ),
  chishui: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="水" sub="敕水潔淨" />
    </svg>
  ),
  bagua_mirror: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <circle cx="100" cy="100" r="82" fill="none" stroke="#8a1f1a" strokeWidth="2.6" />
      <circle cx="100" cy="100" r="62" fill="none" stroke="#8a1f1a" strokeWidth="1.4" />
      <circle cx="100" cy="100" r="30" fill="#15100a" />
      <circle cx="100" cy="100" r="24" fill="#f5efdd" />
      <Taiji r={20} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const names = ["乾", "坎", "艮", "震", "巽", "離", "坤", "兌"];
        const rad = (deg * Math.PI) / 180;
        const x = 100 + 72 * Math.cos(rad);
        const y = 100 + 72 * Math.sin(rad);
        return <text key={i} x={x} y={y + 5} textAnchor="middle" fontSize="14" fill="#15100a" fontFamily="KaiTi, serif">{names[i]}</text>;
      })}
      <text x="100" y="188" textAnchor="middle" fontSize="11" fill="#8a1f1a" fontFamily="KaiTi, serif">八卦鏡 · 化煞鎮宅</text>
    </svg>
  ),
  zhangui: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <FuFrame center="斬" sub="斬妖除鬼" />
    </svg>
  ),
  taomu: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <g stroke="#8a1f1a" fill="none">
        <path d="M100 20 C 96 60, 96 120, 100 176 C 104 120, 104 60, 100 20 Z" strokeWidth="7" fill="#7a4a22" />
        <path d="M100 20 L 84 40 L 116 40 Z" fill="#8a1f1a" strokeWidth="2" />
        <rect x="92" y="118" width="16" height="40" rx="3" fill="#6b3f1e" stroke="#8a1f1a" strokeWidth="2" />
        <circle cx="100" cy="70" r="8" fill="none" stroke="#8a1f1a" strokeWidth="2" />
        <circle cx="100" cy="92" r="8" fill="none" stroke="#8a1f1a" strokeWidth="2" />
      </g>
      <text x="100" y="182" textAnchor="middle" fontSize="13" fill="#8a1f1a" fontFamily="KaiTi, serif">桃木劍 · 斬邪辟邪</text>
    </svg>
  ),
  tianshi_yin: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <rect x="40" y="40" width="120" height="120" fill="#c2453f" stroke="#7a1f1a" strokeWidth="3" />
      <rect x="50" y="50" width="100" height="100" fill="none" stroke="#f5efdd" strokeWidth="2" />
      <text x="100" y="86" textAnchor="middle" fontSize="22" fill="#f5efdd" fontFamily="KaiTi, serif">正一</text>
      <text x="100" y="112" textAnchor="middle" fontSize="22" fill="#f5efdd" fontFamily="KaiTi, serif">天師</text>
      <text x="100" y="138" textAnchor="middle" fontSize="22" fill="#f5efdd" fontFamily="KaiTi, serif">之印</text>
      <text x="100" y="178" textAnchor="middle" fontSize="12" fill="#8a1f1a" fontFamily="KaiTi, serif">法印鎮邪 · 威令萬神</text>
    </svg>
  ),
  ziwei_huiji: () => (
    <svg viewBox="0 0 200 200" className="talisman-svg">
      <rect x="20" y="20" width="160" height="160" rx="4" fill="none" stroke="#8a1f1a" strokeWidth="2" />
      <text x="100" y="96" textAnchor="middle" fontSize="34" fill="#15100a" fontFamily="KaiTi, serif">紫微</text>
      <text x="100" y="132" textAnchor="middle" fontSize="30" fill="#15100a" fontFamily="KaiTi, serif">諱</text>
      {/* 左右雲篆點 */}
      <circle cx="66" cy="72" r="3" fill="#15100a" />
      <circle cx="134" cy="72" r="3" fill="#15100a" />
      <circle cx="66" cy="128" r="3" fill="#15100a" />
      <circle cx="134" cy="128" r="3" fill="#15100a" />
      <text x="100" y="178" textAnchor="middle" fontSize="12" fill="#8a1f1a" fontFamily="KaiTi, serif">萬神朝禮 · 諸邪遠避</text>
    </svg>
  ),
};

export const talismanKeys = Object.keys(TalismanArt);

export function TalismanSVG({ svgKey }: { svgKey: string }) {
  const C = TalismanArt[svgKey];
  if (!C) return <svg viewBox="0 0 200 200" className="talisman-svg"><text x="100" y="100" textAnchor="middle" fontSize="14" fill="#8a1f1a">待繪</text></svg>;
  return <C />;
}

const pts: [number, number][] = [
  [46, 60], [64, 46], [84, 42], [98, 52], [110, 74], [120, 96], [132, 112],
];
const pts6: [number, number][] = [
  [52, 120], [72, 100], [92, 88], [112, 84], [132, 92], [148, 108],
];
