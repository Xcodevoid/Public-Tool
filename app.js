"use strict";

/* ---------------------------------------------------------------------
 * Edit this block to make the app your own club's.
 * ------------------------------------------------------------------- */
const CLUB_INFO = {
  name: "Vibe Coding Club",
  meets: "Thursdays, 3:30pm — Room 214",
  joinUrl: "https://discord.gg/your-invite-here",
  repoUrl: "https://github.com/xcodevoid/public-tool",
};

/* ---------------------------------------------------------------------
 * Storage
 * ------------------------------------------------------------------- */
const STORAGE_KEYS = {
  gallery: "vibeclub_memeforge_gallery_v1",
  theme: "vibeclub_memeforge_theme_v1",
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}
function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

/* ---------------------------------------------------------------------
 * Toast
 * ------------------------------------------------------------------- */
let toastTimer = null;
function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
}

/* ---------------------------------------------------------------------
 * Theme
 * ------------------------------------------------------------------- */
function initTheme() {
  const saved = loadJSON(STORAGE_KEYS.theme, null);
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }
  updateThemeIcon();
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    saveJSON(STORAGE_KEYS.theme, next);
    updateThemeIcon();
  });
}
function updateThemeIcon() {
  const current = document.documentElement.getAttribute("data-theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.getElementById("theme-icon-dark").style.display = current === "dark" ? "none" : "block";
  document.getElementById("theme-icon-light").style.display = current === "dark" ? "block" : "none";
}

/* ---------------------------------------------------------------------
 * Tabs
 * ------------------------------------------------------------------- */
function activateTab(tabId) {
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("is-active", p.id === tabId));
  document.querySelectorAll(".tab-btn").forEach((b) => {
    const active = b.dataset.tabLink === tabId;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-selected", String(active));
  });
  if (tabId === "gallery") renderGallery();
  if (tabId === "create") requestAnimationFrame(renderCanvas);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}
function initTabs() {
  document.querySelectorAll("[data-tab-link]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      activateTab(el.dataset.tabLink);
    });
  });
}

/* ---------------------------------------------------------------------
 * Club info rendering
 * ------------------------------------------------------------------- */
function renderClubInfo() {
  document.getElementById("club-name-inline").textContent = CLUB_INFO.name;
  document.getElementById("footer-club-name").textContent = CLUB_INFO.name;
  document.getElementById("club-join-link").href = CLUB_INFO.joinUrl;
  document.getElementById("club-repo-link").href = CLUB_INFO.repoUrl;
  document.getElementById("footer-repo-link").href = CLUB_INFO.repoUrl;
  document.getElementById("club-meta").innerHTML = `<span>📍 ${escapeHTML(CLUB_INFO.meets)}</span>`;
}
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

/* ---------------------------------------------------------------------
 * Meme editor state
 * ------------------------------------------------------------------- */
const FONT_STACKS = {
  impact: '"Arial Black", Impact, sans-serif',
  mono: '"Courier New", monospace',
  comic: '"Comic Sans MS", "Comic Sans", cursive',
};

const TEMPLATES = [
  { id: "gradient", icon: "🌈", label: "Gradient" },
  { id: "blank", icon: "⬜", label: "Blank card" },
  { id: "terminal", icon: "💻", label: "Terminal" },
  { id: "chatbubble", icon: "💬", label: "Chat bubble" },
  { id: "badge", icon: "🏆", label: "Badge" },
  { id: "flyer", icon: "📣", label: "Club flyer" },
];

const CANVAS_SIZE = 800;

const editor = {
  templateId: "gradient",
  bgImage: null, // HTMLImageElement, only when templateId === "image"
  width: CANVAS_SIZE,
  height: CANVAS_SIZE,
  layers: [], // { id, kind: 'text'|'emoji', text, xFrac, yFrac, fontSize, color, font, uppercase }
  selectedId: null,
  dragging: false,
  dragOffset: { x: 0, y: 0 },
};

let canvas, ctx;

function newTextLayer(overrides = {}) {
  return {
    id: uid(),
    kind: "text",
    text: "YOUR TEXT HERE",
    xFrac: 0.5,
    yFrac: 0.5,
    fontSize: 64,
    color: "#ffffff",
    font: "impact",
    uppercase: true,
    ...overrides,
  };
}

function selectedLayer() {
  return editor.layers.find((l) => l.id === editor.selectedId) || null;
}

/* ---------------------------------------------------------------------
 * Drawing helpers
 * ------------------------------------------------------------------- */
function roundedRectPath(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function drawBackground() {
  const { width: W, height: H } = editor;
  ctx.clearRect(0, 0, W, H);

  if (editor.templateId === "image" && editor.bgImage) {
    drawImageCover(editor.bgImage, W, H);
    return;
  }

  switch (editor.templateId) {
    case "blank": {
      ctx.fillStyle = "#f4f4f8";
      ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "#d8d8e2";
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, W - 4, H - 4);
      break;
    }
    case "terminal": {
      ctx.fillStyle = "#12131b";
      ctx.fillRect(0, 0, W, H);
      const barH = H * 0.09;
      ctx.fillStyle = "#1c1e29";
      ctx.fillRect(0, 0, W, barH);
      const dotR = barH * 0.14;
      const dotY = barH / 2;
      ["#ff5f57", "#febc2e", "#28c840"].forEach((color, i) => {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(barH * 0.5 + i * dotR * 3, dotY, dotR, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.fillStyle = "#6f7280";
      ctx.font = `${barH * 0.34}px "Courier New", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("vibe@club: ~$", W / 2, dotY);
      break;
    }
    case "chatbubble": {
      ctx.fillStyle = "#e5e5ea";
      ctx.fillRect(0, 0, W, H);
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, "#6d5ef2");
      grad.addColorStop(1, "#ef5da8");
      const bx = W * 0.08, by = H * 0.15, bw = W * 0.84, bh = H * 0.55;
      roundedRectPath(ctx, bx, by, bw, bh, 40);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(bx + bw * 0.18, by + bh);
      ctx.lineTo(bx + bw * 0.06, by + bh + 46);
      ctx.lineTo(bx + bw * 0.34, by + bh);
      ctx.closePath();
      ctx.fill();
      break;
    }
    case "badge": {
      ctx.fillStyle = "#181a23";
      ctx.fillRect(0, 0, W, H);
      const cx = W / 2, cy = H * 0.42, r = W * 0.3;
      const grad = ctx.createLinearGradient(cx - r, cy - r, cx + r, cy + r);
      grad.addColorStop(0, "#ffd76b");
      grad.addColorStop(0.5, "#ef5da8");
      grad.addColorStop(1, "#6d5ef2");
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.82, 0, Math.PI * 2);
      ctx.fillStyle = "#181a23";
      ctx.fill();
      ctx.font = `${r * 0.9}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("⚡", cx, cy + r * 0.05);
      break;
    }
    case "flyer": {
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, "#6d5ef2");
      grad.addColorStop(0.55, "#ef5da8");
      grad.addColorStop(1, "#34d9c4");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      break;
    }
    case "gradient":
    default: {
      const grad = ctx.createLinearGradient(0, 0, W, H);
      grad.addColorStop(0, "#8b7bff");
      grad.addColorStop(0.5, "#ef5da8");
      grad.addColorStop(1, "#34d9c4");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      break;
    }
  }
}

function drawImageCover(img, W, H) {
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = W / H;
  let sx, sy, sw, sh;
  if (imgRatio > canvasRatio) {
    sh = img.naturalHeight;
    sw = sh * canvasRatio;
    sx = (img.naturalWidth - sw) / 2;
    sy = 0;
  } else {
    sw = img.naturalWidth;
    sh = sw / canvasRatio;
    sx = 0;
    sy = (img.naturalHeight - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
}

function applyLayerFont(layer) {
  const family = FONT_STACKS[layer.font] || FONT_STACKS.impact;
  const weight = layer.font === "impact" ? "900" : "700";
  ctx.font = `${weight} ${layer.fontSize}px ${family}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
}

function layerDisplayText(layer) {
  if (layer.kind === "emoji") return layer.text;
  return layer.uppercase ? layer.text.toUpperCase() : layer.text;
}

function drawLayer(layer, isSelected) {
  const { width: W, height: H } = editor;
  applyLayerFont(layer);
  const text = layerDisplayText(layer);
  const x = layer.xFrac * W;
  const y = layer.yFrac * H;

  const lines = text.split("\n");
  const lineHeight = layer.fontSize * 1.15;
  const startY = y - ((lines.length - 1) * lineHeight) / 2;

  lines.forEach((line, i) => {
    const ly = startY + i * lineHeight;
    if (layer.kind === "text") {
      ctx.lineWidth = Math.max(2, layer.fontSize / 10);
      ctx.strokeStyle = layer.color === "#000000" ? "#ffffff" : "#000000";
      ctx.strokeText(line, x, ly);
      ctx.fillStyle = layer.color;
      ctx.fillText(line, x, ly);
    } else {
      ctx.fillText(line, x, ly);
    }
  });

  if (isSelected) {
    const box = layerBBox(layer);
    ctx.save();
    ctx.strokeStyle = "#6d5ef2";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(box.x, box.y, box.w, box.h);
    ctx.restore();
  }
}

function layerBBox(layer) {
  const { width: W, height: H } = editor;
  applyLayerFont(layer);
  const text = layerDisplayText(layer);
  const lines = text.split("\n");
  const lineHeight = layer.fontSize * 1.15;
  let maxWidth = 0;
  lines.forEach((line) => {
    maxWidth = Math.max(maxWidth, ctx.measureText(line).width);
  });
  const w = maxWidth + 24;
  const h = lines.length * lineHeight + 16;
  const x = layer.xFrac * W - w / 2;
  const y = layer.yFrac * H - h / 2;
  return { x, y, w, h };
}

function drawWatermark() {
  if (!document.getElementById("watermark-toggle")?.checked) return;
  const { width: W, height: H } = editor;
  const fontSize = Math.max(14, W * 0.024);
  ctx.font = `600 ${fontSize}px "Inter", sans-serif`;
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";
  const label = `⚡ ${CLUB_INFO.name}`;
  const paddingX = W * 0.025;
  const paddingY = H * 0.02;
  const metrics = ctx.measureText(label);
  const bx = W - paddingX - metrics.width - 10;
  const by = H - paddingY - fontSize - 6;
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  roundedRectPath(ctx, bx, by, metrics.width + 20, fontSize + 12, 8);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.fillText(label, W - paddingX, H - paddingY);
}

function renderCanvas() {
  if (!ctx) return;
  drawBackground();
  editor.layers.forEach((layer) => drawLayer(layer, layer.id === editor.selectedId));
  drawWatermark();
}

/* ---------------------------------------------------------------------
 * Templates
 * ------------------------------------------------------------------- */
function selectTemplate(templateId) {
  editor.templateId = templateId;
  editor.bgImage = null;
  editor.width = CANVAS_SIZE;
  editor.height = CANVAS_SIZE;
  canvas.width = editor.width;
  canvas.height = editor.height;

  if (templateId === "flyer" && editor.layers.length === 0) {
    editor.layers.push(newTextLayer({ text: CLUB_INFO.name.toUpperCase(), yFrac: 0.32, fontSize: 72 }));
    editor.layers.push(newTextLayer({ text: CLUB_INFO.meets, yFrac: 0.48, fontSize: 34, uppercase: false, font: "mono" }));
    editor.layers.push(newTextLayer({ text: "JOIN US", yFrac: 0.68, fontSize: 46 }));
  }

  renderTemplateRow();
  renderCanvas();
}

function renderTemplateRow() {
  const row = document.getElementById("template-row");
  row.innerHTML = "";
  TEMPLATES.forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "template-thumb" + (editor.templateId === t.id ? " is-active" : "");
    btn.innerHTML = `<span class="t-icon">${t.icon}</span>${escapeHTML(t.label)}`;
    btn.addEventListener("click", () => selectTemplate(t.id));
    row.appendChild(btn);
  });
  const uploadActive = editor.templateId === "image";
  if (uploadActive) {
    const btn = document.createElement("button");
    btn.className = "template-thumb is-active";
    btn.innerHTML = `<span class="t-icon">🖼️</span>Your image`;
    btn.disabled = true;
    row.appendChild(btn);
  }
}

function handleImageUpload(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const maxDim = 1000;
      const ratio = img.naturalWidth / img.naturalHeight;
      let w = img.naturalWidth, h = img.naturalHeight;
      if (Math.max(w, h) > maxDim) {
        if (w > h) { w = maxDim; h = Math.round(maxDim / ratio); }
        else { h = maxDim; w = Math.round(maxDim * ratio); }
      }
      editor.templateId = "image";
      editor.bgImage = img;
      editor.width = w;
      editor.height = h;
      canvas.width = w;
      canvas.height = h;
      renderTemplateRow();
      renderCanvas();
      toast("Image loaded");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ---------------------------------------------------------------------
 * Layer selection panel
 * ------------------------------------------------------------------- */
const COLOR_SWATCHES = ["#ffffff", "#000000", "#ffe600", "#ff4d4d", "#8b7bff", "#ff6fb8"];
const FONT_CHOICES = [
  { id: "impact", label: "Impact" },
  { id: "mono", label: "Mono" },
  { id: "comic", label: "Comic" },
];

function selectLayer(id) {
  editor.selectedId = id;
  renderLayerPanel();
  renderCanvas();
}

function deselectLayer() {
  editor.selectedId = null;
  renderLayerPanel();
  renderCanvas();
}

function renderLayerPanel() {
  const panel = document.getElementById("layer-editor");
  const layer = selectedLayer();
  if (!layer) {
    panel.hidden = true;
    return;
  }
  panel.hidden = false;

  const textInput = document.getElementById("layer-text-input");
  if (document.activeElement !== textInput) textInput.value = layer.text;

  document.getElementById("layer-size-input").value = layer.fontSize;
  document.getElementById("layer-uppercase-input").checked = layer.uppercase;
  document.getElementById("layer-uppercase-input").closest(".checkbox-label").style.display =
    layer.kind === "emoji" ? "none" : "flex";

  const fontRow = document.getElementById("font-row");
  fontRow.innerHTML = "";
  if (layer.kind === "text") {
    FONT_CHOICES.forEach((f) => {
      const btn = document.createElement("button");
      btn.textContent = f.label;
      btn.className = f.id === layer.font ? "is-active" : "";
      btn.addEventListener("click", () => {
        layer.font = f.id;
        renderLayerPanel();
        renderCanvas();
      });
      fontRow.appendChild(btn);
    });
    fontRow.parentElement.style.display = "";
  } else {
    fontRow.parentElement.style.display = "none";
  }

  const colorRow = document.getElementById("color-row");
  colorRow.innerHTML = "";
  if (layer.kind === "text") {
    COLOR_SWATCHES.forEach((c) => {
      const btn = document.createElement("button");
      btn.className = "color-swatch" + (c === layer.color ? " is-active" : "");
      btn.style.background = c;
      btn.addEventListener("click", () => {
        layer.color = c;
        renderLayerPanel();
        renderCanvas();
      });
      colorRow.appendChild(btn);
    });
    colorRow.parentElement.style.display = "";
  } else {
    colorRow.parentElement.style.display = "none";
  }
}

/* ---------------------------------------------------------------------
 * Canvas pointer interaction (select + drag)
 * ------------------------------------------------------------------- */
function getCanvasCoords(evt) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  return {
    x: (evt.clientX - rect.left) * scaleX,
    y: (evt.clientY - rect.top) * scaleY,
  };
}

function hitTestLayer(point) {
  for (let i = editor.layers.length - 1; i >= 0; i--) {
    const layer = editor.layers[i];
    const box = layerBBox(layer);
    if (point.x >= box.x && point.x <= box.x + box.w && point.y >= box.y && point.y <= box.y + box.h) {
      return layer;
    }
  }
  return null;
}

function initCanvasInteraction() {
  canvas.addEventListener("pointerdown", (e) => {
    const point = getCanvasCoords(e);
    const hit = hitTestLayer(point);
    if (hit) {
      editor.selectedId = hit.id;
      editor.dragging = true;
      editor.dragOffset = { x: point.x - hit.xFrac * editor.width, y: point.y - hit.yFrac * editor.height };
      canvas.style.cursor = "grabbing";
      canvas.setPointerCapture(e.pointerId);
      renderLayerPanel();
      renderCanvas();
    } else {
      deselectLayer();
    }
  });

  canvas.addEventListener("pointermove", (e) => {
    if (!editor.dragging) return;
    const layer = selectedLayer();
    if (!layer) return;
    const point = getCanvasCoords(e);
    const nx = (point.x - editor.dragOffset.x) / editor.width;
    const ny = (point.y - editor.dragOffset.y) / editor.height;
    layer.xFrac = Math.min(1, Math.max(0, nx));
    layer.yFrac = Math.min(1, Math.max(0, ny));
    renderCanvas();
  });

  const endDrag = () => {
    editor.dragging = false;
    canvas.style.cursor = "grab";
  };
  canvas.addEventListener("pointerup", endDrag);
  canvas.addEventListener("pointercancel", endDrag);
}

/* ---------------------------------------------------------------------
 * Editor controls (add text, emoji, upload, export, save)
 * ------------------------------------------------------------------- */
const EMOJI_CHOICES = ["😂", "💀", "🔥", "⚡", "🐛", "✅", "🤡", "💯", "👀", "🚀"];

function initEditorControls() {
  document.getElementById("add-text-btn").addEventListener("click", () => {
    const layer = newTextLayer();
    editor.layers.push(layer);
    selectLayer(layer.id);
  });

  const emojiRow = document.getElementById("emoji-row");
  EMOJI_CHOICES.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.textContent = emoji;
    btn.title = "Add sticker";
    btn.addEventListener("click", () => {
      const layer = newTextLayer({
        kind: "emoji",
        text: emoji,
        fontSize: 90,
        uppercase: false,
        xFrac: 0.5 + (Math.random() - 0.5) * 0.2,
        yFrac: 0.5 + (Math.random() - 0.5) * 0.2,
      });
      editor.layers.push(layer);
      selectLayer(layer.id);
    });
    emojiRow.appendChild(btn);
  });

  document.getElementById("layer-text-input").addEventListener("input", (e) => {
    const layer = selectedLayer();
    if (!layer) return;
    layer.text = e.target.value || " ";
    renderCanvas();
  });

  document.getElementById("layer-size-input").addEventListener("input", (e) => {
    const layer = selectedLayer();
    if (!layer) return;
    layer.fontSize = Number(e.target.value);
    renderCanvas();
  });

  document.getElementById("layer-uppercase-input").addEventListener("change", (e) => {
    const layer = selectedLayer();
    if (!layer) return;
    layer.uppercase = e.target.checked;
    renderCanvas();
  });

  document.getElementById("delete-layer-btn").addEventListener("click", () => {
    const layer = selectedLayer();
    if (!layer) return;
    editor.layers = editor.layers.filter((l) => l.id !== layer.id);
    deselectLayer();
  });

  document.getElementById("watermark-toggle").addEventListener("change", renderCanvas);

  document.getElementById("image-upload-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleImageUpload(file);
    e.target.value = "";
  });

  document.getElementById("download-btn").addEventListener("click", () => {
    deselectLayer();
    requestAnimationFrame(() => {
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = `meme-${Date.now()}.png`;
      a.click();
      toast("Downloaded!");
    });
  });

  document.getElementById("save-gallery-btn").addEventListener("click", saveCurrentToGallery);
}

/* ---------------------------------------------------------------------
 * Gallery
 * ------------------------------------------------------------------- */
const GALLERY_MAX = 8;

function saveCurrentToGallery() {
  const wasSelected = editor.selectedId;
  deselectLayer();
  requestAnimationFrame(() => {
    const dataUrl = canvas.toDataURL("image/png");
    let gallery = loadJSON(STORAGE_KEYS.gallery, []);
    gallery.unshift({ id: uid(), dataUrl, createdAt: new Date().toISOString() });
    gallery = gallery.slice(0, GALLERY_MAX);

    while (gallery.length > 0 && !saveJSON(STORAGE_KEYS.gallery, gallery)) {
      gallery.pop();
    }
    toast("Saved to My Memes");
    if (wasSelected) selectLayer(wasSelected);
  });
}

function renderGallery() {
  const gallery = loadJSON(STORAGE_KEYS.gallery, []);
  const grid = document.getElementById("gallery-grid");
  const empty = document.getElementById("gallery-empty");
  grid.innerHTML = "";

  if (gallery.length === 0) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  gallery.forEach((item) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <img src="${item.dataUrl}" alt="Saved meme" />
      <div class="gallery-card-actions">
        <button data-action="remix">Remix</button>
        <button data-action="download">Download</button>
        <button data-action="delete" class="danger-text">Delete</button>
      </div>
    `;
    card.querySelector('[data-action="remix"]').addEventListener("click", () => remixFromGallery(item));
    card.querySelector('[data-action="download"]').addEventListener("click", () => {
      const a = document.createElement("a");
      a.href = item.dataUrl;
      a.download = `meme-${item.id}.png`;
      a.click();
    });
    card.querySelector('[data-action="delete"]').addEventListener("click", () => {
      const next = loadJSON(STORAGE_KEYS.gallery, []).filter((g) => g.id !== item.id);
      saveJSON(STORAGE_KEYS.gallery, next);
      renderGallery();
    });
    grid.appendChild(card);
  });
}

function remixFromGallery(item) {
  const img = new Image();
  img.onload = () => {
    editor.templateId = "image";
    editor.bgImage = img;
    editor.width = img.naturalWidth;
    editor.height = img.naturalHeight;
    editor.layers = [];
    editor.selectedId = null;
    canvas.width = editor.width;
    canvas.height = editor.height;
    renderTemplateRow();
    renderLayerPanel();
    renderCanvas();
    activateTab("create");
    toast("Loaded into editor — add more text and save again");
  };
  img.src = item.dataUrl;
}

/* ---------------------------------------------------------------------
 * Init
 * ------------------------------------------------------------------- */
function init() {
  canvas = document.getElementById("meme-canvas");
  ctx = canvas.getContext("2d");

  initTheme();
  initTabs();
  renderClubInfo();
  initCanvasInteraction();
  initEditorControls();
  selectTemplate("gradient");
  renderCanvas();
}

document.addEventListener("DOMContentLoaded", init);
