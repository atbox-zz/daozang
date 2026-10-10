import { useEffect, useRef, useState } from "react";
import { RitualEngine, ritualTracks } from "../music/engine";

const engine = new RitualEngine();

export default function Music() {
  const [current, setCurrent] = useState<string>("");
  const [volume, setVolume] = useState(0.7);
  const [bars, setBars] = useState<number[]>(Array.from({ length: 14 }, () => 0.2));
  const [localSrc, setLocalSrc] = useState<string>("");
  const [localName, setLocalName] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const vizTimer = useRef<number | null>(null);

  useEffect(() => {
    engine.onVisual = (lvl) => {
      setBars(Array.from({ length: 14 }, () => lvl * (0.4 + Math.random() * 0.6)));
    };
    return () => {
      engine.dispose();
      if (vizTimer.current) window.clearInterval(vizTimer.current);
    };
  }, []);

  useEffect(() => {
    engine.setVolume(volume);
  }, [volume]);

  const toggle = (id: string) => {
    if (current === id && engine.playing) {
      engine.stop();
      setCurrent("");
      return;
    }
    engine.play(id);
    setCurrent(id);
    setLocalSrc("");
    setLocalName("");
    if (audioRef.current) audioRef.current.pause();
  };

  const loadLocal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    engine.stop();
    setCurrent("");
    setLocalSrc(URL.createObjectURL(f));
    setLocalName(f.name);
  };

  const barsActive = !!current;

  return (
    <>
      <div className="page-head">
        <h2>科儀音樂</h2>
        <p>以 Web Audio 程式合成模擬道教法事音聲——鐘鼓磬魚、誦經墊音；亦可載入本機科儀錄音播放。</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1.3fr 1fr", alignItems: "start" }}>
        <div className="card">
          <h3 style={{ marginTop: 0, color: "var(--gold-bright)" }}>科儀樂段</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {ritualTracks.map((t) => (
              <div key={t.id} className="player-bar" style={{ cursor: "pointer" }} onClick={() => toggle(t.id)}>
                <button
                  className="icon-btn"
                  onClick={(e) => { e.stopPropagation(); toggle(t.id); }}
                  aria-label="播放或暫停"
                >
                  {current === t.id && engine.playing ? "❚❚" : "▶"}
                </button>
                <div className="track">
                  <b>{t.name}</b>
                  <span>{t.note}</span>
                </div>
                {current === t.id && engine.playing && <span style={{ color: "var(--red-bright)" }}>演奏中</span>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div className="card">
            <h3 style={{ marginTop: 0, color: "var(--gold-bright)" }}>播放器</h3>
            <div className="music-vis">
              {bars.map((b, i) => (
                <i key={i} style={{ height: `${Math.max(6, b * 100)}%`, transition: "height .12s", opacity: barsActive ? 1 : 0.3 }} />
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
              <span style={{ fontSize: 13, color: "var(--ink-faint)" }}>音量</span>
              <input
                type="range" min={0} max={1} step={0.01} value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                style={{ flex: 1, accentColor: "#d4af37" }}
              />
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0, color: "var(--gold-bright)" }}>載入科儀錄音</h3>
            <p style={{ color: "var(--ink-dim)", fontSize: 13, margin: "4px 0 12px" }}>
              支援本機音檔（mp3 / wav / ogg / m4a），以 HTML5 播放器播放。
            </p>
            <label className="btn" style={{ display: "inline-block" }}>選擇音檔
              <input type="file" accept="audio/*" style={{ display: "none" }} onChange={loadLocal} />
            </label>
            {localName && (
              <div style={{ marginTop: 12, color: "var(--ink-dim)", fontSize: 13 }}>
                正在播放：{localName}
              </div>
            )}
            {localSrc && (
              <audio ref={audioRef} src={localSrc} controls style={{ width: "100%", marginTop: 10, filter: "invert(0.85)" }} autoPlay />
            )}
          </div>

          <div className="card" style={{ background: "rgba(163,52,47,.06)" }}>
            <p style={{ margin: 0, color: "var(--ink-faint)", fontSize: 12 }}>
              說明：科儀樂段以程式即時合成，無需外部音檔即可體驗法事氛圍；
              如需真實道樂錄音，可於「載入科儀錄音」匯入本機檔案。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
