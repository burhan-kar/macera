// 3D Macera Adası: low-poly, prosedürel (tüm modeller kodla üretilir, dış dosya yok)
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const C = {
  sand: '#FFD89C', sandPad: '#FFE9C4', grass: '#7CCB5E', grass2: '#5FB552', sea: '#1D9CAE', shallow: '#62D9D2',
  trunk: '#9A6A44', leaf: '#4FB063', leaf2: '#7DD164', leaf3: '#3E9B57', rock: '#B9B0C9', cream: '#FFF8EC',
  coral: '#FF6F59', sun: '#FFC93C', plum: '#3B2C5A', blue: '#3FA7D6', purple: '#9B6DD6', pink: '#FF5C8A',
  red: '#E8504A', redDark: '#A8323A', wood: '#C98A55', woodDark: '#8A5A3B', orange: '#FF9A2E', gold: '#FFC93C', white: '#FFFFFF',
};

const matCache = new Map();
function mat(color, extra = {}) {
  const key = color + JSON.stringify(extra);
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.82, metalness: 0, ...extra }));
  return matCache.get(key);
}
const mesh = (geo, color, extra) => new THREE.Mesh(geo, mat(color, extra));

// Tekrarlanabilir rastgelelik: ada her açılışta aynı görünür
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(20261027);
const rr = (a, b) => a + rand() * (b - a);

function lumpy(geo, amt, keepFlatTop = false) {
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  const g = mergeVertices(geo);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const r = Math.hypot(x, z);
    if (r < 0.001) continue;
    const k = 1 + rr(-amt, amt);
    p.setX(i, x * k);
    p.setZ(i, z * k);
    if (!keepFlatTop) p.setY(i, y + rr(-amt, amt) * 0.6);
  }
  g.computeVertexNormals();
  return g;
}

// ---------- Ada parçaları ----------
function buildGround(scene) {
  const sand = mesh(lumpy(new THREE.CylinderGeometry(16.4, 18.2, 1.4, 40, 1), 0.06), C.sand);
  scene.add(sand);
  const grass = mesh(lumpy(new THREE.CylinderGeometry(14.2, 15.0, 0.9, 40, 1), 0.05, true), C.grass);
  grass.position.y = 1.1;
  scene.add(grass);
  // yumuşak tepecikler
  [].forEach(([x, z, r]) => {
    const hill = mesh(new THREE.IcosahedronGeometry(r, 1), C.grass2);
    hill.scale.set(1.6, 0.45, 1.6);
    hill.position.set(x, 1.5, z);
    scene.add(hill);
  });
  // sığ su halkası
  const ring = new THREE.Mesh(new THREE.RingGeometry(17.6, 24, 64), new THREE.MeshBasicMaterial({ color: C.shallow, transparent: true, opacity: 0.5, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.16;
  ring.userData.noShadow = true;
  scene.add(ring);
}

function buildWater(scene) {
  const geo = new THREE.PlaneGeometry(240, 240, 72, 72);
  geo.rotateX(-Math.PI / 2);
  const water = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: C.sea, flatShading: true, roughness: 0.35, metalness: 0.05 }));
  water.receiveShadow = true;
  water.userData.noShadow = true;
  scene.add(water);
  const base = geo.attributes.position.array.slice();
  return t => {
    const a = geo.attributes.position.array;
    for (let i = 0; i < a.length; i += 3) {
      const x = base[i], z = base[i + 2];
      a[i + 1] = Math.sin(x * 0.22 + t * 0.9) * 0.14 + Math.cos(z * 0.27 + t * 1.15) * 0.12;
    }
    geo.attributes.position.needsUpdate = true;
  };
}

function palm(height = 4) {
  const g = new THREE.Group();
  const segs = 6;
  let x = 0;
  for (let i = 0; i < segs; i++) {
    const s = mesh(new THREE.CylinderGeometry(0.2 - i * 0.015, 0.26 - i * 0.015, height / segs + 0.05, 6), i % 2 ? C.trunk : C.woodDark);
    x += 0.09 * i;
    s.position.set(x, (i + 0.5) * (height / segs), 0);
    s.rotation.z = -0.06 * i;
    g.add(s);
  }
  const top = new THREE.Vector3(x + 0.1, height, 0);
  for (let i = 0; i < 6; i++) {
    const leaf = mesh(new THREE.ConeGeometry(0.42, 2.3, 4), i % 2 ? C.leaf : C.leaf2);
    leaf.scale.set(1, 1, 0.28);
    leaf.geometry.translate(0, 1.15, 0);
    leaf.position.copy(top);
    leaf.rotation.set(0, (i / 6) * Math.PI * 2, 0);
    leaf.rotateZ(Math.PI / 2 + 0.55);
    g.add(leaf);
  }
  const nut = mesh(new THREE.IcosahedronGeometry(0.2, 0), C.woodDark);
  nut.position.copy(top).add(new THREE.Vector3(0.15, -0.25, 0.15));
  g.add(nut);
  return g;
}

function tree(scale = 1, color = C.leaf) {
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.16, 0.24, 1, 6), C.trunk);
  trunk.position.y = 0.5;
  const top = mesh(new THREE.IcosahedronGeometry(0.85, 0), color);
  top.position.y = 1.55;
  top.scale.set(1, 1.15, 1);
  g.add(trunk, top);
  g.scale.setScalar(scale);
  return g;
}

function rock(r) {
  const m = mesh(new THREE.DodecahedronGeometry(r, 0), C.rock);
  m.scale.y = 0.6;
  m.rotation.set(rand(), rand() * 6, rand());
  return m;
}

function cloud() {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color: '#ffffff', flatShading: true, roughness: 1, emissive: '#ffffff', emissiveIntensity: 0.25 });
  const n = 3 + ((rand() * 3) | 0);
  for (let i = 0; i < n; i++) {
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(rr(1, 1.8), 0), m);
    s.position.set(i * 1.5 - n * 0.7, rr(-0.3, 0.5), rr(-0.6, 0.6));
    g.add(s);
  }
  g.userData.noShadow = true;
  return g;
}

function boat() {
  const g = new THREE.Group();
  const hull = mesh(new THREE.CylinderGeometry(0.9, 0.55, 0.6, 4, 1), C.coral);
  hull.rotation.y = Math.PI / 4;
  hull.scale.set(1.9, 1, 0.8);
  hull.position.y = 0.25;
  const mast = mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.4, 5), C.woodDark);
  mast.position.y = 1.5;
  const sail = mesh(new THREE.ConeGeometry(0.9, 1.9, 3), C.cream);
  sail.scale.z = 0.1;
  sail.position.set(0.45, 1.6, 0);
  const flag = mesh(new THREE.BoxGeometry(0.4, 0.22, 0.03), C.sun);
  flag.position.set(0.22, 2.6, 0);
  g.add(hull, mast, sail, flag);
  return g;
}

// Ortadaki ağaç ev: Pofi'nin evi
function treehouse() {
  const g = new THREE.Group();
  const trunk = mesh(new THREE.CylinderGeometry(0.6, 1.0, 4.4, 7), C.trunk);
  trunk.position.y = 2.2;
  g.add(trunk);
  [[-1, 0.4, 0.4, 0.9], [0.9, 0.2, -0.5, -0.8]].forEach(([x, y, z, rz]) => {
    const root = mesh(new THREE.CylinderGeometry(0.15, 0.35, 1.4, 5), C.trunk);
    root.position.set(x, y, z);
    root.rotation.z = rz;
    g.add(root);
  });
  const deck = mesh(new THREE.CylinderGeometry(2.1, 2.1, 0.25, 8), C.wood);
  deck.position.y = 3.9;
  const house = mesh(new THREE.BoxGeometry(1.8, 1.4, 1.6), C.sun);
  house.position.set(0.1, 4.75, 0.1);
  const roof = mesh(new THREE.ConeGeometry(1.6, 1.2, 4), C.coral);
  roof.rotation.y = Math.PI / 4;
  roof.position.set(0.1, 6.05, 0.1);
  const door = mesh(new THREE.BoxGeometry(0.55, 0.9, 0.05), C.plum);
  door.position.set(0.1, 4.5, 0.93);
  const win = mesh(new THREE.CircleGeometry(0.24, 10), C.cream);
  win.position.set(0.95, 4.95, 0.3);
  win.rotation.y = Math.PI / 2;
  g.add(deck, house, roof, door, win);
  // korkuluk
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    if (Math.abs(Math.sin(a)) > 0.95 && Math.cos(a) < 0) continue;
    const post = mesh(new THREE.BoxGeometry(0.1, 0.45, 0.1), C.woodDark);
    post.position.set(Math.cos(a) * 2, 4.25, Math.sin(a) * 2);
    g.add(post);
  }
  // merdiven
  for (let i = 0; i < 6; i++) {
    const rung = mesh(new THREE.BoxGeometry(0.8, 0.08, 0.1), C.woodDark);
    rung.position.set(0.1, 0.6 + i * 0.6, 1.05);
    g.add(rung);
  }
  [-0.3, 0.5].forEach(x => {
    const rail = mesh(new THREE.BoxGeometry(0.08, 3.8, 0.08), C.woodDark);
    rail.position.set(x, 1.95, 1.05);
    g.add(rail);
  });
  // yapraklar
  [[0, 7.4, 0, 2.2, C.leaf], [-1.7, 6.7, -0.6, 1.6, C.leaf2], [1.7, 6.9, -0.8, 1.7, C.leaf3], [0.4, 7.2, -1.8, 1.5, C.leaf2]].forEach(([x, y, z, r, c]) => {
    const f = mesh(new THREE.IcosahedronGeometry(r, 0), c);
    f.position.set(x, y, z);
    g.add(f);
  });
  // bayrak
  const pole = mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.4, 5), C.cream);
  pole.position.set(0.1, 9.1, 0);
  const flag = mesh(new THREE.ConeGeometry(0.35, 0.8, 3), C.coral);
  flag.rotation.z = -Math.PI / 2;
  flag.scale.z = 0.2;
  flag.position.set(0.5, 9.55, 0);
  g.add(pole, flag);
  g.userData.flag = flag;
  return g;
}

// ---------- Oyun bölgeleri ----------
const LANDMARKS = {
  hayvanlar() {
    const g = new THREE.Group();
    const body = mesh(new THREE.BoxGeometry(2.4, 1.7, 2), C.red);
    body.position.y = 0.85;
    const roof = mesh(new THREE.CylinderGeometry(1.55, 1.55, 2.25, 3), C.redDark);
    roof.rotation.x = -Math.PI / 2;
    roof.position.y = 1.7 + 0.77;
    const door = mesh(new THREE.BoxGeometry(0.9, 1.1, 0.06), C.cream);
    door.position.set(0, 0.55, 1.02);
    const doorX = mesh(new THREE.BoxGeometry(1.2, 0.1, 0.04), C.redDark);
    doorX.rotation.z = 0.88;
    doorX.position.set(0, 0.55, 1.06);
    const loft = mesh(new THREE.BoxGeometry(0.5, 0.45, 0.06), C.cream);
    loft.position.set(0, 1.95, 0.6 + 0.5);
    g.add(body, roof, door, doorX, loft);
    // koyun
    const sheep = new THREE.Group();
    const wool = mesh(new THREE.IcosahedronGeometry(0.48, 0), C.cream);
    wool.scale.set(1.2, 0.95, 1);
    wool.position.y = 0.62;
    const head = mesh(new THREE.BoxGeometry(0.3, 0.32, 0.3), C.plum);
    head.position.set(0.55, 0.78, 0);
    sheep.add(wool, head);
    [[-0.25, -0.2], [0.25, -0.2], [-0.25, 0.2], [0.25, 0.2]].forEach(([x, z]) => {
      const leg = mesh(new THREE.BoxGeometry(0.1, 0.35, 0.1), C.plum);
      leg.position.set(x, 0.18, z);
      sheep.add(leg);
    });
    sheep.position.set(1.9, 0, 1.0);
    sheep.rotation.y = -0.6;
    g.add(sheep);
    g.userData.sheep = sheep;
    // çit
    for (let i = 0; i < 4; i++) {
      const post = mesh(new THREE.BoxGeometry(0.12, 0.6, 0.12), C.cream);
      post.position.set(-1.9 + i * 0.01, 0.3, -0.8 + i * 0.6);
      g.add(post);
    }
    const rail = mesh(new THREE.BoxGeometry(0.06, 0.1, 1.9), C.cream);
    rail.position.set(-1.9, 0.42, 0.1);
    g.add(rail);
    return g;
  },
  balonlar() {
    const g = new THREE.Group();
    const cart = mesh(new THREE.BoxGeometry(1.2, 0.6, 0.8), C.blue);
    cart.position.y = 0.45;
    g.add(cart);
    [-0.4, 0.4].forEach(x => {
      const wheel = mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.1, 10), C.plum);
      wheel.rotation.x = Math.PI / 2;
      wheel.position.set(x, 0.18, 0.42);
      g.add(wheel);
    });
    const anchor = new THREE.Vector3(0, 0.8, 0);
    const balloons = [];
    [[C.coral, -0.75, 2.6, 0.1], [C.sun, 0.05, 3.15, -0.15], [C.purple, 0.8, 2.55, 0.15], [C.pink, 0.35, 2.2, 0.55]].forEach(([c, x, y, z], i) => {
      const b = mesh(new THREE.SphereGeometry(0.5, 12, 10), c, { roughness: 0.4 });
      b.scale.set(1, 1.18, 1);
      b.position.set(x, y, z);
      const lineGeo = new THREE.BufferGeometry().setFromPoints([anchor, new THREE.Vector3(x, y - 0.6, z)]);
      const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: C.plum }));
      g.add(b, line);
      balloons.push({ b, line, base: new THREE.Vector3(x, y, z), phase: i * 1.3 });
    });
    g.userData.balloons = balloons;
    g.userData.anchor = anchor;
    return g;
  },
  sayilar() {
    const g = new THREE.Group();
    const trunk = mesh(new THREE.CylinderGeometry(0.25, 0.38, 1.7, 6), C.trunk);
    trunk.position.y = 0.85;
    const crown = mesh(new THREE.IcosahedronGeometry(1.35, 1), C.leaf);
    crown.position.y = 2.45;
    g.add(trunk, crown);
    const dirs = [[0.5, 0.2, 0.85], [-0.6, 0.4, 0.7], [0.9, -0.1, 0.1], [-0.2, -0.3, 0.95], [0.1, 0.7, 0.7], [-0.9, -0.1, 0.3], [0.6, 0.6, -0.4]];
    dirs.forEach(d => {
      const v = new THREE.Vector3(...d).normalize().multiplyScalar(1.3);
      const o = mesh(new THREE.IcosahedronGeometry(0.2, 1), C.orange, { roughness: 0.5 });
      o.position.set(v.x, 2.45 + v.y, v.z);
      g.add(o);
    });
    const basket = mesh(new THREE.CylinderGeometry(0.55, 0.4, 0.45, 10), C.wood);
    basket.position.set(1.3, 0.23, 0.8);
    g.add(basket);
    [[1.15, 0.85], [1.45, 0.75], [1.3, 0.95]].forEach(([x, z], i) => {
      const o = mesh(new THREE.IcosahedronGeometry(0.2, 1), C.orange, { roughness: 0.5 });
      o.position.set(x, 0.55 + (i === 2 ? 0.15 : 0), z);
      g.add(o);
    });
    return g;
  },
  sekiller() {
    const g = new THREE.Group();
    const cube = mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), C.blue);
    cube.position.set(-0.7, 0.45, 0);
    cube.rotation.y = 0.4;
    const cone = mesh(new THREE.ConeGeometry(0.55, 1.2, 4), C.sun);
    cone.position.set(0.75, 0.6, -0.3);
    const ball = mesh(new THREE.IcosahedronGeometry(0.48, 1), C.coral, { roughness: 0.5 });
    ball.position.set(0.3, 0.48, 0.75);
    const torus = mesh(new THREE.TorusGeometry(0.38, 0.15, 6, 14), C.leaf2);
    torus.position.set(-0.7, 1.32, 0);
    torus.rotation.y = 0.4;
    const star = mesh(new THREE.OctahedronGeometry(0.35, 0), C.purple);
    star.position.set(0.75, 1.6, -0.3);
    g.add(cube, cone, ball, torus, star);
    g.userData.spin = [torus, star];
    return g;
  },
  hafiza() {
    const g = new THREE.Group();
    const base = mesh(new THREE.BoxGeometry(1.7, 0.85, 1.1), C.woodDark);
    base.position.y = 0.43;
    g.add(base);
    [-0.55, 0.55].forEach(x => {
      const band = mesh(new THREE.BoxGeometry(0.14, 0.88, 1.14), C.gold, { roughness: 0.35, metalness: 0.3 });
      band.position.set(x, 0.43, 0);
      g.add(band);
    });
    const lidPivot = new THREE.Group();
    lidPivot.position.set(0, 0.86, -0.55);
    const lid = mesh(new THREE.BoxGeometry(1.7, 0.3, 1.1), C.woodDark);
    lid.position.set(0, 0.15, 0.55);
    lidPivot.add(lid);
    lidPivot.rotation.x = -1.05;
    g.add(lidPivot);
    [[-0.4, C.gold], [0, C.pink], [0.4, C.blue], [-0.15, C.gold], [0.2, C.gold]].forEach(([x, c], i) => {
      const gem = mesh(i < 3 ? new THREE.OctahedronGeometry(0.17, 0) : new THREE.CylinderGeometry(0.15, 0.15, 0.06, 10), c, { roughness: 0.25, metalness: 0.4, emissive: c, emissiveIntensity: 0.25 });
      gem.position.set(x, 0.92 + (i % 2) * 0.06, i < 3 ? 0.1 : -0.15);
      g.add(gem);
    });
    // kartlar
    [[1.35, C.purple, -0.25], [1.75, C.cream, 0.2]].forEach(([x, c, r]) => {
      const card = mesh(new THREE.BoxGeometry(0.6, 0.85, 0.06), c);
      card.position.set(x, 0.42, 0.45);
      card.rotation.set(-0.2, r, r * 0.5);
      g.add(card);
    });
    g.userData.lid = lidPivot;
    return g;
  },
  muzik() {
    const g = new THREE.Group();
    const drum = mesh(new THREE.CylinderGeometry(0.75, 0.75, 0.85, 14), C.red);
    drum.position.y = 0.43;
    const skin = mesh(new THREE.CylinderGeometry(0.78, 0.78, 0.06, 14), C.cream);
    skin.position.y = 0.88;
    const rimB = mesh(new THREE.CylinderGeometry(0.79, 0.79, 0.08, 14), C.sun);
    rimB.position.y = 0.06;
    g.add(drum, skin, rimB);
    [0.4, -0.4].forEach((r, i) => {
      const stick = mesh(new THREE.CylinderGeometry(0.04, 0.04, 1, 5), C.wood);
      stick.position.set(i ? -0.15 : 0.15, 1.15, 0);
      stick.rotation.z = r;
      g.add(stick);
    });
    // ksilofon
    const xylo = new THREE.Group();
    [C.coral, C.orange, C.sun, C.leaf2, C.blue, C.purple].forEach((c, i) => {
      const bar = mesh(new THREE.BoxGeometry(0.22, 0.1, 0.9 - i * 0.08), c);
      bar.position.set(i * 0.26, 0.42, 0);
      xylo.add(bar);
    });
    const leg = mesh(new THREE.BoxGeometry(1.6, 0.35, 0.12), C.woodDark);
    leg.position.set(0.65, 0.2, 0);
    xylo.add(leg);
    xylo.position.set(-2.1, 0, 0.6);
    xylo.rotation.y = 0.3;
    g.add(xylo);
    const notes = [];
    [[C.pink, -0.6, 2.2], [C.blue, 0.7, 2.6]].forEach(([c, x, y], i) => {
      const n = new THREE.Group();
      const head = mesh(new THREE.SphereGeometry(0.22, 10, 8), c);
      head.scale.set(1.25, 0.9, 0.8);
      const stem = mesh(new THREE.BoxGeometry(0.06, 0.75, 0.06), C.plum);
      stem.position.set(0.22, 0.36, 0);
      n.add(head, stem);
      n.position.set(x, y, 0.2);
      g.add(n);
      notes.push({ n, y, phase: i * 1.7 });
    });
    g.userData.notes = notes;
    return g;
  },
};

// ---------- Ana fonksiyon ----------
export function createIsland({ canvas, badgeLayer, zones, onSelect, onTreehouse }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  // gökyüzü gradyanı
  const sky = document.createElement('canvas');
  sky.width = 4; sky.height = 256;
  const sg = sky.getContext('2d');
  const grd = sg.createLinearGradient(0, 0, 0, 256);
  grd.addColorStop(0, '#5EC3E6');
  grd.addColorStop(0.55, '#A9E4EE');
  grd.addColorStop(1, '#FFE6BE');
  sg.fillStyle = grd;
  sg.fillRect(0, 0, 4, 256);
  const skyTex = new THREE.CanvasTexture(sky);
  skyTex.colorSpace = THREE.SRGBColorSpace;
  scene.background = skyTex;
  scene.fog = new THREE.Fog('#CDEFF0', 75, 180);

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 400);

  scene.add(new THREE.HemisphereLight('#D6F4FF', '#FFD9A8', 1.35));
  const sun = new THREE.DirectionalLight('#FFF1D6', 2.1);
  sun.position.set(14, 22, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1536, 1536);
  Object.assign(sun.shadow.camera, { left: -21, right: 21, top: 21, bottom: -21, near: 1, far: 80 });
  sun.shadow.bias = -0.0015;
  scene.add(sun);

  const sunDisk = new THREE.Mesh(new THREE.CircleGeometry(6, 28), new THREE.MeshBasicMaterial({ color: '#FFE38A', fog: false }));
  sunDisk.position.set(70, 48, -120);
  scene.add(sunDisk);

  buildGround(scene);
  const waves = buildWater(scene);

  const center = treehouse();
  center.position.y = 1.55;
  scene.add(center);

  // patika taşları
  for (let i = 0; i < 30; i++) {
    const a = (i / 30) * Math.PI * 2;
    const s = mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.1, 6), C.cream);
    s.position.set(Math.sin(a) * 5, 1.58, Math.cos(a) * 5);
    s.rotation.y = rand() * 3;
    scene.add(s);
  }

  // bölgeler
  const zoneObjs = zones.map((z, i) => {
    const a = (i / zones.length) * Math.PI * 2;
    const R = i % 2 ? 11.8 : 8.2;
    const g = new THREE.Group();
    const pad = mesh(new THREE.CylinderGeometry(2.1, 2.25, 0.14, 24), C.sandPad);
    pad.position.y = 0.04;
    g.add(pad);
    const lm = LANDMARKS[z.id]();
    lm.scale.setScalar(0.92);
    g.add(lm);
    g.position.set(Math.sin(a) * R, 1.55, Math.cos(a) * R);
    g.rotation.y = a;
    g.userData.zone = z.id;
    scene.add(g);
    return { ...z, group: g, lm, angle: a, anchor: new THREE.Vector3(Math.sin(a) * R, 1.55 + 3.1, Math.cos(a) * R) };
  });

  // süs: palmiyeler, ağaçlar, kayalar, çiçekler
  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * Math.PI * 2 + 0.3;
    const p = palm(rr(3.4, 4.6));
    const r = rr(15.3, 16.2);
    p.position.set(Math.sin(a) * r, 0.65, Math.cos(a) * r);
    p.rotation.y = -a + Math.PI / 2;
    scene.add(p);
  }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + Math.PI / 12 + rr(-0.06, 0.06);
    const t = tree(rr(0.7, 1.1), [C.leaf, C.leaf2, C.leaf3][i % 3]);
    const r = i % 2 ? rr(9.8, 10.4) : rr(3.2, 3.7);
    t.position.set(Math.sin(a) * r, 1.55, Math.cos(a) * r);
    scene.add(t);
  }
  for (let i = 0; i < 18; i++) {
    const a = rand() * Math.PI * 2;
    const r = rr(16.4, 18.6);
    const k = rock(rr(0.3, 0.75));
    k.position.set(Math.sin(a) * r, 0.5, Math.cos(a) * r);
    scene.add(k);
  }
  const flowerCols = [C.pink, C.sun, C.cream, C.purple];
  for (let i = 0; i < 70; i++) {
    const a = rand() * Math.PI * 2;
    const r = rr(2.6, 14);
    // bölge alanlarına çiçek koyma
    const near = zoneObjs.some(z => Math.hypot(Math.sin(a) * r - z.group.position.x, Math.cos(a) * r - z.group.position.z) < 2.6);
    if (near || Math.abs(r - 5) < 0.6) continue;
    const f = mesh(new THREE.IcosahedronGeometry(0.13, 0), flowerCols[i % 4]);
    f.position.set(Math.sin(a) * r, 1.62, Math.cos(a) * r);
    scene.add(f);
  }

  const clouds = [];
  for (let i = 0; i < 6; i++) {
    const c = cloud();
    const a = (i / 6) * Math.PI * 2;
    const r = rr(30, 48);
    c.position.set(Math.sin(a) * r, rr(9, 14), Math.cos(a) * r);
    c.userData.a = a; c.userData.r = r; c.userData.s = rr(0.012, 0.03);
    scene.add(c);
    clouds.push(c);
  }
  const ship = boat();
  scene.add(ship);

  scene.traverse(o => {
    if (o.isMesh) {
      let p = o, skip = false;
      while (p) { if (p.userData.noShadow) skip = true; p = p.parent; }
      if (!skip) { o.castShadow = true; o.receiveShadow = true; }
    }
  });

  // ---------- Kamera ve kontrol ----------
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.rotateSpeed = 0.55;
  controls.zoomSpeed = 0.6;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.45;
  controls.target.set(0, 2.6, 0);

  let home = { dist: 26, polar: 1.02 };
  function layout() {
    const w = canvas.clientWidth || innerWidth, hgt = canvas.clientHeight || innerHeight;
    renderer.setSize(w, hgt, false);
    const aspect = w / hgt;
    const portrait = aspect < 0.85;
    camera.fov = portrait ? 50 : 40;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const dW = (portrait ? 31.5 : 36) / (2 * t * aspect);
    const dH = (portrait ? 24 : 33) / (2 * t);
    home = { dist: Math.max(dW, dH), polar: portrait ? 0.6 : 0.95 };
    controls.minDistance = home.dist * 0.62;
    controls.maxDistance = home.dist * 1.2;
    controls.minPolarAngle = 0.42;
    controls.maxPolarAngle = 1.22;
  }

  const sph = new THREE.Spherical();
  function placeCamera(dist, polar, az, target = controls.target) {
    sph.set(dist, polar, az);
    camera.position.setFromSpherical(sph).add(target);
    camera.lookAt(target);
  }

  let tween = null;
  function animateTo({ dist, polar, az, target, ms = 900, done }) {
    const fromT = controls.target.clone();
    const off = camera.position.clone().sub(fromT);
    const s0 = new THREE.Spherical().setFromVector3(off);
    let dAz = az - s0.theta;
    while (dAz > Math.PI) dAz -= Math.PI * 2;
    while (dAz < -Math.PI) dAz += Math.PI * 2;
    tween = { t0: performance.now(), ms, s0, dist, polar, dAz, fromT, toT: target || fromT, done };
  }
  function stepTween(now) {
    if (!tween) return false;
    const k = Math.min(1, (now - tween.t0) / tween.ms);
    const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    const tgt = tween.fromT.clone().lerp(tween.toT, e);
    controls.target.copy(tgt);
    placeCamera(
      tween.s0.radius + (tween.dist - tween.s0.radius) * e,
      tween.s0.phi + (tween.polar - tween.s0.phi) * e,
      tween.s0.theta + tween.dAz * e, tgt);
    if (k >= 1) { const d = tween.done; tween = null; d && d(); }
    return true;
  }

  // ---------- Rozetler (HTML) ----------
  const badges = zoneObjs.map(z => {
    const b = document.createElement('button');
    b.className = 'zone-badge';
    b.setAttribute('aria-label', z.title.tr);
    b.innerHTML = `<span class="zb-ico">${z.icon}</span><span class="zb-name">${z.titleText()}</span>`;
    b.addEventListener('click', () => select(z.id));
    badgeLayer.append(b);
    return { z, b };
  });
  function refreshBadgeNames() { badges.forEach(({ z, b }) => { b.querySelector('.zb-name').textContent = z.titleText(); b.setAttribute('aria-label', z.titleText()); }); }

  const v = new THREE.Vector3();
  function updateBadges() {
    const w = canvas.clientWidth, hgt = canvas.clientHeight;
    const camXZ = new THREE.Vector2(camera.position.x, camera.position.z).normalize();
    badges.forEach(({ z, b }) => {
      v.copy(z.anchor).project(camera);
      const x = (v.x * 0.5 + 0.5) * w, y = (-v.y * 0.5 + 0.5) * hgt;
      const facing = new THREE.Vector2(z.anchor.x, z.anchor.z).normalize().dot(camXZ);
      const back = facing < -0.25;
      b.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -100%) scale(${(0.7 + 0.3 * (facing + 1) / 2).toFixed(2)})`;
      b.classList.toggle('behind', back);
      b.classList.toggle('far', facing < 0.25);
      b.style.zIndex = String(Math.round((facing + 1) * 100));
      b.style.visibility = v.z > 1 ? 'hidden' : 'visible';
    });
  }

  // ---------- Dokunma ----------
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let down = null;
  canvas.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  canvas.addEventListener('pointerup', e => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const quick = performance.now() - down.t < 450;
    down = null;
    if (moved > 10 || !quick || busy) return;
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects([center, ...zoneObjs.map(z => z.group)], true);
    if (!hits.length) return;
    let o = hits[0].object;
    while (o && !o.userData.zone && o !== center) o = o.parent;
    if (o === center) onTreehouse && onTreehouse();
    else if (o) select(o.userData.zone);
  });

  let resumeT = null;
  controls.addEventListener('start', () => { controls.autoRotate = false; clearTimeout(resumeT); });
  controls.addEventListener('end', () => { clearTimeout(resumeT); resumeT = setTimeout(() => (controls.autoRotate = true), 7000); });

  let busy = false;
  function select(id) {
    if (busy) return;
    const z = zoneObjs.find(q => q.id === id);
    if (!z) return;
    busy = true;
    controls.enabled = false;
    controls.autoRotate = false;
    const target = z.group.position.clone().add(new THREE.Vector3(0, 1.3, 0));
    onSelect(id, 'start');
    animateTo({ dist: 9, polar: 1.05, az: z.angle, target, ms: 850, done: () => onSelect(id, 'enter') });
  }

  // ---------- Döngü ----------
  let running = false, raf = 0, last = 0;
  const clock = new THREE.Clock();
  function frame(now) {
    if (!running) return;
    raf = requestAnimationFrame(frame);
    const t = clock.getElapsedTime();
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    waves(t);
    const moving = stepTween(now);
    if (!moving) controls.update(dt);

    clouds.forEach(c => {
      c.userData.a += c.userData.s * dt;
      c.position.x = Math.sin(c.userData.a) * c.userData.r;
      c.position.z = Math.cos(c.userData.a) * c.userData.r;
    });
    const ba = t * 0.06;
    ship.position.set(Math.sin(ba) * 25, Math.sin(t * 1.4) * 0.12, Math.cos(ba) * 21);
    ship.rotation.y = ba + Math.PI;
    ship.rotation.z = Math.sin(t * 1.2) * 0.06;
    center.userData.flag.rotation.x = Math.sin(t * 3) * 0.25;
    sunDisk.lookAt(camera.position);

    zoneObjs.forEach(z => {
      const u = z.lm.userData;
      if (u.balloons) u.balloons.forEach(({ b, line, base, phase }) => {
        b.position.set(base.x + Math.sin(t * 0.8 + phase) * 0.12, base.y + Math.sin(t * 1.3 + phase) * 0.15, base.z);
        line.geometry.setFromPoints([u.anchor, new THREE.Vector3(b.position.x, b.position.y - 0.6, b.position.z)]);
      });
      if (u.notes) u.notes.forEach(({ n, y, phase }) => { n.position.y = y + Math.sin(t * 2 + phase) * 0.2; n.rotation.z = Math.sin(t * 1.5 + phase) * 0.25; });
      if (u.spin) u.spin.forEach((s, i) => (s.rotation.y = t * (i ? 1.4 : 0.9)));
      if (u.lid) u.lid.rotation.x = -1.05 + Math.sin(t * 1.6) * 0.12;
      if (u.sheep) u.sheep.position.y = Math.abs(Math.sin(t * 2.2)) * 0.12;
      if (u.moles) u.moles.forEach((m, i) => { m.position.y = -0.35 + Math.max(0, Math.sin(t * 1.8 + i * 2.1)) * 0.55; });
      if (u.bear) u.bear.rotation.z = Math.sin(t * 1.6) * 0.07;
      if (u.brush) u.brush.rotation.z = 0.5 + Math.sin(t * 3) * 0.25;
      if (u.beads) u.beads.forEach((b, i) => { b.position.x = b.userData.x + Math.sin(t * 1.2 + i * 0.7) * 0.08; });
    });

    renderer.render(scene, camera);
    updateBadges();
  }

  function onResize() { layout(); }
  addEventListener('resize', onResize);
  layout();
  placeCamera(home.dist * 1.9, 0.55, -1.4);

  let intro = true;
  return {
    start() {
      if (running) return;
      running = true;
      layout();
      last = performance.now();
      raf = requestAnimationFrame(frame);
      if (intro) {
        intro = false;
        controls.enabled = false;
        animateTo({ dist: home.dist, polar: home.polar, az: 0.35, ms: 2600, done: () => { controls.enabled = true; } });
      }
    },
    stop() { running = false; cancelAnimationFrame(raf); },
    debug() { const v = new THREE.Vector3(0, 1.5, 0).project(camera); return { c: [v.x, v.y], cam: camera.position.toArray().map(n => +n.toFixed(1)), t: controls.target.toArray(), fov: camera.fov, aspect: camera.aspect }; },
    /** Oyundan dönüşte kamerayı adaya geri çek */
    back() {
      busy = false;
      controls.enabled = false;
      const off = camera.position.clone().sub(controls.target);
      const az = new THREE.Spherical().setFromVector3(off).theta;
      animateTo({ dist: home.dist, polar: home.polar, az, target: new THREE.Vector3(0, 2.6, 0), ms: 900, done: () => { controls.enabled = true; resumeT = setTimeout(() => (controls.autoRotate = true), 5000); } });
    },
    refreshBadgeNames,
    select,
  };
}

// ---------- Yeni bölgeler ----------
function letterTexture(letter, bg) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, 128, 128);
  g.strokeStyle = C.plum; g.lineWidth = 10; g.strokeRect(5, 5, 118, 118);
  g.font = '700 84px Fredoka, system-ui, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 8; g.strokeText(letter, 64, 70);
  g.fillStyle = '#fff'; g.fillText(letter, 64, 70);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function letterBlock(letter, bg, s = 1) {
  const m = new THREE.MeshStandardMaterial({ map: letterTexture(letter, bg), roughness: 0.75 });
  const b = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), m);
  return b;
}
function puzzlePiece(color, s = 1) {
  const sh = new THREE.Shape();
  sh.moveTo(-1, -1); sh.lineTo(1, -1); sh.lineTo(1, -0.32);
  sh.absarc(1, 0, 0.32, -Math.PI / 2, Math.PI / 2, false);
  sh.lineTo(1, 1); sh.lineTo(0.32, 1);
  sh.absarc(0, 1, 0.32, 0, Math.PI, false);
  sh.lineTo(-1, 1); sh.lineTo(-1, -1);
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 1, curveSegments: 8 });
  geo.center();
  const m = mesh(geo, color);
  m.scale.setScalar(s);
  return m;
}
function checkerTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { g.fillStyle = (x + y) % 2 ? '#FFFFFF' : '#FF6F59'; g.fillRect(x * 8, y * 8, 8, 8); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.magFilter = THREE.NearestFilter;
  return t;
}

Object.assign(LANDMARKS, {
  boyama() {
    const g = new THREE.Group();
    [[-0.55, 0.25], [0.55, 0.25], [0, -0.5]].forEach(([x, z], i) => {
      const leg = mesh(new THREE.BoxGeometry(0.1, 2.6, 0.1), C.woodDark);
      leg.position.set(x * 0.8, 1.2, z * 0.8);
      leg.rotation.set(z > 0 ? -0.18 : 0.3, 0, -x * 0.22);
      g.add(leg);
    });
    const board = mesh(new THREE.BoxGeometry(1.8, 1.4, 0.08), C.cream);
    board.position.set(0, 1.75, 0.3);
    board.rotation.x = -0.18;
    g.add(board);
    [[C.red, -0.45, 1.95, 0.32], [C.sun, 0.2, 2.05, 0.28], [C.blue, 0.45, 1.55, 0.25], [C.leaf2, -0.2, 1.5, 0.3], [C.purple, 0.05, 1.75, 0.22]].forEach(([c, x, y, r]) => {
      const blob = mesh(new THREE.IcosahedronGeometry(r, 0), c);
      blob.scale.z = 0.15;
      blob.position.set(x, y, 0.37);
      blob.rotation.x = -0.18;
      g.add(blob);
    });
    [[C.red, 1.3, 0.6], [C.sun, 1.55, 0.05], [C.blue, 1.1, -0.35]].forEach(([c, x, z]) => {
      const pot = mesh(new THREE.CylinderGeometry(0.25, 0.22, 0.34, 10), C.cream);
      pot.position.set(x, 0.17, z);
      const paint = mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.05, 10), c);
      paint.position.set(x, 0.33, z);
      g.add(pot, paint);
    });
    const brush = new THREE.Group();
    const handle = mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.1, 6), C.wood);
    const tip = mesh(new THREE.ConeGeometry(0.09, 0.26, 6), C.coral);
    tip.position.y = 0.66;
    brush.add(handle, tip);
    brush.position.set(1.3, 0.9, 0.6);
    g.add(brush);
    g.userData.brush = brush;
    return g;
  },
  harfler() {
    const g = new THREE.Group();
    const a = letterBlock('A', C.coral, 1.1);
    a.position.set(-0.6, 0.55, 0);
    a.rotation.y = 0.25;
    const b = letterBlock('B', C.blue, 1.1);
    b.position.set(0.6, 0.55, 0.1);
    b.rotation.y = -0.2;
    const c = letterBlock('C', C.leaf, 1.0);
    c.position.set(0, 1.6, 0.05);
    c.rotation.y = 0.1;
    const d = letterBlock('Ç', C.sun, 0.8);
    d.position.set(1.35, 0.4, 0.9);
    d.rotation.y = -0.6;
    g.add(a, b, c, d);
    return g;
  },
  yapboz() {
    const g = new THREE.Group();
    const big = puzzlePiece(C.coral, 0.85);
    big.position.set(-0.2, 1.05, 0);
    big.rotation.set(-0.15, 0.2, 0.08);
    const flat1 = puzzlePiece(C.sun, 0.55);
    flat1.rotation.x = -Math.PI / 2;
    flat1.position.set(1.1, 0.12, 0.7);
    const flat2 = puzzlePiece(C.blue, 0.55);
    flat2.rotation.set(-Math.PI / 2, 0, 1.2);
    flat2.position.set(-1.3, 0.12, 0.8);
    g.add(big, flat1, flat2);
    return g;
  },
  oruntu() {
    const g = new THREE.Group();
    [-1.1, 1.1].forEach(x => {
      const post = mesh(new THREE.BoxGeometry(0.16, 2.2, 0.16), C.woodDark);
      post.position.set(x, 1.1, 0);
      g.add(post);
    });
    const top = mesh(new THREE.BoxGeometry(2.5, 0.16, 0.2), C.woodDark);
    top.position.y = 2.2;
    const foot = mesh(new THREE.BoxGeometry(2.7, 0.18, 0.7), C.wood);
    foot.position.y = 0.09;
    g.add(top, foot);
    const beads = [];
    const sets = [[C.coral, C.sun], [C.blue, C.blue, C.pink], [C.leaf2, C.purple, C.sun]];
    [0.65, 1.2, 1.75].forEach((y, row) => {
      const rod = mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.2, 5), C.cream);
      rod.rotation.z = Math.PI / 2;
      rod.position.y = y;
      g.add(rod);
      for (let i = 0; i < 6; i++) {
        const bead = mesh(new THREE.SphereGeometry(0.17, 10, 8), sets[row][i % sets[row].length], { roughness: 0.4 });
        bead.scale.x = 0.8;
        const x = -0.85 + i * 0.3;
        bead.position.set(x, y, 0);
        bead.userData.x = x;
        g.add(bead);
        beads.push(bead);
      }
    });
    g.userData.beads = beads;
    return g;
  },
  besle() {
    const g = new THREE.Group();
    const blanket = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.05, 2.2), new THREE.MeshStandardMaterial({ map: checkerTexture(), roughness: 0.9 }));
    blanket.position.y = 0.03;
    blanket.rotation.y = 0.25;
    g.add(blanket);
    const bear = new THREE.Group();
    const body = mesh(new THREE.IcosahedronGeometry(0.62, 1), '#A86B45');
    body.scale.set(1, 1.1, 0.9);
    body.position.y = 0.62;
    const belly = mesh(new THREE.IcosahedronGeometry(0.4, 1), '#E7C29A');
    belly.scale.set(1, 1.1, 0.5);
    belly.position.set(0, 0.58, 0.38);
    const head = mesh(new THREE.IcosahedronGeometry(0.45, 1), '#A86B45');
    head.position.y = 1.45;
    const snout = mesh(new THREE.IcosahedronGeometry(0.2, 1), '#E7C29A');
    snout.scale.z = 0.7;
    snout.position.set(0, 1.38, 0.38);
    const nose = mesh(new THREE.IcosahedronGeometry(0.07, 0), C.plum);
    nose.position.set(0, 1.44, 0.53);
    bear.add(body, belly, head, snout, nose);
    [-0.32, 0.32].forEach(x => {
      const ear = mesh(new THREE.IcosahedronGeometry(0.15, 0), '#A86B45');
      ear.position.set(x, 1.8, 0);
      const eye = mesh(new THREE.IcosahedronGeometry(0.05, 0), C.plum);
      eye.position.set(x * 0.45, 1.55, 0.4);
      const paw = mesh(new THREE.IcosahedronGeometry(0.17, 0), '#A86B45');
      paw.position.set(x * 1.5, 0.15, 0.4);
      bear.add(ear, eye, paw);
    });
    bear.position.set(-0.4, 0.05, -0.2);
    g.add(bear);
    g.userData.bear = bear;
    const basket = mesh(new THREE.CylinderGeometry(0.45, 0.35, 0.4, 10), C.wood);
    basket.position.set(0.9, 0.25, 0.4);
    const apple = mesh(new THREE.IcosahedronGeometry(0.18, 1), C.red, { roughness: 0.5 });
    apple.position.set(0.85, 0.55, 0.4);
    const pear = mesh(new THREE.IcosahedronGeometry(0.16, 1), '#B5D334', { roughness: 0.5 });
    pear.position.set(1.05, 0.52, 0.25);
    const banana = mesh(new THREE.TorusGeometry(0.22, 0.06, 6, 10, Math.PI * 0.8), C.sun);
    banana.position.set(0.3, 0.12, 0.9);
    banana.rotation.x = -Math.PI / 2;
    g.add(basket, apple, pear, banana);
    return g;
  },
  saklambac() {
    const g = new THREE.Group();
    const moles = [];
    [[-1.0, -0.3], [0.9, -0.5], [0, 0.8]].forEach(([x, z], i) => {
      const mound = mesh(new THREE.CylinderGeometry(0.5, 0.75, 0.32, 10), C.woodDark);
      mound.position.set(x, 0.16, z);
      const hole = mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.02, 10), C.plum);
      hole.position.set(x, 0.33, z);
      g.add(mound, hole);
      const mole = new THREE.Group();
      const head = mesh(new THREE.IcosahedronGeometry(0.36, 1), '#A86B45');
      head.scale.y = 1.15;
      const nose = mesh(new THREE.IcosahedronGeometry(0.08, 0), C.pink);
      nose.position.set(0, 0.05, 0.34);
      mole.add(head, nose);
      [-0.13, 0.13].forEach(ex => {
        const eye = mesh(new THREE.IcosahedronGeometry(0.05, 0), C.plum);
        eye.position.set(ex, 0.17, 0.3);
        mole.add(eye);
      });
      const inner = new THREE.Group();
      inner.add(mole);
      inner.position.set(x, 0.33, z);
      g.add(inner);
      moles.push(mole);
    });
    g.userData.moles = moles;
    return g;
  },
});
