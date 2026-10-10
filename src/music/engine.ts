// Web Audio 科儀音樂引擎：以程式合成模擬道教科儀音聲（鐘、鼓、磬、木魚、誦經墊音）
// 無需外部音檔，隨插即用；另支援載入本機音檔播放。

export type Voice = "bell" | "drum" | "gong" | "fish" | "pad";

export interface TrackDef {
  id: string;
  name: string;
  note: string;
  /** 每個 pattern 為 [時間(拍), 音色, 音高(Hz 或空)]，以 8 拍為循環 */
  pattern: [number, Voice, number?][];
  padHz?: number;
  bpm: number;
  bellHz?: number;
}

// 每步一拍，8 拍循環
const TRACKS: TrackDef[] = [
  {
    id: "buxu",
    name: "步虛 · 玉音焚香",
    note: "鐘磬緩鳴，誦經墊音，步虛聲縹緲",
    bpm: 48,
    padHz: 220,
    bellHz: 660,
    pattern: [
      [0, "bell"], [2, "gong"], [4, "bell"], [6, "gong"],
      [1, "pad"], [3, "pad"], [5, "pad"], [7, "pad"],
    ],
  },
  {
    id: "songjing",
    name: "誦經 · 太乙救苦",
    note: "木魚引誦，低沉誦經墊音綿延",
    bpm: 66,
    padHz: 196,
    pattern: [
      [0, "fish"], [2, "fish"], [4, "fish"], [6, "fish"],
      [1, "pad"], [3, "pad"], [5, "pad"], [7, "pad"],
    ],
  },
  {
    id: "zhonggu",
    name: "鐘鼓齊鳴 · 開壇演法",
    note: "鐘鼓交響，聲震壇場",
    bpm: 76,
    bellHz: 587,
    pattern: [
      [0, "bell"], [1, "drum"], [2, "bell"], [3, "drum"],
      [4, "gong"], [5, "drum"], [6, "bell"], [7, "drum"],
    ],
  },
  {
    id: "muyu",
    name: "引磬木魚 · 誦經入定",
    note: "木魚點誦，引磬澄心",
    bpm: 84,
    padHz: 165,
    pattern: [
      [0, "fish"], [0.5, "fish"], [1, "fish"], [1.5, "gong"],
      [2, "fish"], [2.5, "fish"], [3, "fish"], [3.5, "gong"],
      [4, "fish"], [4.5, "fish"], [5, "fish"], [5.5, "gong"],
      [6, "fish"], [6.5, "fish"], [7, "fish"], [7.5, "gong"],
    ],
  },
  {
    id: "qingshen",
    name: "請神 · 淨壇灑水",
    note: "磬聲清越，啟請十方高真",
    bpm: 54,
    bellHz: 784,
    padHz: 261,
    pattern: [
      [0, "gong"], [2, "gong"], [4, "gong"], [6, "gong"],
      [1, "pad"], [5, "pad"],
    ],
  },
  {
    id: "litan",
    name: "禮斗 · 延生度厄",
    note: "鐘磬相和，步斗禮斗之音",
    bpm: 58,
    padHz: 233,
    bellHz: 698,
    pattern: [
      [0, "bell"], [1, "gong"], [3, "bell"], [4, "fish"], [5, "gong"],
      [2, "pad"], [6, "pad"],
    ],
  },
];

export class RitualEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private timer: number | null = null;
  private nextTime = 0;
  private step = 0;
  playing = false;
  private track: TrackDef | null = null;
  onVisual: ((level: number) => void) | null = null;

  get isReady() { return !!this.ctx; }

  private ensureCtx() {
    if (!this.ctx) {
      const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.7;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
  }

  setVolume(v: number) {
    if (this.master) this.master.gain.value = v;
  }

  private bell(freq: number, t: number) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.connect(this.master!);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.5, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    [1, 2.42, 3.2, 4.1].forEach((m, i) => {
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = freq * m;
      const og = ctx.createGain();
      og.gain.value = i === 0 ? 0.7 : 0.22 / (i + 1);
      o.connect(og); og.connect(g);
      o.start(t); o.stop(t + 2.8);
    });
  }

  private gong(t: number) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.connect(this.master!);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.42, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(920, t);
    o.frequency.exponentialRampToValueAtTime(460, t + 0.4);
    const o2 = ctx.createOscillator();
    o2.type = "triangle";
    o2.frequency.value = 1380;
    const o2g = ctx.createGain(); o2g.gain.value = 0.25;
    o.connect(g); o2.connect(o2g); o2g.connect(g);
    o.start(t); o.stop(t + 3.2); o2.start(t); o2.stop(t + 1.2);
  }

  private drum(t: number) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.connect(this.master!);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.6, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.setValueAtTime(110, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.4);
    o.connect(g); o.start(t); o.stop(t + 0.55);
    // 鼓皮雜訊
    const noise = ctx.createBufferSource();
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
    noise.buffer = buf;
    const ng = ctx.createGain(); ng.gain.value = 0.25;
    noise.connect(ng); ng.connect(this.master!); noise.start(t);
  }

  private fish(t: number) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.connect(this.master!);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.4, t + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    const o = ctx.createOscillator();
    o.type = "square";
    o.frequency.setValueAtTime(820, t);
    o.frequency.exponentialRampToValueAtTime(520, t + 0.1);
    o.connect(g); o.start(t); o.stop(t + 0.3);
  }

  private pad(freq: number, t: number, dur: number) {
    const ctx = this.ctx!;
    const g = ctx.createGain();
    g.connect(this.master!);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.16, t + 0.6);
    g.gain.setValueAtTime(0.16, t + dur - 0.8);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    [freq, freq * 1.5, freq * 2].forEach((f, i) => {
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = f;
      const og = ctx.createGain();
      og.gain.value = i === 0 ? 0.6 : 0.25;
      o.connect(og); og.connect(g);
      o.start(t); o.stop(t + dur + 0.2);
    });
  }

  play(trackId: string) {
    this.ensureCtx();
    this.stop();
    this.track = TRACKS.find((t) => t.id === trackId) ?? TRACKS[0];
    this.playing = true;
    this.step = 0;
    this.nextTime = this.ctx!.currentTime + 0.1;
    this.timer = window.setInterval(() => this.schedule(), 120);
  }

  private schedule() {
    if (!this.ctx || !this.track) return;
    const spb = 60 / this.track.bpm;
    while (this.nextTime < this.ctx.currentTime + 0.5) {
      for (const [beat, voice] of this.track.pattern) {
        if (Math.abs((beat % 8) - this.step) < 0.001) {
          const t = this.nextTime;
          switch (voice) {
            case "bell": this.bell(this.track.bellHz ?? 587, t); break;
            case "gong": this.gong(t); break;
            case "drum": this.drum(t); break;
            case "fish": this.fish(t); break;
            case "pad": this.pad(this.track.padHz ?? 196, t, spb * 1.9); break;
          }
        }
      }
      this.nextTime += spb;
      this.step = (this.step + 1) % 8;
      this.onVisual?.(0.35 + Math.random() * 0.4);
    }
  }

  stop() {
    this.playing = false;
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  dispose() {
    this.stop();
    if (this.ctx) { this.ctx.close().catch(() => {}); this.ctx = null; }
  }
}

export const ritualTracks = TRACKS.map(({ id, name, note }) => ({ id, name, note }));
