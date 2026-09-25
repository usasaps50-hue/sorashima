import { ISLANDS, ALL_PLACES } from './world.js';
import { WORLD_HALF } from './terrain.js';

const hex = (n) => '#' + n.toString(16).padStart(6, '0');

/**
 * 上から見たマップ。北（-Z）が上。
 * 通常はプレイヤーのまわり ±RANGE m を表示し、expanded のときは島全体を表示する。
 */
export function createMinimap(canvas, world) {
  const g = canvas.getContext('2d');
  const RANGE = 110;
  let expanded = false;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2);
    const r = canvas.getBoundingClientRect();
    canvas.width = Math.round(r.width * dpr);
    canvas.height = Math.round(r.height * dpr);
  }

  return {
    get expanded() { return expanded; },
    set expanded(v) {
      expanded = v;
      canvas.classList.toggle('expanded', v);
      resize();
    },
    resize,

    /**
     * @param {{x:number,z:number}} p  @param {number} facing  @param {number} camYaw
     * @param {{x:number,z:number,big:boolean}[]} enemies
     */
    draw(p, facing, camYaw, enemies = []) {
      const W = canvas.width, H = canvas.height;
      if (!W || !H) return;
      const range = expanded ? WORLD_HALF - 30 : RANGE;
      const cx = expanded ? 0 : p.x;
      const cz = expanded ? 0 : p.z;
      const s = Math.min(W, H) / (range * 2);
      const toX = (x) => W / 2 + (x - cx) * s;
      const toY = (z) => H / 2 + (z - cz) * s;

      // 世界の絵（地形から作った画像。1px = 2m）
      g.fillStyle = '#3b7fc0';
      g.fillRect(0, 0, W, H);
      g.imageSmoothingEnabled = true;
      g.drawImage(world.mapImage, toX(-WORLD_HALF), toY(-WORLD_HALF), WORLD_HALF * 2 * s, WORLD_HALF * 2 * s);

      // 建物や遺跡など（木・岩は地図の絵が見にくくなるので描かない）
      g.lineWidth = 1;
      g.strokeStyle = 'rgba(0,0,0,0.35)';
      for (const c of world.colliders) {
        if (c.kind === 'tree' || c.kind === 'rock' || c.kind === 'wall' || c.kind === 'prop' || c.kind === 'rail') continue;
        if (expanded && c.kind !== 'bridge' && c.kind !== 'house') continue; // 全体表示では細かい物は省く
        const b = c.box;
        g.fillStyle = hex(c.color);
        g.beginPath();
        if (c.cyl) g.arc(toX(c.cyl.x), toY(c.cyl.z), Math.max(c.cyl.r * s, 1.5), 0, Math.PI * 2);
        else g.rect(toX(b.min.x), toY(b.min.z), (b.max.x - b.min.x) * s, (b.max.z - b.min.z) * s);
        g.fill();
        g.stroke();
      }

      const px = toX(p.x), py = toY(p.z);
      const dpr = W / canvas.getBoundingClientRect().width || 1;

      // 敵（赤い点）
      g.fillStyle = '#e0475a';
      g.strokeStyle = '#ffffff';
      g.lineWidth = 1.2 * dpr;
      for (const e of enemies) {
        g.beginPath();
        g.arc(toX(e.x), toY(e.z), (e.big ? 3.6 : 2.6) * dpr, 0, Math.PI * 2);
        g.fill();
        g.stroke();
      }

      // カメラの視野（扇形）
      const viewAng = Math.atan2(-Math.cos(camYaw), -Math.sin(camYaw)); // 画面上の角度
      g.fillStyle = 'rgba(255,255,255,0.28)';
      g.beginPath();
      g.moveTo(px, py);
      g.arc(px, py, 34 * dpr, viewAng - 0.5, viewAng + 0.5);
      g.closePath();
      g.fill();

      // プレイヤーの矢印
      const size = 7 * dpr;
      g.save();
      g.translate(px, py);
      g.rotate(-facing); // facing=0 は +Z（画面の下）向き
      g.fillStyle = '#ffffff';
      g.strokeStyle = '#1d8676';
      g.lineWidth = 2.5 * dpr;
      g.beginPath();
      g.moveTo(0, size * 1.3);
      g.lineTo(size, -size);
      g.lineTo(0, -size * 0.4);
      g.lineTo(-size, -size);
      g.closePath();
      g.fill();
      g.stroke();
      g.restore();

      // 拡大表示では地名を出す
      if (expanded) {
        g.font = `bold ${10 * dpr}px "M PLUS Rounded 1c", sans-serif`;
        g.textAlign = 'center';
        g.lineWidth = 3 * dpr;
        g.strokeStyle = 'rgba(28,26,58,0.8)';
        g.fillStyle = '#ffffff';
        for (const place of ALL_PLACES) {
          const lx = toX(place.x), ly = toY(place.z) - 8 * dpr;
          g.strokeText(place.name, lx, ly);
          g.fillText(place.name, lx, ly);
        }
        // 地方の名前
        g.font = `bold ${16 * dpr}px "M PLUS Rounded 1c", sans-serif`;
        g.fillStyle = '#f4c25b';
        for (const isl of ISLANDS) {
          const lx = toX(isl.cx), ly = toY(isl.cz + 40);
          g.strokeText(isl.name, lx, ly);
          g.fillText(isl.name, lx, ly);
        }
      }

      // 北の目印
      g.fillStyle = 'rgba(20,24,32,0.75)';
      g.font = `bold ${11 * dpr}px "M PLUS Rounded 1c", sans-serif`;
      g.textAlign = 'center';
      g.fillText('N', W / 2, 13 * dpr);
    },
  };
}
