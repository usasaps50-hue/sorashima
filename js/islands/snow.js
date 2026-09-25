import * as THREE from 'three';
import { fbm, lerp, smoothstep, distToPaths, applyCoast, makeEdge, SEA_LEVEL } from '../terrain.js';
import { std, shadow, makePlacer } from '../props.js';
import { house } from '../village.js';
import { D, BRIDGE_AT } from './layout.js';

// 白嶺の島（北）：雪山・針葉樹・凍った池・氷の祠

const CX = 0, CZ = -D;
const PEAK = { x: CX + 47, z: CZ - 95, r: 190, h: 75 };
const PLACES = {
  shrine: { name: '氷の祠', x: CX - 120, z: CZ + 25, r: 12, h: 12 },
  pond: { name: '凍った池', x: CX + 152, z: CZ + 114, r: 20 },
  summit: { name: '白嶺の頂', x: PEAK.x, z: PEAK.z, r: 10 },
  hut: { name: '山小屋', x: CX - 5, z: CZ + 230, r: 14, h: 8 },
  monument: { name: '雪原の石碑', x: CX + 230, z: CZ - 60, r: 12, h: 10 },
};
const S = PLACES.shrine, P = PLACES.pond, H = PLACES.hut, MN = PLACES.monument;
const B = BRIDGE_AT.north;
const PATHS = [
  [[B, CZ + 420], [B, CZ + 250], [P.x - 24, P.z + 16]], // 街道 → 凍った池
  [[B, CZ + 240], [H.x - 10, H.z]], // → 山小屋
  [[B, CZ + 250], [-60, CZ + 120], [S.x + 14, S.z + 4]], // → 氷の祠
  [[-60, CZ + 120], [0, CZ + 20], [PEAK.x - 8, PEAK.z + 20]], // → 頂上
  [[P.x - 24, P.z + 16], [200, CZ + 40], [MN.x - 10, MN.z + 12]], // → 石碑
];

const C = {
  snow: new THREE.Color('#f4f8fb'),
  snowShade: new THREE.Color('#d8e5ef'),
  rock: new THREE.Color('#8e96a3'),
  rockDark: new THREE.Color('#6f7784'),
  beach: new THREE.Color('#d9d4c8'),
  beachDeep: new THREE.Color('#b9b4a8'),
  path: new THREE.Color('#bccbd8'),
  stone: new THREE.Color('#b9c3cf'),
};

export const snowIsland = {
  id: 'snow',
  name: '白嶺の雪原',
  cx: CX,
  cz: CZ,
  edge: makeEdge(345, [24, 0.4, 15, 2.8, 12, 1.1]),
  maxR: 432,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    let h = 4 + fbm(x / 40, z / 40) * 6 + fbm(x / 150 + 3, z / 150) * 9;
    // 雪山（なだらかに登れる形）＋岩のでこぼこ
    const m = smoothstep(PEAK.r, 0, Math.hypot(x - PEAK.x, z - PEAK.z));
    h += PEAK.h * m + (fbm(x / 9, z / 9) - 0.5) * 4 * m;
    for (const p of [S, H, MN]) h = lerp(h, p.h, smoothstep(p.r + 14, p.r, Math.hypot(x - p.x, z - p.z)));
    h = lerp(h, -1.5, smoothstep(P.r + 22, P.r - 3, Math.hypot(x - P.x, z - P.z)));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.5) return out.copy(C.beachDeep).lerp(C.beach, smoothstep(-2, 1.2, h));
    out.copy(C.snowShade).lerp(C.snow, fbm(x / 10, z / 10));
    out.lerp(C.beach, smoothstep(2.2, 1.5, h));
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.2) out.lerp(C.path, smoothstep(2.2, 1.2, pd));
    if (Math.hypot(x - S.x, z - S.z) < S.r - 3) out.lerp(C.stone, 0.7);
    if (slope > 0.7) out.lerp(fbm(x / 4, z / 4) > 0.5 ? C.rock : C.rockDark, smoothstep(0.7, 1.0, slope));
    return out;
  },

  nature: {
    trees: { style: 'pine', count: 600, leafColors: [0x2f5d4a, 0x3a6b52, 0x28503f], trunkColor: 0x5a4030, snowy: true, maxH: 55, maxSlope: 0.6 },
    rocks: 150,
    rockColor: 0x8e96a3,
    avoid: Object.values(PLACES).map((p) => [p.x, p.z, p.r + 4]),
  },

  enemies: {
    kumodama: { name: 'ユキダマ', tint: 0xcfe4f5, mult: 2.8, count: 28 },
    ishimori: { name: 'コオリモリ', tint: 0x9fb8d0, mult: 2.8, count: 9 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);
    const iceMat = new THREE.MeshStandardMaterial({ color: 0xbfeeff, emissive: 0x4fb6e0, emissiveIntensity: 0.6, flatShading: true, transparent: true, opacity: 0.85 });

    // --- 凍った池（氷の上を歩ける） ---
    const iceR = P.r + 6;
    const ice = new THREE.Mesh(new THREE.CircleGeometry(iceR, 32), new THREE.MeshStandardMaterial({ color: 0xd8f2ff, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.88 }));
    ice.rotation.x = -Math.PI / 2;
    ice.position.set(P.x, SEA_LEVEL + 0.12, P.z);
    ice.receiveShadow = true;
    group.add(ice);
    colliders.push({
      box: new THREE.Box3(new THREE.Vector3(P.x - iceR, -3, P.z - iceR), new THREE.Vector3(P.x + iceR, SEA_LEVEL + 0.12, P.z + iceR)),
      cyl: { x: P.x, z: P.z, r: iceR },
      color: 0xd8f2ff,
      kind: 'ice',
    });

    // --- 氷の祠 ---
    const y0 = S.h;
    const stone = std(0xb9c3cf);
    put.cyl(5.5, 0.6, S.x, y0 - 0.3, S.z, stone, 0xb9c3cf, 'part', 12);
    for (let i = 0; i < 4; i++) {
      const a = Math.PI / 4 + (i / 4) * Math.PI * 2;
      put.cyl(0.5, 5, S.x + Math.cos(a) * 3.8, y0 + 0.3, S.z + Math.sin(a) * 3.8, stone, 0xb9c3cf, 'part', 8);
    }
    const roof = shadow(new THREE.Mesh(new THREE.ConeGeometry(5.8, 3, 4), std(0x5a78c4)));
    roof.position.set(S.x, y0 + 6.8, S.z);
    roof.rotation.y = Math.PI / 4;
    group.add(roof);
    const core = new THREE.Mesh(new THREE.OctahedronGeometry(1, 0), iceMat);
    core.scale.y = 1.7;
    core.position.set(S.x, y0 + 2.8, S.z);
    group.add(core);
    const light = new THREE.PointLight(0x9fe8ff, 30, 25);
    light.position.set(S.x, y0 + 3, S.z);
    group.add(light);

    // 氷の結晶の柱
    const spireGeo = new THREE.ConeGeometry(0.8, 1, 5);
    const spire = (x, z, s) => {
      const g = ground(x, z);
      const m = new THREE.Mesh(spireGeo, iceMat);
      m.scale.set(s * 0.8, s * 4, s * 0.8);
      m.position.set(x, g + s * 2 - 0.3, z);
      m.rotation.set((rand() - 0.5) * 0.4, rand() * 3, (rand() - 0.5) * 0.4);
      group.add(m);
      put.cyl(0.7 * s, s * 4, x, g - 0.5, z, null, 0xbfeeff);
    };
    for (let i = 0; i < 10; i++) {
      const a = rand() * Math.PI * 2, r = S.r + 2 + rand() * 8;
      spire(S.x + Math.cos(a) * r, S.z + Math.sin(a) * r, 0.7 + rand() * 1.1);
    }
    spire(PEAK.x, PEAK.z - 4, 2.6); // 頂上の大きな結晶

    // --- 山小屋：雪の積もった屋根と、煙の出る煙突 ---
    const hut = house({ w: 8, d: 6.5, wall: 0x8a5a3b, roof: 0xf4f8fb, trim: 0x5a3a24 });
    hut.position.set(H.x, H.h, H.z);
    hut.rotation.y = -Math.PI / 2; // ドアを西（道の方）へ
    group.add(hut);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(8.4, 7, 6.9));
    hit.position.set(H.x, H.h + 3.5, H.z);
    hit.rotation.y = -Math.PI / 2;
    hit.updateMatrixWorld(true);
    colliders.push({ box: new THREE.Box3().setFromObject(hit), color: 0x8a5a3b, kind: 'house' });
    const smokeCount = 14;
    const smokePos = new Float32Array(smokeCount * 3);
    const chimney = new THREE.Vector3(H.x + 1.3, H.h + 7.8, H.z + 2); // 家の煙突の位置（回転後）
    for (let i = 0; i < smokeCount; i++) {
      smokePos[i * 3] = chimney.x;
      smokePos[i * 3 + 1] = chimney.y + (i / smokeCount) * 8;
      smokePos[i * 3 + 2] = chimney.z;
    }
    const smokeGeo = new THREE.BufferGeometry();
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
    const smoke = new THREE.Points(smokeGeo, new THREE.PointsMaterial({ color: 0xd8dde4, size: 1.1, transparent: true, opacity: 0.28, depthWrite: false }));
    smoke.frustumCulled = false;
    group.add(smoke);
    // 薪と雪だるま
    const snowMat = std(0xf8fbfd);
    const body = shadow(new THREE.Mesh(new THREE.SphereGeometry(1, 12, 10), snowMat));
    body.position.set(H.x - 7, H.h + 0.9, H.z + 5);
    const headBall = shadow(new THREE.Mesh(new THREE.SphereGeometry(0.65, 12, 10), snowMat));
    headBall.position.set(H.x - 7, H.h + 2.3, H.z + 5);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 6), std(0xf08a3c));
    nose.rotation.z = Math.PI / 2;
    nose.position.set(H.x - 7.7, H.h + 2.3, H.z + 5);
    group.add(body, headBall, nose);
    put.cyl(1, 2.8, H.x - 7, H.h - 0.5, H.z + 5, null, 0xf8fbfd);

    // --- 雪原の石碑：光る文字の刻まれた大きな石 ---
    const my = MN.h;
    const slab = shadow(new THREE.Mesh(new THREE.BoxGeometry(3.2, 7, 1.2), std(0x7f8794)));
    slab.position.set(MN.x, my + 3.3, MN.z);
    slab.rotation.y = 0.4;
    group.add(slab);
    put.cyl(2, 7, MN.x, my - 0.5, MN.z, null, 0x7f8794);
    const glyphMat = new THREE.MeshStandardMaterial({ color: 0xbfeeff, emissive: 0x4fb6e0, emissiveIntensity: 1.3 });
    for (let i = 0; i < 5; i++) {
      const g = new THREE.Mesh(new THREE.BoxGeometry(i % 2 ? 1.6 : 0.9, 0.18, 0.05), glyphMat);
      g.position.set((i % 2 ? 0 : 0.2) - 0.1, 1.8 - i * 0.7, 0.62);
      slab.add(g);
    }
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const st = shadow(new THREE.Mesh(new THREE.DodecahedronGeometry(0.6, 0), std(0x8e96a3)));
      st.position.set(MN.x + Math.cos(a) * 4, my + 0.3, MN.z + Math.sin(a) * 4);
      group.add(st);
    }

    // --- 雪（プレイヤーのまわりに降らせる） ---
    const count = 700;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (rand() - 0.5) * 80;
      pos[i * 3 + 1] = rand() * 40;
      pos[i * 3 + 2] = (rand() - 0.5) * 80;
    }
    const snowGeo = new THREE.BufferGeometry();
    snowGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const snow = new THREE.Points(snowGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.35, transparent: true, opacity: 0.9, depthWrite: false }));
    snow.frustumCulled = false;
    group.add(snow);

    return {
      group,
      update(dt, t, focus) {
        core.rotation.y += dt;
        for (let i = 0; i < smokeCount; i++) {
          let y = smokePos[i * 3 + 1] + dt * 1.2;
          if (y > chimney.y + 8) y = chimney.y;
          smokePos[i * 3 + 1] = y;
          const k = y - chimney.y;
          smokePos[i * 3] = chimney.x + Math.sin(t * 0.8 + i) * (0.3 + k * 0.12) + k * 0.25;
          smokePos[i * 3 + 2] = chimney.z + Math.cos(t * 0.7 + i * 1.7) * k * 0.12;
        }
        smokeGeo.attributes.position.needsUpdate = true;
        // プレイヤーがこの島にいる時だけ雪を降らせる
        const near = focus && Math.hypot(focus.x - CX, focus.z - CZ) < 440;
        snow.visible = !!near;
        if (!near) return;
        snow.position.set(focus.x, focus.y - 5, focus.z);
        for (let i = 0; i < count; i++) {
          let y = pos[i * 3 + 1] - dt * 3;
          if (y < 0) y += 40;
          pos[i * 3 + 1] = y;
          pos[i * 3] += Math.sin(t + i) * dt * 0.5;
        }
        snowGeo.attributes.position.needsUpdate = true;
      },
    };
  },
};
