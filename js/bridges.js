import * as THREE from 'three';
import { std, shadow, makeBatch } from './props.js';
import { lerp } from './terrain.js';

const LAND = 1.6; // これ以上の高さを陸とみなす

function nameSign(text) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 80;
  const g = c.getContext('2d');
  g.fillStyle = '#c49a6c';
  g.fillRect(0, 0, 256, 80);
  g.strokeStyle = '#8a5a3b';
  g.lineWidth = 6;
  g.strokeRect(3, 3, 250, 74);
  g.fillStyle = '#5a3a24';
  g.font = 'bold 34px "M PLUS Rounded 1c", sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, 128, 42);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/**
 * 橋をかける。spec は islands/index.js の BRIDGES を参照。
 * 足場は 2m ごとの箱の当たり判定を並べて、ゆるいアーチにする（段差は自動で登れる高さ）。
 */
export function buildBridges(specs, colliders, ground) {
  const group = new THREE.Group();
  const plankMat = std(0xb58a5e);
  const woodMat = std(0x7a4e36);
  const ropeMat = std(0xd9c49a);
  const stoneMat = std(0xa9a196);
  const glowMat = new THREE.MeshStandardMaterial({ color: 0xffe6a8, emissive: 0xffc870, emissiveIntensity: 1.2 });

  const planks = makeBatch(new THREE.BoxGeometry(1, 1, 1), plankMat, 2500);
  const posts = makeBatch(new THREE.BoxGeometry(1, 1, 1), woodMat, 1500);
  const rails = makeBatch(new THREE.BoxGeometry(1, 1, 1), ropeMat, 2500);
  const piers = makeBatch(new THREE.CylinderGeometry(1, 1.2, 1, 8).translate(0, 0.5, 0), stoneMat, 200);

  const result = [];

  for (const spec of specs) {
    const X = spec.axis === 'x';
    const at = (t) => (X ? [t, spec.at] : [spec.at, t]);
    const g = (t) => ground(...at(t));

    // 海の真ん中から両側へ陸を探す
    let a = spec.mid, b = spec.mid;
    for (let i = 0; i < 400 && g(a) < LAND; i++) a -= 1;
    for (let i = 0; i < 400 && g(b) < LAND; i++) b += 1;
    a -= 2; b += 2;
    const L = b - a;
    const W = spec.small ? 3.4 : 4.4;
    const hA = g(a) + 0.25, hB = g(b) + 0.25;
    const arch = spec.small ? 1.2 : Math.min(7, Math.max(3, L * 0.07));
    const deck = (t) => {
      const s = (t - a) / L;
      return lerp(hA, hB, s) + arch * Math.sin(Math.PI * s);
    };
    const slope = (t) => (deck(t + 0.5) - deck(t - 0.5));
    // 軸方向の値 t と横方向のずれ side から、ワールド座標を作る
    const P = (t, side, y) => (X ? [t, y, spec.at + side] : [spec.at + side, y, t]);

    // 当たり判定：2m ごとの足場＋両側の手すり
    const n = Math.ceil(L / 2);
    for (let i = 0; i < n; i++) {
      const t0 = a + (i * L) / n, t1 = a + ((i + 1) * L) / n;
      const top = deck((t0 + t1) / 2);
      const box = (side0, side1, y0, y1, kind, color) => {
        const [x0, , z0] = P(t0, side0, 0);
        const [x1, , z1] = P(t1, side1, 0);
        colliders.push({
          box: new THREE.Box3(
            new THREE.Vector3(Math.min(x0, x1), y0, Math.min(z0, z1)),
            new THREE.Vector3(Math.max(x0, x1), y1, Math.max(z0, z1))
          ),
          color,
          kind,
        });
      };
      box(-W / 2, W / 2, top - 0.6, top, 'bridge', 0xb58a5e);
      box(-W / 2 - 0.3, -W / 2, top, top + 1.3, 'rail', 0x7a4e36);
      box(W / 2, W / 2 + 0.3, top, top + 1.3, 'rail', 0x7a4e36);
    }

    // 見た目：板・柱・ロープ・橋脚
    for (let t = a + 0.5; t < b; t += 1) {
      const y = deck(t) - 0.12;
      const ang = Math.atan(slope(t));
      const [x, , z] = P(t, 0, 0);
      if (X) planks.add(x, y, z, 0.95, 0.25, W, 0, 0, ang);
      else planks.add(x, y, z, W, 0.25, 0.95, -ang, 0, 0);
    }
    for (let t = a; t <= b + 0.01; t += 4) {
      for (const side of [-1, 1]) {
        const [x, y, z] = P(t, side * (W / 2 + 0.15), deck(t) + 0.7);
        posts.add(x, y, z, 0.28, 1.6, 0.28);
      }
      if (!spec.small && t > a + 6 && t < b - 6 && Math.round(t - a) % 16 === 0) {
        const [x, , z] = P(t, 0, 0);
        const floor = ground(x, z);
        piers.add(x, floor, z, 1.1, deck(t) - 0.5 - floor, 1.1);
      }
    }
    for (let t = a; t < b - 0.01; t += 4) {
      const t1 = Math.min(t + 4, b);
      const mid = (t + t1) / 2;
      const ang = Math.atan((deck(t1) - deck(t)) / (t1 - t));
      for (const side of [-1, 1]) {
        for (const hgt of [1.35, 0.7]) {
          const [x, y, z] = P(mid, side * (W / 2 + 0.15), deck(mid) + hgt);
          if (X) rails.add(x, y, z, t1 - t, 0.1, 0.1, 0, 0, ang);
          else rails.add(x, y, z, 0.1, 0.1, t1 - t, -ang, 0, 0);
        }
      }
    }

    // 両はしの灯りと門（大きな橋だけ）
    if (!spec.small) {
      for (const [t, dir] of [[a, 1], [b, -1]]) {
        const y = deck(t);
        for (const side of [-1, 1]) {
          const [x, , z] = P(t, side * (W / 2 + 0.6), 0);
          const post = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.5, 5.5, 0.5), woodMat));
          post.position.set(x, y + 2.5, z);
          const lamp = new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 0), glowMat);
          lamp.position.set(x, y + 5.6, z);
          group.add(post, lamp);
        }
        const [cx, , cz] = P(t, 0, 0);
        const beam = shadow(new THREE.Mesh(new THREE.BoxGeometry(X ? 0.4 : W + 2.2, 0.4, X ? W + 2.2 : 0.4), woodMat));
        beam.position.set(cx, y + 5.1, cz);
        group.add(beam);
        const tex = nameSign(spec.name);
        const board = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 1), new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide }));
        board.position.set(cx, y + 4.3, cz);
        // 看板は橋の外側（陸の方）を向ける
        board.rotation.y = X ? (dir > 0 ? -Math.PI / 2 : Math.PI / 2) : (dir > 0 ? Math.PI : 0);
        group.add(board);
      }
    }

    result.push({ ...spec, from: at(a), to: at(b), length: L });
  }

  group.add(planks.finish(), posts.finish(), rails.finish(), piers.finish());
  return { group, bridges: result };
}
