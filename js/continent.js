import * as THREE from 'three';
import { fbm, smoothstep, lerp, SEA_FLOOR, distToPaths } from './terrain.js';

// 変わり目のやわらかさ（m）。大きいほど、となりの地方と広く混ざり合う
const BLEND = 40;
// 変わり目のゆらぎの大きさ（m）。境目がまっすぐにならないようにする
const WOBBLE = 80;

/**
 * いくつもの地方（regions）を、ひとつながりの大陸として合成する。
 *
 * 各地方は「ふちまでの距離（内側ほど大きい）」を持ち、その値で重みを決めて
 * 地形の高さと色を混ぜ合わせる。いちばん内側にいる地方の値が、海岸までの距離になる。
 *
 * region.land(x, z): その地方の陸の高さ（海岸線なし）
 * region.color(x, z, h, slope, out): その地方の地面の色
 * region.carve?(x, z, h): 混ぜた後に、地方をまたいで削るもの（川や湖）
 */
export function makeContinent(regions) {
  const n = regions.length;
  const inside = new Float64Array(n);
  const w = new Float64Array(n);
  const allPaths = regions.flatMap((r) => r.paths);
  const pathColor = new THREE.Color('#c9a66e');
  const tmp = new THREE.Color();

  /** 各地方の重み（合計 1）を w に入れ、海岸までの距離を返す */
  function weigh(x, z) {
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
      const r = regions[i];
      const dx = x - r.cx, dz = z - r.cz;
      inside[i] = r.edge(Math.atan2(dz, dx)) - Math.hypot(dx, dz)
        + (fbm(x / 110 + i * 17.3, z / 110 - i * 9.1) - 0.5) * WOBBLE;
      if (inside[i] > max) max = inside[i];
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
      w[i] = Math.exp((inside[i] - max) / BLEND);
      sum += w[i];
    }
    for (let i = 0; i < n; i++) w[i] /= sum;
    return max;
  }

  return {
    id: 'continent',
    name: '大陸',
    cx: 0,
    cz: 0,
    maxR: 0, // world.js で決める

    height(x, z) {
      const coast = weigh(x, z);
      if (coast < -40) return SEA_FLOOR;
      let h = 0, used = 0;
      for (let i = 0; i < n; i++) {
        if (w[i] < 0.004) continue;
        h += w[i] * regions[i].land(x, z);
        used += w[i];
      }
      h /= used;
      for (const r of regions) if (r.carve) h = r.carve(x, z, h);
      return lerp(SEA_FLOOR, h, smoothstep(-30, 55, coast));
    },

    color(x, z, h, slope, out) {
      weigh(x, z);
      out.setRGB(0, 0, 0);
      let used = 0;
      for (let i = 0; i < n; i++) {
        if (w[i] < 0.01) continue;
        regions[i].color(x, z, h, slope, tmp);
        out.r += tmp.r * w[i];
        out.g += tmp.g * w[i];
        out.b += tmp.b * w[i];
        used += w[i];
      }
      out.multiplyScalar(1 / used);
      // 道は地方をまたいでつながるように、最後にまとめて描く
      if (h >= 1.7) {
        const pd = distToPaths(x, z, allPaths);
        if (pd < 2.6) out.lerp(pathColor, smoothstep(2.6, 1.6, pd) * 0.75);
      }
      return out;
    },

    /** (x, z) での地方 i の重み（0〜1） */
    weightOf(i, x, z) {
      weigh(x, z);
      return w[i];
    },

    /** (x, z) でいちばん強い地方の番号 */
    regionIndexAt(x, z) {
      weigh(x, z);
      let best = 0;
      for (let i = 1; i < n; i++) if (w[i] > w[best]) best = i;
      return best;
    },
  };
}
