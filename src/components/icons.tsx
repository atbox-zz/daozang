// 品牌太極標與導覽圖示（內聯 SVG，無外部依賴）
export function TaijiMark({ size = 44 }: { size?: number }) {
  const c = size / 2, r = size * 0.40, r2 = r / 2, dot = r * 0.12;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="#16110a" stroke="#d4af37" strokeWidth={size * 0.03} />
      <path
        d={`M ${c - r} ${c} a ${r} ${r} 0 0 1 ${r * 2} 0 a ${r2} ${r2} 0 0 1 ${-r2} ${-r2} a ${r2} ${r2} 0 0 1 ${-r2} ${r2} z`}
        fill="#f3ead6"
      />
      <path
        d={`M ${c + r} ${c} a ${r} ${r} 0 0 1 ${-r * 2} 0 a ${r2} ${r2} 0 0 1 ${r2} ${-r2} a ${r2} ${r2} 0 0 1 ${r2} ${r2} z`}
        fill="#050505"
      />
      <circle cx={c - r2} cy={c} r={dot} fill="#050505" />
      <circle cx={c + r2} cy={c} r={dot} fill="#f3ead6" />
    </svg>
  );
}

type P = { size?: number };
const S = ({ d, size = 20 }: P & { d: string }) => (
  <svg className="nav-ico" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

export const IHome = () => <S d="M3 11.5 12 4l9 7.5M5 10v10h14V10" />;
export const IDeities = () => <S d="M12 3c-3 2-5 4.5-5 8a5 5 0 0 0 10 0c0-3.5-2-6-5-8ZM12 3v17M8.5 8.5c-2 1.5-3 3.5-3 5.5" />;
export const ITalisman = () => <S d="M9 3h6l1 4-1 5 3 4-3 4H9l-3-4 3-4-1-5 1-4ZM9 3v4M15 7V3M12 7v6" />;
export const IMusic = () => <S d="M9 18V6l10-2v12M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm10-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />;
export const IDb = () => <S d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />;
export const ISeal = ({ size = 46 }: { size?: number }) => (
  <svg className="seal" width={size} height={size} viewBox="0 0 46 46">
    <rect x="1" y="1" width="44" height="44" rx="6" fill="none" stroke="#c2453f" strokeWidth="1.6" opacity=".9" />
    <rect x="7" y="7" width="32" height="32" rx="3" fill="none" stroke="#c2453f" strokeWidth="1.2" opacity=".7" />
    <text x="23" y="21" textAnchor="middle" fontSize="11" fill="#c2453f" fontFamily="KaiTi, 'Noto Serif TC', serif">道</text>
    <text x="23" y="35" textAnchor="middle" fontSize="11" fill="#c2453f" fontFamily="KaiTi, 'Noto Serif TC', serif">藏</text>
  </svg>
);

// 大型八卦環裝飾（背景水印用）
export function DecorativeRing({ size = 520, className = "bg-ring" }: { size?: number; className?: string }) {
  const c = size / 2, r = size * 0.42, r2 = size * 0.30;
  const GUA: [string, number][] = [
    ["乾", -90], ["巽", -135], ["坎", 180], ["艮", 135],
    ["坤", 90], ["震", 45], ["離", 0], ["兌", -45],
  ];
  return (
    <svg className={className} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={c} cy={c} r={r} fill="none" stroke="currentColor" strokeWidth={size * 0.012} />
      <circle cx={c} cy={c} r={r2} fill="none" stroke="currentColor" strokeWidth={size * 0.008} />
      {GUA.map(([g, deg]) => {
        const rad = (deg * Math.PI) / 180;
        const cx = c + (r2 + (r - r2) / 2) * Math.cos(rad);
        const cy = c + (r2 + (r - r2) / 2) * Math.sin(rad);
        return <text key={g} x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={size * 0.05} fill="currentColor" fontFamily="KaiTi, 'Noto Serif TC', serif">{g}</text>;
      })}
    </svg>
  );
}
