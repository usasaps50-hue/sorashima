import * as THREE from 'three';

/** ローポリ風の標準マテリアル */
export const std = (color, extra = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.9, flatShading: true, ...extra });

/** 影を落とし、受けるようにする */
export const shadow = (m) => {
  m.castShadow = m.receiveShadow = true;
  return m;
};

/**
 * 当たり判定つきの物を置く道具。
 * colliders には { box: Box3, color, kind, cyl? } を積む（cyl = {x, z, r} があれば円柱として判定）。
 */
export function makePlacer(group, colliders) {
  return {
    /** 箱。mat が null なら当たり判定だけ */
    box(w, h, d, x, y, z, mat, mapColor, kind = 'part') {
      colliders.push({
        box: new THREE.Box3(new THREE.Vector3(x - w / 2, y, z - d / 2), new THREE.Vector3(x + w / 2, y + h, z + d / 2)),
        color: mapColor,
        kind,
      });
      if (!mat) return null;
      const m = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat));
      m.position.set(x, y + h / 2, z);
      group.add(m);
      return m;
    },
    /** 円柱。mat が null なら当たり判定だけ */
    cyl(r, h, x, y, z, mat, mapColor, kind = 'part', segments = 10) {
      let m = null;
      if (mat) {
        m = shadow(new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, segments), mat));
        m.position.set(x, y + h / 2, z);
        group.add(m);
      }
      colliders.push({
        box: new THREE.Box3(new THREE.Vector3(x - r, y, z - r), new THREE.Vector3(x + r, y + h, z + r)),
        cyl: { x, z, r },
        color: mapColor,
        kind,
      });
      return m;
    },
  };
}

/**
 * 同じ形をたくさん並べるための入れ物（InstancedMesh）。
 * add() で位置・回転・大きさを積んでいき、最後に finish() で完成させる。
 */
export function makeBatch(geometry, material, max) {
  const mesh = new THREE.InstancedMesh(geometry, material, max);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  const dummy = new THREE.Object3D();
  let n = 0;
  return {
    mesh,
    /** 1 つ積む。あとで動かせるように、番号を返す（いっぱいなら -1） */
    add(x, y, z, sx = 1, sy = sx, sz = sx, rx = 0, ry = 0, rz = 0, color = null, order = 'XYZ') {
      if (n >= max) return -1;
      dummy.position.set(x, y, z);
      dummy.rotation.set(rx, ry, rz, order);
      dummy.scale.set(sx, sy, sz);
      dummy.updateMatrix();
      mesh.setMatrixAt(n, dummy.matrix);
      if (color) mesh.setColorAt(n, color);
      return n++;
    },
    /** 行列を直接積む */
    addMatrix(m) {
      if (n >= max) return;
      mesh.setMatrixAt(n++, m);
    },
    finish() {
      mesh.count = n;
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      return mesh;
    },
  };
}
