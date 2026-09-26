import * as THREE from 'three';

/**
 * 血の演出（しぶき・斬撃の跡・衝撃波・血の結晶の棘・オーラ）。
 * add したものは update で動かし、寿命が来たら自動で消す。
 */
export function createFx(scene, ground) {
  const items = [];
  const BLOOD = 0xb0101e;
  const BRIGHT = 0xff2a3a;

  const dropGeo = new THREE.IcosahedronGeometry(0.16, 0);
  const dropMat = new THREE.MeshStandardMaterial({ color: BLOOD, emissive: 0x500008, emissiveIntensity: 0.6, roughness: 0.3, transparent: true });
  const ringGeo = new THREE.RingGeometry(0.85, 1, 48);
  const chipGeo = new THREE.BoxGeometry(0.28, 0.1, 0.18);
  const spikeGeo = new THREE.ConeGeometry(0.45, 1, 5).translate(0, 0.5, 0);
  const spikeMat = new THREE.MeshStandardMaterial({ color: 0xd0203a, emissive: 0x800818, emissiveIntensity: 0.9, flatShading: true, roughness: 0.2, metalness: 0.2, transparent: true });

  // 光は増やしたり減らしたりすると処理が重くなるので、1 つを使い回す
  const flashLight = new THREE.PointLight(0xff3040, 0, 30);
  scene.add(flashLight);
  let flashLife = 0, flashT = 0, flashPeak = 0;

  const add = (mesh, life, update) => {
    scene.add(mesh);
    items.push({ mesh, life, t: 0, update });
  };

  return {
    /** 血しぶき */
    burst(pos, count = 14, speed = 7) {
      for (let i = 0; i < count; i++) {
        const m = new THREE.Mesh(dropGeo, dropMat);
        m.position.copy(pos);
        const a = Math.random() * Math.PI * 2;
        const s = speed * (0.4 + Math.random() * 0.8);
        const vel = new THREE.Vector3(Math.cos(a) * s, 4 + Math.random() * 7, Math.sin(a) * s);
        m.scale.setScalar(0.6 + Math.random() * 0.9);
        add(m, 0.6 + Math.random() * 0.4, (it, dt) => {
          vel.y -= 28 * dt;
          m.position.addScaledVector(vel, dt);
          const floor = ground(m.position.x, m.position.z) + 0.1;
          if (m.position.y < floor) { m.position.y = floor; vel.set(0, 0, 0); m.scale.y = 0.25; }
          m.material.opacity = 1;
        });
      }
    },

    /** 木くず（木を叩いた時） */
    chips(pos, count = 8, color = 0xb58a5e) {
      const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.9, flatShading: true });
      for (let i = 0; i < count; i++) {
        const m = new THREE.Mesh(chipGeo, mat);
        m.position.copy(pos);
        const a = Math.random() * Math.PI * 2;
        const sp = 3 + Math.random() * 4;
        const vel = new THREE.Vector3(Math.cos(a) * sp, 3 + Math.random() * 5, Math.sin(a) * sp);
        const spin = new THREE.Vector3(Math.random() * 10, Math.random() * 10, Math.random() * 10);
        add(m, 0.8, (it, dt) => {
          vel.y -= 25 * dt;
          m.position.addScaledVector(vel, dt);
          m.rotation.x += spin.x * dt;
          m.rotation.y += spin.y * dt;
          const floor = ground(m.position.x, m.position.z) + 0.08;
          if (m.position.y < floor) { m.position.y = floor; vel.set(0, 0, 0); spin.set(0, 0, 0); }
        });
      }
    },

    /** 地面に広がる赤い輪（衝撃波） */
    ring(pos, radius, life = 0.5, color = BRIGHT) {
      const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
        color, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      m.rotation.x = -Math.PI / 2;
      m.position.set(pos.x, pos.y + 0.2, pos.z);
      add(m, life, (it) => {
        const k = it.t / it.life;
        m.scale.setScalar(0.5 + radius * (1 - Math.pow(1 - k, 3)));
        m.material.opacity = 1 - k;
      });
    },

    /** from → to に残る赤い斬撃の跡（地面すれすれの光の帯） */
    streak(from, to, width = 2.2, life = 0.6) {
      const len = from.distanceTo(to);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(width, len), new THREE.MeshBasicMaterial({
        color: BRIGHT, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      m.position.copy(from).lerp(to, 0.5);
      m.position.y += 1.6;
      m.lookAt(to.x, m.position.y, to.z);
      m.rotateX(Math.PI / 2);
      add(m, life, (it) => {
        const k = it.t / it.life;
        m.material.opacity = 0.8 * (1 - k);
        m.scale.x = 1 - k * 0.7;
      });
    },

    /** 地面から突き出す血の結晶の棘 */
    spike(x, z, height = 3.5, life = 1.3) {
      const y = ground(x, z);
      const group = new THREE.Group();
      group.position.set(x, y - 0.3, z);
      const n = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < n; i++) {
        const s = new THREE.Mesh(spikeGeo, spikeMat.clone());
        const h = height * (0.5 + Math.random() * 0.6);
        s.scale.set(0.6 + Math.random() * 0.5, h, 0.6 + Math.random() * 0.5);
        s.position.set((Math.random() - 0.5) * 1.4, 0, (Math.random() - 0.5) * 1.4);
        s.rotation.set((Math.random() - 0.5) * 0.7, Math.random() * 3, (Math.random() - 0.5) * 0.7);
        s.userData.h = h;
        group.add(s);
      }
      add(group, life, (it) => {
        const k = it.t / it.life;
        // すばやく突き出して、しばらく残り、沈んで消える
        const grow = k < 0.12 ? k / 0.12 : k > 0.7 ? 1 - (k - 0.7) / 0.3 : 1;
        group.children.forEach((s) => {
          s.scale.y = s.userData.h * Math.max(grow, 0.001);
          s.material.opacity = k > 0.7 ? 1 - (k - 0.7) / 0.3 : 1;
        });
      });
    },

    /** 足元から立ちのぼる赤いオーラ。stop() で止める */
    aura(target) {
      const count = 50;
      const pos = new Float32Array(count * 3);
      const seeds = Array.from({ length: count }, () => ({ a: Math.random() * Math.PI * 2, r: 0.6 + Math.random() * 1.2, y: Math.random() * 5, v: 1.5 + Math.random() * 2 }));
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: BRIGHT, size: 0.28, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
      pts.frustumCulled = false;
      const ringMesh = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: BRIGHT, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
      ringMesh.rotation.x = -Math.PI / 2;
      const group = new THREE.Group();
      group.add(pts, ringMesh);
      let alive = true;
      add(group, Infinity, (it, dt) => {
        group.position.copy(target.position);
        ringMesh.position.y = 0.15;
        ringMesh.scale.setScalar(1.6 + Math.sin(it.t * 6) * 0.15);
        for (let i = 0; i < count; i++) {
          const s = seeds[i];
          s.y += s.v * dt;
          if (s.y > 5.5) s.y = 0;
          s.a += dt * 1.5;
          pos[i * 3] = Math.cos(s.a) * s.r;
          pos[i * 3 + 1] = s.y;
          pos[i * 3 + 2] = Math.sin(s.a) * s.r;
        }
        geo.attributes.position.needsUpdate = true;
        if (!alive) it.life = it.t; // 止めたら次のフレームで消える
      });
      return { stop() { alive = false; } };
    },

    /** 赤い残像（target の今の姿を写し取って、少しずつ消える） */
    afterimage(target, life = 0.35) {
      const ghost = target.clone(true);
      const mat = new THREE.MeshBasicMaterial({ color: BRIGHT, transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending });
      ghost.traverse((o) => { if (o.isMesh || o.isPoints) { o.material = mat; o.castShadow = false; } });
      ghost.position.copy(target.position);
      ghost.rotation.copy(target.rotation);
      add(ghost, life, (it) => { mat.opacity = 0.55 * (1 - it.t / it.life); });
    },

    /** 地面から噴き上がる血の柱 */
    pillar(x, z, height = 14, life = 0.9, radius = 1.4) {
      const y = ground(x, z);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.6, radius, 1, 12, 1, true).translate(0, 0.5, 0), new THREE.MeshBasicMaterial({
        color: BRIGHT, transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
      }));
      m.position.set(x, y, z);
      add(m, life, (it) => {
        const k = it.t / it.life;
        m.scale.set(1 + k * 0.5, height * Math.min(1, k * 6), 1 + k * 0.5);
        m.material.opacity = 0.85 * (1 - k);
        m.rotation.y += 0.2;
      });
      this.burst(new THREE.Vector3(x, y + 1, z), 8, 5);
    },

    /** ふくらむ血の球（爆発） */
    nova(pos, radius = 12, life = 0.6) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(1, 24, 16), new THREE.MeshBasicMaterial({
        color: BRIGHT, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      }));
      m.position.copy(pos);
      add(m, life, (it) => {
        const k = it.t / it.life;
        m.scale.setScalar(0.5 + radius * (1 - Math.pow(1 - k, 3)));
        m.material.opacity = 0.6 * (1 - k);
      });
    },

    /** 一瞬の赤い光（まわりを照らす） */
    flash(pos, intensity = 80, distance = 30, life = 0.35) {
      flashLight.position.copy(pos);
      flashLight.position.y += 2;
      flashLight.distance = distance;
      flashPeak = intensity;
      flashLife = life;
      flashT = 0;
    },

    /**
     * 飛んでいく血の三日月（斬撃波）。onMove(pos) が毎フレーム呼ばれる（当たり判定用）。
     */
    crescent(pos, dir, { speed = 42, life = 0.55, size = 3.2, onMove } = {}) {
      const g = new THREE.Group();
      const arc = new THREE.Mesh(new THREE.TorusGeometry(size, size * 0.14, 6, 24, Math.PI), new THREE.MeshBasicMaterial({
        color: BRIGHT, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
      }));
      arc.rotation.set(-Math.PI / 2, 0, Math.PI); // 水平に寝かせて、弧を進む向きへ
      arc.scale.z = 0.4;
      g.add(arc);
      g.position.copy(pos);
      g.lookAt(pos.x + dir.x, pos.y, pos.z + dir.z);
      add(g, life, (it, dt) => {
        g.position.addScaledVector(dir, speed * dt);
        const k = it.t / it.life;
        arc.material.opacity = 0.9 * (1 - k * k);
        g.scale.setScalar(1 + k * 0.4);
        onMove?.(g.position);
      });
    },

    update(dt) {
      if (flashT < flashLife) {
        flashT += dt;
        flashLight.intensity = flashPeak * Math.max(0, 1 - flashT / flashLife);
      } else flashLight.intensity = 0;
      for (let i = items.length - 1; i >= 0; i--) {
        const it = items[i];
        it.t += dt;
        it.update(it, dt);
        if (it.t >= it.life) {
          scene.remove(it.mesh);
          items.splice(i, 1);
        }
      }
    },
  };
}
