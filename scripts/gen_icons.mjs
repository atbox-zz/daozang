// 產生中華道藏應用程式圖示（太極符號，純 Node 無依賴）
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}

function encodePNG(size, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter none
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

function makeIcon(size) {
  const rgba = Buffer.alloc(size * size * 4);
  const cx = size / 2, cy = size / 2;
  const R = size * 0.46;
  const bg = [26, 22, 16];       // 墨黑底
  const gold = [212, 175, 55];   // 金色外環
  const black = [13, 13, 13];
  const white = [245, 240, 230];
  const dot = [212, 175, 55];

  const inside = (px, py, ox, oy, r) => {
    const dx = px - ox, dy = py - oy;
    return dx * dx + dy * dy <= r * r;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      let col = bg;
      const inMain = inside(x, y, cx, cy, R);
      const inRing = inside(x, y, cx, cy, R + size * 0.05) && !inMain;
      if (inRing) {
        col = gold;
      } else if (inMain) {
        // 太極：左黑右白
        col = x < cx ? black : white;
        const lc = inside(x, y, cx - R / 2, cy, R / 2);
        const rc = inside(x, y, cx + R / 2, cy, R / 2);
        if (lc) col = white;
        if (rc) col = black;
        // 兩點（金色）
        if (inside(x, y, cx - R / 2, cy, R * 0.09)) col = dot;
        if (inside(x, y, cx + R / 2, cy, R * 0.09)) col = dot;
      }
      rgba[idx] = col[0]; rgba[idx + 1] = col[1]; rgba[idx + 2] = col[2]; rgba[idx + 3] = 255;
    }
  }
  return encodePNG(size, rgba);
}

const dir = "src-tauri/icons";
mkdirSync(dir, { recursive: true });
for (const s of [32, 128, 256, 512]) {
  const name = s === 128 ? "icon.png" : `${s}x${s}.png`;
  writeFileSync(`${dir}/${name}`, makeIcon(s));
  console.log(`wrote ${dir}/${name}`);
}
