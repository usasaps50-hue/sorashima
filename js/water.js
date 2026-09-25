import * as THREE from 'three';
import { SEA_LEVEL, WORLD_HALF } from './terrain.js';
import { PLACES, POND, FALL_DIR } from './islands/start.js';

/**
 * 海（湖・川も同じ水面）。地形の高さテクスチャから水深を求めて、
 * 浅い所は明るい青緑、深い所は濃い青、岸には白い波を出す。
 */
export function createSea(heightTex) {
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    fog: true,
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      {
        heightMap: { value: null },
        time: { value: 0 },
        shallow: { value: new THREE.Color('#6fdcd0') },
        deep: { value: new THREE.Color('#2f73b8') },
        foam: { value: new THREE.Color('#ffffff') },
        mapHalf: { value: WORLD_HALF },
      },
    ]),
    vertexShader: `
      #include <fog_pars_vertex>
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `
      #include <fog_pars_fragment>
      uniform sampler2D heightMap;
      uniform float time;
      uniform float mapHalf;
      uniform vec3 shallow;
      uniform vec3 deep;
      uniform vec3 foam;
      varying vec3 vWorld;
      void main() {
        vec2 uv = (vWorld.xz + mapHalf) / (mapHalf * 2.0);
        float h = -12.0;
        if (uv.x > 0.0 && uv.x < 1.0 && uv.y > 0.0 && uv.y < 1.0) h = texture2D(heightMap, uv).r * 36.0 - 12.0;
        float depth = max(0.0, ${SEA_LEVEL.toFixed(1)} - h);

        vec3 col = mix(shallow, deep, smoothstep(0.0, 7.0, depth));
        // ゆらめき
        float w = sin(vWorld.x * 0.35 + time * 1.2 + sin(vWorld.z * 0.2 + time * 0.6) * 2.0) * sin(vWorld.z * 0.3 - time * 0.9);
        col += w * 0.035 * (1.0 - smoothstep(150.0, 500.0, distance(cameraPosition, vWorld)));
        // 岸の白波（寄せては返す）
        float edge = depth + sin(time * 1.4 + vWorld.x * 0.15 + vWorld.z * 0.12) * 0.3;
        float f = smoothstep(0.9, 0.1, edge);
        float band = smoothstep(0.08, 0.0, abs(edge - 1.3 - sin(time * 0.9) * 0.3)) * 0.6;
        col = mix(col, foam, clamp(f + band, 0.0, 1.0) * 0.85);
        // きらめき
        // 遠くのきらめきはちらつくので、カメラから離れるほど弱める
        float near = 1.0 - smoothstep(60.0, 260.0, distance(cameraPosition, vWorld));
        float s = pow(max(0.0, sin(vWorld.x * 1.3 + time * 2.0) * sin(vWorld.z * 1.1 - time * 1.7)), 60.0);
        col += s * 0.25 * near;

        float alpha = mix(0.5, 0.93, smoothstep(0.0, 4.0, depth));
        gl_FragColor = vec4(col, alpha);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,
  });
  mat.uniforms.heightMap.value = heightTex;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = SEA_LEVEL;
  mesh.renderOrder = 1;
  return {
    mesh,
    update(t) { mat.uniforms.time.value = t; },
  };
}

/** 流れる水の帯（滝・小川） */
function flowingMaterial() {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    uniforms: { time: { value: 0 } },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        float s = fract(vUv.y * 5.0 - time * 1.6 + sin(vUv.x * 18.0) * 0.08);
        float streak = step(0.55, fract(vUv.x * 7.0 + sin(vUv.y * 9.0 - time * 3.0) * 0.3));
        vec3 col = mix(vec3(0.62, 0.88, 0.97), vec3(1.0), step(0.62, s) * 0.8 + streak * 0.15);
        float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
        gl_FragColor = vec4(col, 0.88 * edge);
        #include <colorspace_fragment>
      }`,
  });
}

/**
 * 台地の泉から崖を流れ落ちて湖に注ぐ滝。
 * 地形の表面に沿った帯を作り、流れるテクスチャを貼る。
 */
export function createWaterfall(sample) {
  const group = new THREE.Group();
  const P = PLACES.plateau;
  const mat = flowingMaterial();

  // 泉から湖まで、FALL_DIR に沿って地形の少し上に帯を張る
  const width = 5;
  const side = new THREE.Vector2(-FALL_DIR.y, FALL_DIR.x);
  const startD = 21, endD = 36;
  const rows = 40;
  const verts = [], uvs = [], index = [];
  let len = 0;
  let prev = null;
  for (let i = 0; i <= rows; i++) {
    const d = startD + ((endD - startD) * i) / rows;
    const cx = P.x + FALL_DIR.x * d, cz = P.z + FALL_DIR.y * d;
    const w = width * (0.6 + 0.4 * (i / rows));
    const y = Math.max(sample(cx, cz), SEA_LEVEL - 0.2) + 0.35;
    if (prev) len += Math.hypot(d - prev.d, y - prev.y);
    prev = { d, y };
    for (const s of [-1, 1]) {
      verts.push(cx + side.x * s * w / 2, y, cz + side.y * s * w / 2);
      uvs.push(s < 0 ? 0 : 1, len / 6);
    }
    if (i > 0) {
      const a = (i - 1) * 2;
      index.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(index);
  const fall = new THREE.Mesh(geo, mat);
  fall.renderOrder = 2;
  group.add(fall);

  // 泉の水面
  const pondMat = new THREE.MeshStandardMaterial({ color: 0x6fdcd0, transparent: true, opacity: 0.8, roughness: 0.2 });
  const pond = new THREE.Mesh(new THREE.CircleGeometry(POND.r + 0.6, 24), pondMat);
  pond.rotation.x = -Math.PI / 2;
  pond.position.set(POND.x, P.h - 0.45, POND.z);
  group.add(pond);

  // 滝つぼのしぶき
  const base = new THREE.Vector3(P.x + FALL_DIR.x * 33, SEA_LEVEL + 0.3, P.z + FALL_DIR.y * 33);
  const count = 70;
  const pos = new Float32Array(count * 3);
  const life = new Float32Array(count);
  const vel = new Float32Array(count * 3);
  const reset = (i) => {
    pos[i * 3] = base.x + (Math.random() - 0.5) * 4;
    pos[i * 3 + 1] = base.y;
    pos[i * 3 + 2] = base.z + (Math.random() - 0.5) * 4;
    vel[i * 3] = (Math.random() - 0.5) * 3;
    vel[i * 3 + 1] = 2 + Math.random() * 4;
    vel[i * 3 + 2] = (Math.random() - 0.5) * 3;
    life[i] = Math.random();
  };
  for (let i = 0; i < count; i++) reset(i);
  const sprayGeo = new THREE.BufferGeometry();
  sprayGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const spray = new THREE.Points(sprayGeo, new THREE.PointsMaterial({
    color: 0xffffff, size: 0.5, transparent: true, opacity: 0.8, depthWrite: false,
  }));
  group.add(spray);

  return {
    group,
    update(dt, t) {
      mat.uniforms.time.value = t;
      for (let i = 0; i < count; i++) {
        life[i] += dt;
        vel[i * 3 + 1] -= 9 * dt;
        pos[i * 3] += vel[i * 3] * dt;
        pos[i * 3 + 1] += vel[i * 3 + 1] * dt;
        pos[i * 3 + 2] += vel[i * 3 + 2] * dt;
        if (life[i] > 1.2 || pos[i * 3 + 1] < base.y - 0.5) reset(i);
      }
      sprayGeo.attributes.position.needsUpdate = true;
    },
  };
}
