import * as THREE from 'three';

/** ダメージや経験値などの、ふわっと浮かんで消える文字 */
export function createPopups(layer) {
  const items = [];
  const v = new THREE.Vector3();
  const LIFE = 1.1;

  return {
    /** @param {THREE.Vector3} pos  @param {string} text  @param {string} cls  見た目の種類（CSS クラス） */
    add(pos, text, cls = '') {
      const el = document.createElement('div');
      el.className = 'popup-text ' + cls;
      el.textContent = text;
      layer.appendChild(el);
      items.push({ el, pos: pos.clone(), t: 0, dx: (Math.random() - 0.5) * 1.2 });
    },

    update(dt, camera) {
      for (let i = items.length - 1; i >= 0; i--) {
        const it = items[i];
        it.t += dt;
        if (it.t > LIFE) {
          it.el.remove();
          items.splice(i, 1);
          continue;
        }
        v.copy(it.pos);
        v.y += it.t * 2;
        v.x += it.dx * it.t;
        v.project(camera);
        if (v.z > 1) { it.el.style.display = 'none'; continue; }
        it.el.style.display = '';
        const x = (v.x + 1) / 2 * window.innerWidth;
        const y = (1 - v.y) / 2 * window.innerHeight;
        const pop = it.t < 0.12 ? 0.6 + (it.t / 0.12) * 0.7 : 1.3 - Math.min(it.t, 0.4) * 0.75;
        it.el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${pop})`;
        it.el.style.opacity = it.t > LIFE * 0.65 ? (LIFE - it.t) / (LIFE * 0.35) : 1;
      }
    },

    clear() {
      for (const it of items) it.el.remove();
      items.length = 0;
    },
  };
}
