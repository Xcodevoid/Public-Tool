import * as THREE from './vendor/three.module.min.js';

/* ---------------------------------------------------------------------
 * Seeded 2D Perlin noise (classic reference algorithm, public domain
 * structure) + fractal Brownian motion for natural-looking terrain.
 * ------------------------------------------------------------------- */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeNoise2D(seed) {
  const rand = mulberry32(seed);
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = p[i]; p[i] = p[j]; p[j] = tmp;
  }
  const perm = new Uint8Array(512);
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];

  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + t * (b - a);
  const grad = (hash, x, y) => {
    const h = hash & 7;
    const u = h < 4 ? x : y;
    const v = h < 4 ? y : x;
    return (h & 1 ? -u : u) + (h & 2 ? -2 * v : 2 * v);
  };

  return function noise2D(x, y) {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
    x -= Math.floor(x); y -= Math.floor(y);
    const u = fade(x), v = fade(y);
    const A = perm[X] + Y, AA = perm[A], AB = perm[A + 1];
    const B = perm[X + 1] + Y, BA = perm[B], BB = perm[B + 1];
    return lerp(
      lerp(grad(perm[AA], x, y), grad(perm[BA], x - 1, y), u),
      lerp(grad(perm[AB], x, y - 1), grad(perm[BB], x - 1, y - 1), u),
      v
    );
  };
}

function fbm(noise2D, x, z, { octaves = 4, persistence = 0.5, scale = 0.02 } = {}) {
  let amp = 1, freq = scale, sum = 0, max = 0;
  for (let i = 0; i < octaves; i++) {
    sum += noise2D(x * freq, z * freq) * amp;
    max += amp;
    amp *= persistence;
    freq *= 2;
  }
  return sum / max;
}

/* ---------------------------------------------------------------------
 * World data
 * ------------------------------------------------------------------- */
const SIZE_X = 64;
const SIZE_Z = 64;
const SIZE_Y = 32;
const WATER_LEVEL = 7;

const BLOCK = {
  AIR: 0, GRASS: 1, DIRT: 2, STONE: 3, SAND: 4, WATER: 5, WOOD: 6, LEAVES: 7, SNOW: 8, BEDROCK: 9,
};

const HOTBAR_BLOCKS = [BLOCK.GRASS, BLOCK.DIRT, BLOCK.STONE, BLOCK.SAND, BLOCK.WOOD, BLOCK.LEAVES, BLOCK.SNOW];
const HOTBAR_ICON_KEY = {
  [BLOCK.GRASS]: 'grass_top',
  [BLOCK.DIRT]: 'dirt',
  [BLOCK.STONE]: 'stone',
  [BLOCK.SAND]: 'sand',
  [BLOCK.WOOD]: 'wood_side',
  [BLOCK.LEAVES]: 'leaves',
  [BLOCK.SNOW]: 'snow',
};

/* ---------------------------------------------------------------------
 * Procedural pixel-art block textures — no external image assets.
 * Each is a tiny hand-painted-noise canvas, sampled with NearestFilter
 * so it reads as crisp, blocky pixel art rather than blurry photo-texture.
 * ------------------------------------------------------------------- */
function clampByte(v) { return Math.max(0, Math.min(255, v | 0)); }
function rgb(r, g, b) { return `rgb(${clampByte(r)},${clampByte(g)},${clampByte(b)})`; }

function paintNoise(ctx, size, [r, g, b], variance) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const d = (Math.random() - 0.5) * 2 * variance;
      ctx.fillStyle = rgb(r + d, g + d, b + d);
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

const GRASS_RGB = [92, 168, 82];
const DIRT_RGB = [122, 84, 51];
const WOOD_RGB = [96, 68, 44];

const TEXTURE_DRAWERS = {
  grass_top(ctx, size) { paintNoise(ctx, size, GRASS_RGB, 20); },
  dirt(ctx, size) {
    paintNoise(ctx, size, DIRT_RGB, 22);
    ctx.fillStyle = 'rgba(80,52,28,0.5)';
    for (let i = 0; i < size * 2; i++) {
      if (Math.random() < 0.4) ctx.fillRect((Math.random() * size) | 0, (Math.random() * size) | 0, 1, 1);
    }
  },
  grass_side(ctx, size) {
    paintNoise(ctx, size, DIRT_RGB, 18);
    for (let x = 0; x < size; x++) {
      const h = 3 + Math.floor(Math.random() * 3);
      for (let y = 0; y < h; y++) {
        const d = (Math.random() - 0.5) * 24;
        ctx.fillStyle = rgb(GRASS_RGB[0] + d, GRASS_RGB[1] + d, GRASS_RGB[2] + d);
        ctx.fillRect(x, y, 1, 1);
      }
    }
  },
  stone(ctx, size) {
    paintNoise(ctx, size, [128, 128, 138], 14);
    ctx.fillStyle = 'rgba(58,58,66,0.55)';
    for (let i = 0; i < 12; i++) {
      const w = 1 + ((Math.random() * 2) | 0);
      ctx.fillRect((Math.random() * size) | 0, (Math.random() * size) | 0, w, w);
    }
  },
  sand(ctx, size) { paintNoise(ctx, size, [222, 202, 140], 12); },
  snow(ctx, size) { paintNoise(ctx, size, [239, 245, 250], 6); },
  bedrock(ctx, size) {
    paintNoise(ctx, size, [58, 57, 66], 10);
    ctx.fillStyle = 'rgba(8,8,12,0.65)';
    for (let i = 0; i < 16; i++) {
      ctx.fillRect((Math.random() * size) | 0, (Math.random() * size) | 0, 2, 2);
    }
  },
  leaves(ctx, size) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (Math.random() < 0.14) continue; // hole -> transparent, gives a leafy silhouette
        const d = (Math.random() - 0.5) * 34;
        ctx.fillStyle = rgb(58 + d, 138 + d, 64 + d);
        ctx.fillRect(x, y, 1, 1);
      }
    }
  },
  wood_side(ctx, size) {
    for (let x = 0; x < size; x++) {
      const grain = Math.random() < 0.3 ? -18 : 0;
      for (let y = 0; y < size; y++) {
        const d = (Math.random() - 0.5) * 10 + grain;
        ctx.fillStyle = rgb(WOOD_RGB[0] + d, WOOD_RGB[1] + d, WOOD_RGB[2] + d);
        ctx.fillRect(x, y, 1, 1);
      }
    }
  },
  wood_top(ctx, size) {
    const c = size / 2;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dist = Math.hypot(x - c + 0.5, y - c + 0.5);
        const ring = Math.sin(dist * 1.3) * 12;
        const d = ring + (Math.random() - 0.5) * 6;
        ctx.fillStyle = rgb(150 + d, 112 + d, 72 + d);
        ctx.fillRect(x, y, 1, 1);
      }
    }
  },
  water(ctx, size) {
    for (let y = 0; y < size; y++) {
      const wave = Math.sin(y * 0.8) * 10;
      for (let x = 0; x < size; x++) {
        const d = wave + (Math.random() - 0.5) * 8;
        ctx.fillStyle = rgb(61 + d, 125 + d, 214 + d);
        ctx.fillRect(x, y, 1, 1);
      }
    }
  },
};

function makeTexture(key, size = 16) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  TEXTURE_DRAWERS[key](ctx, size);
  const dataUrl = canvas.toDataURL();
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return { texture, dataUrl };
}

const TEXTURE_KEYS = Object.keys(TEXTURE_DRAWERS);
const TEXTURES = {};
for (const key of TEXTURE_KEYS) TEXTURES[key] = makeTexture(key);

// Feed the same pixel-art textures into the game menu's CSS background.
document.documentElement.style.setProperty('--mc-dirt-tile', `url(${TEXTURES.dirt.dataUrl})`);
document.documentElement.style.setProperty('--mc-stone-tile', `url(${TEXTURES.stone.dataUrl})`);

class VoxelWorld {
  constructor(seed) {
    this.seed = seed;
    this.data = new Uint8Array(SIZE_X * SIZE_Y * SIZE_Z);
    this.heightMap = new Int16Array(SIZE_X * SIZE_Z);
    this.generate();
  }

  idx(x, y, z) {
    return x + z * SIZE_X + y * SIZE_X * SIZE_Z;
  }

  inBounds(x, y, z) {
    return x >= 0 && x < SIZE_X && y >= 0 && y < SIZE_Y && z >= 0 && z < SIZE_Z;
  }

  getBlock(x, y, z) {
    if (!this.inBounds(x, y, z)) return BLOCK.AIR;
    return this.data[this.idx(x, y, z)];
  }

  setBlock(x, y, z, type) {
    if (!this.inBounds(x, y, z)) return false;
    this.data[this.idx(x, y, z)] = type;
    return true;
  }

  surfaceHeight(x, z) {
    const cx = Math.max(0, Math.min(SIZE_X - 1, Math.floor(x)));
    const cz = Math.max(0, Math.min(SIZE_Z - 1, Math.floor(z)));
    return this.heightMap[cx + cz * SIZE_X];
  }

  generate() {
    const heightNoise = makeNoise2D(this.seed);
    const detailNoise = makeNoise2D(this.seed + 1337);
    const treeNoise = makeNoise2D(this.seed + 9001);

    for (let x = 0; x < SIZE_X; x++) {
      for (let z = 0; z < SIZE_Z; z++) {
        const base = fbm(heightNoise, x, z, { octaves: 4, persistence: 0.5, scale: 0.02 });
        const detail = fbm(detailNoise, x, z, { octaves: 2, persistence: 0.5, scale: 0.08 });
        // Fall off toward the edges so the world reads as an island.
        const dx = (x - SIZE_X / 2) / (SIZE_X / 2);
        const dz = (z - SIZE_Z / 2) / (SIZE_Z / 2);
        const edge = Math.max(0, 1 - (dx * dx + dz * dz));
        let h = 10 + base * 9 + detail * 3;
        h = Math.round(h * (0.35 + 0.65 * edge));
        h = Math.max(1, Math.min(SIZE_Y - 6, h));
        this.heightMap[x + z * SIZE_X] = h;

        for (let y = 0; y < SIZE_Y; y++) {
          let type = BLOCK.AIR;
          if (y === 0) type = BLOCK.BEDROCK;
          else if (y < h - 3) type = BLOCK.STONE;
          else if (y < h) type = BLOCK.DIRT;
          else if (y === h) {
            if (h <= WATER_LEVEL + 1) type = BLOCK.SAND;
            else if (h >= 21) type = BLOCK.SNOW;
            else type = BLOCK.GRASS;
          } else if (y <= WATER_LEVEL && y > h) {
            type = BLOCK.WATER;
          }
          if (type !== BLOCK.AIR) this.setBlock(x, y, z, type);
        }

        // Trees: only on dry grass, away from the very edge, sparse.
        if (
          h > WATER_LEVEL + 1 && h < 20 &&
          x > 2 && x < SIZE_X - 3 && z > 2 && z < SIZE_Z - 3 &&
          treeNoise(x * 0.6, z * 0.6) > 0.72
        ) {
          this.plantTree(x, h + 1, z);
        }
      }
    }
  }

  plantTree(x, y, z) {
    const trunkH = 3 + ((x * 7 + z * 13) % 3);
    for (let i = 0; i < trunkH; i++) this.setBlock(x, y + i, z, BLOCK.WOOD);
    const topY = y + trunkH;
    for (let ox = -2; ox <= 2; ox++) {
      for (let oz = -2; oz <= 2; oz++) {
        for (let oy = -1; oy <= 1; oy++) {
          if (Math.abs(ox) === 2 && Math.abs(oz) === 2) continue;
          const bx = x + ox, by = topY + oy, bz = z + oz;
          if (this.getBlock(bx, by, bz) === BLOCK.AIR) this.setBlock(bx, by, bz, BLOCK.LEAVES);
        }
      }
    }
    this.setBlock(x, topY + 2, z, BLOCK.LEAVES);
  }
}

/* ---------------------------------------------------------------------
 * Meshing: cull faces hidden by a solid neighbor, one merged textured
 * BufferGeometry per material (flat-shaded pixel-art blocks).
 * ------------------------------------------------------------------- */
const FACES = [
  { n: [1, 0, 0], corners: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]] },
  { n: [-1, 0, 0], corners: [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]] },
  { n: [0, 1, 0], corners: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]] },
  { n: [0, -1, 0], corners: [[0, 0, 1], [0, 0, 0], [1, 0, 0], [1, 0, 1]] },
  { n: [0, 0, 1], corners: [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]] },
  { n: [0, 0, -1], corners: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]] },
];
// Same winding for every face direction (verified: index 1 & 2 are always
// the "up" corners), so one UV template lines up grass_side's green
// overhang and wood_side's grain correctly on every side face.
const FACE_UV = [[0, 0], [0, 1], [1, 1], [1, 0]];

const FACE_TOP = 2, FACE_BOTTOM = 3;

function faceMaterialKey(type, dirIndex) {
  if (type === BLOCK.GRASS) {
    if (dirIndex === FACE_TOP) return 'grass_top';
    if (dirIndex === FACE_BOTTOM) return 'dirt';
    return 'grass_side';
  }
  if (type === BLOCK.WOOD) {
    return (dirIndex === FACE_TOP || dirIndex === FACE_BOTTOM) ? 'wood_top' : 'wood_side';
  }
  switch (type) {
    case BLOCK.DIRT: return 'dirt';
    case BLOCK.STONE: return 'stone';
    case BLOCK.SAND: return 'sand';
    case BLOCK.WATER: return 'water';
    case BLOCK.LEAVES: return 'leaves';
    case BLOCK.SNOW: return 'snow';
    case BLOCK.BEDROCK: return 'bedrock';
    default: return 'stone';
  }
}

function buildMeshes(world, materials, group) {
  for (const child of [...group.children]) {
    group.remove(child);
    child.geometry.dispose();
  }

  const buffers = new Map();
  const getBuf = (key) => {
    if (!buffers.has(key)) buffers.set(key, { positions: [], uvs: [], indices: [], count: 0 });
    return buffers.get(key);
  };

  for (let x = 0; x < SIZE_X; x++) {
    for (let z = 0; z < SIZE_Z; z++) {
      for (let y = 0; y < SIZE_Y; y++) {
        const type = world.getBlock(x, y, z);
        if (type === BLOCK.AIR) continue;
        for (let d = 0; d < FACES.length; d++) {
          const face = FACES[d];
          const nb = world.getBlock(x + face.n[0], y + face.n[1], z + face.n[2]);
          if (nb !== BLOCK.AIR) continue;
          const buf = getBuf(faceMaterialKey(type, d));
          const base = buf.count;
          for (let ci = 0; ci < 4; ci++) {
            const c = face.corners[ci];
            buf.positions.push(x + c[0], y + c[1], z + c[2]);
            buf.uvs.push(FACE_UV[ci][0], FACE_UV[ci][1]);
          }
          buf.indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
          buf.count += 4;
        }
      }
    }
  }

  for (const [key, buf] of buffers) {
    if (buf.count === 0) continue;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(buf.positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(buf.uvs, 2));
    geometry.setIndex(buf.indices);
    geometry.computeVertexNormals();
    const mesh = new THREE.Mesh(geometry, materials[key]);
    mesh.userData.materialKey = key;
    group.add(mesh);
  }
}

/* ---------------------------------------------------------------------
 * Game setup — lazily initialized on first visit to the Explore tab.
 * ------------------------------------------------------------------- */
const state = {
  initialized: false,
  running: false,
  renderer: null, scene: null, camera: null,
  world: null, meshGroup: null, materials: null,
  yaw: 0, pitch: 0,
  velocityY: 0,
  grounded: false,
  keys: Object.create(null),
  selectedBlock: HOTBAR_BLOCKS[0],
  pointerLocked: false,
  raf: null,
};

const EYE_HEIGHT = 1.7;
const MOVE_SPEED = 5.2;
const SPRINT_MULT = 1.7;
const JUMP_SPEED = 7.5;
const GRAVITY = 18;
const STEP_LIMIT = 1.15;
const REACH = 6;

function buildMaterials() {
  const mats = {};
  for (const key of TEXTURE_KEYS) {
    mats[key] = new THREE.MeshLambertMaterial({
      map: TEXTURES[key].texture,
      flatShading: true,
      transparent: key === 'water' || key === 'leaves',
      opacity: key === 'water' ? 0.85 : 1,
      alphaTest: key === 'leaves' ? 0.5 : 0,
    });
  }
  return mats;
}

function setupScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xbfe3ff);
  scene.fog = new THREE.FogExp2(0xbfe3ff, 0.018);

  const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 400);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x556b4a, 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 0.9);
  sun.position.set(0.6, 1, 0.3);
  scene.add(sun);
  scene.add(new THREE.AmbientLight(0xffffff, 0.25));

  return { renderer, scene, camera };
}

function spawnPlayer() {
  const cx = SIZE_X / 2, cz = SIZE_Z / 2;
  const h = state.world.surfaceHeight(cx, cz);
  state.camera.position.set(cx, h + 1 + EYE_HEIGHT, cz);
  state.yaw = Math.PI * 0.25;
  state.pitch = -0.15;
}

function initWorld(canvas) {
  const seed = (Math.random() * 0xffffffff) >>> 0;
  const { renderer, scene, camera } = setupScene(canvas);
  state.renderer = renderer;
  state.scene = scene;
  state.camera = camera;

  state.world = new VoxelWorld(seed);
  state.materials = buildMaterials();
  state.meshGroup = new THREE.Group();
  scene.add(state.meshGroup);
  buildMeshes(state.world, state.materials, state.meshGroup);

  spawnPlayer();
  resizeRenderer();
  state.initialized = true;
}

function resizeRenderer() {
  if (!state.renderer) return;
  const el = state.renderer.domElement.parentElement;
  const w = el.clientWidth, h = el.clientHeight;
  if (w === 0 || h === 0) return;
  state.renderer.setSize(w, h, false);
  state.camera.aspect = w / h;
  state.camera.updateProjectionMatrix();
}

/* ---------------------------------------------------------------------
 * Movement & collision (heightmap-based — simple, robust, no overhangs)
 * ------------------------------------------------------------------- */
function updatePlayer(dt) {
  const cam = state.camera;
  const forward = new THREE.Vector3(Math.sin(state.yaw), 0, Math.cos(state.yaw)).multiplyScalar(-1);
  const right = new THREE.Vector3(-forward.z, 0, forward.x);

  let moveX = 0, moveZ = 0;
  if (state.keys['KeyW']) { moveX += forward.x; moveZ += forward.z; }
  if (state.keys['KeyS']) { moveX -= forward.x; moveZ -= forward.z; }
  if (state.keys['KeyD']) { moveX += right.x; moveZ += right.z; }
  if (state.keys['KeyA']) { moveX -= right.x; moveZ -= right.z; }

  const len = Math.hypot(moveX, moveZ);
  const speed = MOVE_SPEED * (state.keys['ShiftLeft'] || state.keys['ShiftRight'] ? SPRINT_MULT : 1);
  if (len > 0.001) {
    moveX = (moveX / len) * speed * dt;
    moveZ = (moveZ / len) * speed * dt;

    const curGround = state.world.surfaceHeight(cam.position.x, cam.position.z);
    const targetX = cam.position.x + moveX;
    const targetZ = cam.position.z + moveZ;
    const targetGround = state.world.surfaceHeight(targetX, targetZ);

    const stepOk = !state.grounded || (targetGround - curGround) <= STEP_LIMIT;
    if (stepOk) {
      cam.position.x = Math.max(1, Math.min(SIZE_X - 2, targetX));
      cam.position.z = Math.max(1, Math.min(SIZE_Z - 2, targetZ));
    }
  }

  // Gravity + ground snap.
  const groundH = state.world.surfaceHeight(cam.position.x, cam.position.z);
  const floorY = groundH + 1 + EYE_HEIGHT;

  if (state.keys['Space'] && state.grounded) {
    state.velocityY = JUMP_SPEED;
    state.grounded = false;
  }

  state.velocityY -= GRAVITY * dt;
  cam.position.y += state.velocityY * dt;

  if (cam.position.y <= floorY) {
    cam.position.y = floorY;
    state.velocityY = 0;
    state.grounded = true;
  } else {
    state.grounded = false;
  }

  cam.rotation.order = 'YXZ';
  cam.rotation.y = state.yaw;
  cam.rotation.x = state.pitch;
}

/* ---------------------------------------------------------------------
 * Block break / place via raycast against the rendered meshes
 * ------------------------------------------------------------------- */
const raycaster = new THREE.Raycaster();
raycaster.far = REACH;

function pickBlock() {
  raycaster.set(state.camera.position, state.camera.getWorldDirection(new THREE.Vector3()));
  const hits = raycaster.intersectObjects(state.meshGroup.children, false);
  if (hits.length === 0) return null;
  const hit = hits[0];
  const normal = hit.face.normal;
  const point = hit.point;
  const breakPos = new THREE.Vector3(
    Math.floor(point.x - normal.x * 0.5),
    Math.floor(point.y - normal.y * 0.5),
    Math.floor(point.z - normal.z * 0.5)
  );
  const placePos = new THREE.Vector3(
    Math.floor(point.x + normal.x * 0.5),
    Math.floor(point.y + normal.y * 0.5),
    Math.floor(point.z + normal.z * 0.5)
  );
  return { breakPos, placePos };
}

function breakBlock() {
  const pick = pickBlock();
  if (!pick) return;
  const { x, y, z } = { x: pick.breakPos.x, y: pick.breakPos.y, z: pick.breakPos.z };
  if (state.world.getBlock(x, y, z) === BLOCK.BEDROCK) return;
  state.world.setBlock(x, y, z, BLOCK.AIR);
  buildMeshes(state.world, state.materials, state.meshGroup);
}

function placeBlock() {
  const pick = pickBlock();
  if (!pick) return;
  const { x, y, z } = { x: pick.placePos.x, y: pick.placePos.y, z: pick.placePos.z };
  const cam = state.camera;
  const dx = Math.abs((x + 0.5) - cam.position.x);
  const dy = Math.abs((y + 0.5) - cam.position.y);
  const dz = Math.abs((z + 0.5) - cam.position.z);
  if (dx < 0.6 && dz < 0.6 && dy < 1.8) return; // don't trap the player
  if (state.world.getBlock(x, y, z) !== BLOCK.AIR) return;
  state.world.setBlock(x, y, z, state.selectedBlock);
  buildMeshes(state.world, state.materials, state.meshGroup);
}

/* ---------------------------------------------------------------------
 * Input wiring
 * ------------------------------------------------------------------- */
let inputWired = false;
function wireInput(canvas, container) {
  if (inputWired) return;
  inputWired = true;

  window.addEventListener('keydown', (e) => { state.keys[e.code] = true; });
  window.addEventListener('keyup', (e) => { state.keys[e.code] = false; });

  window.addEventListener('keydown', (e) => {
    const num = Number(e.key);
    if (num >= 1 && num <= HOTBAR_BLOCKS.length) {
      state.selectedBlock = HOTBAR_BLOCKS[num - 1];
      renderHotbar();
    }
  });

  const startOverlay = document.getElementById('game-start-overlay');
  const startBtn = document.getElementById('game-start-btn');

  const requestLock = () => canvas.requestPointerLock();
  startBtn.addEventListener('click', requestLock);
  canvas.addEventListener('click', () => {
    if (!state.pointerLocked) requestLock();
  });

  document.addEventListener('pointerlockchange', () => {
    state.pointerLocked = document.pointerLockElement === canvas;
    startOverlay.hidden = state.pointerLocked;
    document.getElementById('game-hotbar').hidden = !state.pointerLocked;
  });

  document.addEventListener('mousemove', (e) => {
    if (!state.pointerLocked) return;
    state.yaw -= e.movementX * 0.0022;
    state.pitch -= e.movementY * 0.0022;
    state.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, state.pitch));
  });

  canvas.addEventListener('mousedown', (e) => {
    if (!state.pointerLocked) return;
    if (e.button === 0) breakBlock();
    if (e.button === 2) placeBlock();
  });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  window.addEventListener('resize', resizeRenderer);
}

/* ---------------------------------------------------------------------
 * Hotbar UI
 * ------------------------------------------------------------------- */
function renderHotbar() {
  const el = document.getElementById('game-hotbar');
  el.innerHTML = '';
  HOTBAR_BLOCKS.forEach((type, i) => {
    const slot = document.createElement('div');
    slot.className = 'hotbar-slot' + (type === state.selectedBlock ? ' is-active' : '');
    slot.style.backgroundImage = `url(${TEXTURES[HOTBAR_ICON_KEY[type]].dataUrl})`;
    slot.innerHTML = `<span class="slot-key">${i + 1}</span>`;
    slot.addEventListener('click', () => {
      state.selectedBlock = type;
      renderHotbar();
    });
    el.appendChild(slot);
  });
}

/* ---------------------------------------------------------------------
 * Render loop
 * ------------------------------------------------------------------- */
let lastTime = 0;
function tick(t) {
  state.raf = requestAnimationFrame(tick);
  const dt = Math.min(0.05, (t - lastTime) / 1000 || 0);
  lastTime = t;
  if (!state.running) return;
  updatePlayer(dt);
  const waterMap = state.materials?.water?.map;
  if (waterMap) waterMap.offset.x += dt * 0.02;
  state.renderer.render(state.scene, state.camera);
}

function startLoop() {
  if (state.raf) return;
  lastTime = performance.now();
  state.raf = requestAnimationFrame(tick);
}

/* ---------------------------------------------------------------------
 * Lazy init on tab activation
 * ------------------------------------------------------------------- */
function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

function onPlayTabActivated() {
  const canvas = document.getElementById('game-canvas');
  const container = document.getElementById('game-container');
  const loadingOverlay = document.getElementById('game-loading-overlay');
  const startOverlay = document.getElementById('game-start-overlay');
  const note = document.getElementById('game-note');

  if (!supportsWebGL()) {
    loadingOverlay.hidden = true;
    startOverlay.hidden = false;
    document.getElementById('game-start-btn').hidden = true;
    note.textContent = 'Your browser doesn’t support WebGL, so the 3D world can’t run here. Try a recent Chrome, Firefox, or Edge.';
    return;
  }

  if (!state.initialized) {
    loadingOverlay.hidden = false;
    startOverlay.hidden = true;
    requestAnimationFrame(() => {
      setTimeout(() => {
        initWorld(canvas);
        wireInput(canvas, container);
        renderHotbar();
        loadingOverlay.hidden = true;
        startOverlay.hidden = false;
        state.running = true;
        startLoop();
      }, 30);
    });
  } else {
    resizeRenderer();
    state.running = true;
    startLoop();
  }
}

function onTabChange(e) {
  if (e.detail.tabId === 'play') {
    onPlayTabActivated();
  } else {
    state.running = false;
    if (document.pointerLockElement) document.exitPointerLock();
  }
}

window.addEventListener('tabchange', onTabChange);
document.addEventListener('visibilitychange', () => {
  state.running = document.hidden ? false : state.running;
});
