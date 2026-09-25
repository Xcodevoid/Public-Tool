// AP Prep Hub: a static, hash-routed single-page app.
// Course metadata lives in data/catalog.js, and full study guides in content/<id>.js.
// build.py inlines everything into one self-contained index.html.

const app = document.getElementById("app");
const courseById = Object.fromEntries(COURSES.map((c) => [c.id, c]));
const LETTERS = ["A", "B", "C", "D", "E"];

/* ================= Icons ================= */

const ICON_PATHS = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  cards: '<rect x="3" y="7" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.3 1.3 2.8 2.5 2.8z"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  rotate: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  external: '<path d="M15 3h6v6M10 14 21 3M21 14v7H3V3h7"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  bulb: '<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  landmark: '<path d="M3 22h18M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 2l9 5H3z"/>',
  sigma: '<path d="M18 7V4H6l6 8-6 8h12v-3"/>',
  flask: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3"/><path d="M7 15h10"/>',
  feather: '<path d="M20.2 12.2a6 6 0 0 0-8.5-8.5L5 10.5V19h8.5z"/><path d="M16 8 2 22M17.5 15H9"/>',
  palette: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2a10 10 0 0 0 0 20c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7h2A5.6 5.6 0 0 0 22 11c0-5-4.5-9-10-9z"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="m16 8-2 6-6 2 2-6z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
};
const icon = (name, size = 18) =>
  `<svg class="ico" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ""}</svg>`;

const CAT_META = {
  "History & Social Sciences": { color: "#d97706", icon: "landmark" },
  "Math & Computer Science": { color: "#4f46e5", icon: "sigma" },
  "Sciences": { color: "#059669", icon: "flask" },
  "English": { color: "#e11d48", icon: "feather" },
  "Arts": { color: "#c026d3", icon: "palette" },
  "World Languages & Cultures": { color: "#0284c7", icon: "globe" },
  "AP Capstone": { color: "#64748b", icon: "compass" },
  "Career Kickstart": { color: "#ea580c", icon: "briefcase" },
};
const catVars = (cat) => `--c:${(CAT_META[cat] || CAT_META["AP Capstone"]).color}`;
const catIcon = (cat, size = 20) => icon((CAT_META[cat] || CAT_META["AP Capstone"]).icon, size);

/* ================= Storage (per-browser only) ================= */

const STORE_KEY = "apprep.v1";
const store = (() => {
  let data = { q: {}, known: {}, mine: [], frq: {}, days: [], recent: null };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) data = { ...data, ...JSON.parse(raw) };
  } catch (_) { /* private mode or blocked storage: keep in memory */ }
  const save = () => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (_) {}
    updateMistakeCount();
  };
  return { data, save };
})();

const qKey = (courseId, unitIdx, qIdx) => `${courseId}|${unitIdx}|${qIdx}`;
const today = () => new Date().toISOString().slice(0, 10);

function markStudied() {
  const d = today();
  if (!store.data.days.includes(d)) { store.data.days.push(d); store.data.days = store.data.days.slice(-400); }
}

function recordAnswer(key, correct) {
  const prev = store.data.q[key] || { n: 0 };
  store.data.q[key] = { c: correct, n: prev.n + 1 };
  markStudied();
  store.save();
}

function streak() {
  const days = new Set(store.data.days);
  const d = new Date();
  if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1); // today not studied yet: count up to yesterday
  let n = 0;
  while (days.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

function unitMastery(courseId, unitIdx, unit) {
  const total = unit.questions.length;
  let right = 0, tried = 0;
  unit.questions.forEach((_, i) => {
    const r = store.data.q[qKey(courseId, unitIdx, i)];
    if (r) { tried++; if (r.c) right++; }
  });
  return { total, right, tried, pct: total ? Math.round((right / total) * 100) : 0 };
}

function courseStats(courseId) {
  const content = window.AP_CONTENT && window.AP_CONTENT[courseId];
  if (!content || content.extends) return null; // not loaded or not merged yet
  let total = 0, right = 0, tried = 0, cards = 0, known = 0;
  content.units.forEach((u, i) => {
    const m = unitMastery(courseId, i, u);
    total += m.total; right += m.right; tried += m.tried;
    cards += u.terms.length;
    known += u.terms.filter(([t]) => store.data.known[`${courseId}|${i}|${t}`]).length;
  });
  return { total, right, tried, cards, known, pct: total ? Math.round((right / total) * 100) : 0 };
}

function mistakes() {
  return Object.entries(store.data.q)
    .filter(([, r]) => !r.c)
    .map(([k]) => { const [courseId, u, q] = k.split("|"); return { courseId, unitIdx: +u, qIdx: +q }; });
}

function updateMistakeCount() {
  const el = document.getElementById("mistake-count");
  if (!el) return;
  const n = mistakes().length;
  el.hidden = n === 0;
  el.textContent = n;
}

/* ================= Helpers ================= */

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = (s) => esc(s).replace(/\n/g, "<br>");
const bar = (pct, cls = "") => `<div class="bar ${cls}" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;

function ring(pct, size = 56, stroke = 5, label = `${pct}%`) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return `<div class="ring" style="width:${size}px;height:${size}px">
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" class="ring-track"/>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${stroke}" class="ring-fill"
        stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct / 100)}" transform="rotate(-90 ${size / 2} ${size / 2})"/>
    </svg><span>${label}</span></div>`;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function badgesFor(c) {
  const b = [];
  if (c.guide) b.push(`<span class="badge badge-guide">${icon("sparkle", 12)} Full study guide</span>`);
  if (c.status === "new") b.push('<span class="badge badge-new">New course</span>');
  if (c.status === "changed") b.push('<span class="badge badge-changed">Changes for 2027</span>');
  return b.join("");
}

const weightText = (u, long) => u.weightLabel || (u.weight ? `${u.weight} of ${long ? "the " : ""}exam` : "");

// Seconds per multiple-choice question on the real exam, parsed from e.g. "45 questions · 1 hr 45 min".
function mcqPace(course) {
  const mc = course.exam.find((s) => /multiple choice/i.test(s.name));
  if (!mc) return 90;
  const q = +(mc.detail.match(/(\d+)\s*questions/) || [])[1];
  const hr = +(mc.detail.match(/(\d+)\s*hr/) || [0, 0])[1];
  const min = +(mc.detail.match(/(\d+)\s*min/) || [0, 0])[1];
  const secs = (hr * 60 + min) * 60;
  return q && secs ? Math.round(secs / q) : 90;
}

function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("is-in"));
  setTimeout(() => { t.classList.remove("is-in"); setTimeout(() => t.remove(), 300); }, 2200);
}

/* ================= Content loading ================= */

const loaded = {};
function loadContent(id) {
  if (!loaded[id]) {
    const pre = window.AP_CONTENT && window.AP_CONTENT[id];
    const raw = pre
      ? Promise.resolve(pre) // already inlined by build.py
      : new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = `content/${id}.js`;
          s.onload = () => resolve(window.AP_CONTENT[id]);
          s.onerror = () => reject(new Error(`Could not load study guide for ${id}`));
          document.head.appendChild(s);
        });
    loaded[id] = raw.then((c) => (c && c.extends ? mergeGuide(id, c) : c));
  }
  return loaded[id];
}

// A guide can extend another (Calculus BC extends AB): reuse the base units with
// optional per-unit weight overrides and appended BC-only material, then add new units.
async function mergeGuide(id, raw) {
  const base = await loadContent(raw.extends);
  const units = base.units.map((u, i) => {
    const p = (raw.patches && raw.patches[i]) || {};
    return {
      ...u,
      weight: (raw.weights && raw.weights[i]) || u.weight,
      concepts: [...u.concepts, ...(p.concepts || [])],
      terms: [...u.terms, ...(p.terms || [])],
      mistakes: [...u.mistakes, ...(p.mistakes || [])],
      questions: [...u.questions, ...(p.questions || [])],
    };
  });
  // `own` counts only material unique to this guide, so site-wide totals don't double-count.
  const own = {
    units: raw.units.length,
    questions: raw.units.reduce((n, u) => n + u.questions.length, 0) +
      Object.values(raw.patches || {}).reduce((n, p) => n + (p.questions || []).length, 0),
  };
  const merged = { ...raw, extends: undefined, own, units: [...units, ...raw.units] };
  window.AP_CONTENT[id] = merged;
  return merged;
}

const loadAllGuides = () => Promise.all(COURSES.filter((c) => c.guide).map((c) => loadContent(c.id).catch(() => null)));

/* ================= Router ================= */

let cleanup = null; // teardown for the current view (timers, key handlers)

async function route() {
  if (cleanup) { cleanup(); cleanup = null; }
  closePalette();
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const section = parts[0] === "course" || !parts[0] ? "home" : parts[0];
  document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("is-active", a.dataset.nav === section));
  try {
    if (parts[0] === "course" && courseById[parts[1]]) {
      const course = courseById[parts[1]];
      if (parts[2] === "unit") await renderUnit(course, +parts[3] - 1, parts[4] || "learn");
      else if (parts[2] === "quiz") await renderQuizSetup(course);
      else await renderCourse(course);
    } else if (parts[0] === "review") {
      await renderReview();
    } else if (parts[0] === "dashboard") {
      await renderDashboard();
    } else {
      renderHome();
    }
  } catch (err) {
    app.innerHTML = `<div class="page"><div class="card empty"><h2>Something went wrong</h2><p>${esc(err.message)}</p><a class="btn" href="#/">Back to courses</a></div></div>`;
  }
  window.scrollTo(0, 0);
}

/* ================= Home ================= */

const homeState = { query: "", cat: "All" };

function renderHome() {
  document.title = "AP Prep Hub | Study guides and practice for every AP exam";
  const days = Math.ceil((new Date(EXAM_WINDOW.start + "T08:00:00") - new Date()) / 86400000);
  const guides = COURSES.filter((c) => c.guide);
  const totals = guides.reduce((acc, c) => {
    const content = window.AP_CONTENT && window.AP_CONTENT[c.id];
    if (content && !content.extends) {
      acc.q += content.own ? content.own.questions : content.units.reduce((n, u) => n + u.questions.length, 0);
      acc.u += content.own ? content.own.units : content.units.length;
    }
    return acc;
  }, { q: 0, u: 0 });
  const mine = store.data.mine.map((id) => courseById[id]).filter(Boolean);
  const recent = store.data.recent && courseById[store.data.recent.c];
  const recentUnit = recent && window.AP_CONTENT?.[recent.id]?.units?.[store.data.recent.u];

  app.innerHTML = `
    <section class="hero">
      <div class="page hero-inner">
        <div class="hero-copy">
          ${days > 0 ? `<div class="eyebrow">${icon("clock", 14)} <b>${days} days</b> until AP Exams · May 3–14, 2027</div>` : ""}
          <h1>Study smarter for <span class="grad">every AP exam.</span></h1>
          <p class="lead">Unit-by-unit study guides written in plain English, with flashcards, practice
          questions that explain every answer, and free-response practice with scoring guides.
          Built from the official 2026-27 course and exam descriptions.</p>
          <button class="hero-search" data-open-search>
            ${icon("search", 20)}<span>Search courses, units or key terms…</span><kbd>/</kbd>
          </button>
          <div class="hero-stats">
            <div><b>${COURSES.length}</b><span>AP courses</span></div>
            <div><b>${guides.length}</b><span>full study guides</span></div>
            <div><b>${totals.u || "60+"}</b><span>units</span></div>
            <div><b>${totals.q || "250+"}</b><span>practice questions</span></div>
          </div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="mock mock-1">
            <div class="mock-top">${catIcon("Sciences", 16)} AP Biology · Unit 3</div>
            <div class="mock-q">The O₂ released during photosynthesis comes from:</div>
            <div class="mock-choice">CO₂</div>
            <div class="mock-choice is-right">${icon("check", 14)} H₂O</div>
            <div class="mock-choice">Glucose</div>
          </div>
          <div class="mock mock-2">
            <div class="mock-top">${icon("cards", 14)} Flashcard</div>
            <div class="mock-term">Chain rule</div>
            <div class="mock-def">d/dx f(g(x)) = f′(g(x))·g′(x)</div>
          </div>
          <div class="mock mock-3">${ring(72, 52, 5)}<div><b>Unit mastery</b><span>Keep going!</span></div></div>
        </div>
      </div>
    </section>

    <div class="page">
      ${recent && recentUnit ? `
        <a class="card continue" style="${catVars(recent.cat)}" href="#/course/${recent.id}/unit/${store.data.recent.u + 1}/${store.data.recent.tab || "learn"}">
          <div class="cat-icon">${catIcon(recent.cat, 22)}</div>
          <div class="grow"><div class="overline">Continue where you left off</div>
          <div class="continue-title">${esc(recent.name)} · Unit ${store.data.recent.u + 1}: ${esc(recentUnit.title)}</div></div>
          <span class="btn btn-primary">Resume ${icon("arrowR", 16)}</span>
        </a>` : ""}

      ${mine.length ? `
        <div class="section-head"><h2>My courses</h2><a href="#/dashboard">View progress ${icon("arrowR", 14)}</a></div>
        <div class="grid">${mine.map(courseCard).join("")}</div>` : ""}

      <div class="section-head"><h2>Complete study guides</h2><span class="muted">Every unit, every tab, ready to study</span></div>
      <div class="grid">${guides.map(courseCard).join("")}</div>

      <div class="how">
        <div class="how-step"><div class="how-ico">${icon("bulb", 20)}</div><h3>Learn</h3><p>Each concept starts in plain English. Open "Go deeper" for the exam-level detail, examples and memory hooks.</p></div>
        <div class="how-step"><div class="how-ico">${icon("cards", 20)}</div><h3>Memorize</h3><p>Flip flashcards for key terms, mark what you know, and drill only the ones you don't.</p></div>
        <div class="how-step"><div class="how-ico">${icon("check", 20)}</div><h3>Practice</h3><p>Answer exam-style questions with instant explanations, plus free-response prompts with scoring guides.</p></div>
        <div class="how-step"><div class="how-ico">${icon("target", 20)}</div><h3>Review</h3><p>Missed questions go to your review list. The dashboard shows your weakest units to study next.</p></div>
      </div>

      <div class="section-head" id="browse"><h2>Browse all ${COURSES.length} AP courses</h2></div>
      <div class="filters">
        <div class="filter-search">${icon("search", 18)}<input id="search" type="search" placeholder="Filter courses…" value="${esc(homeState.query)}" aria-label="Filter courses" /></div>
        <div class="chips" id="chips">
          ${["All", "Study guides", ...CATEGORIES].map((c) => `<button class="chip ${homeState.cat === c ? "is-active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
        </div>
      </div>
      <div id="course-results"></div>
    </div>
  `;

  const results = document.getElementById("course-results");
  const draw = () => {
    const q = homeState.query.trim().toLowerCase();
    const match = (c) =>
      (!q || c.name.toLowerCase().includes(q) || c.blurb.toLowerCase().includes(q) || c.cat.toLowerCase().includes(q)) &&
      (homeState.cat === "All" || (homeState.cat === "Study guides" ? c.guide : c.cat === homeState.cat));
    const html = CATEGORIES.map((cat) => {
      const list = COURSES.filter((c) => c.cat === cat && match(c));
      return list.length ? `<h3 class="cat-title" style="${catVars(cat)}"><span class="cat-dot">${catIcon(cat, 16)}</span>${esc(cat)} <span class="muted">${list.length}</span></h3><div class="grid">${list.map(courseCard).join("")}</div>` : "";
    }).join("");
    results.innerHTML = html || `<div class="card empty"><p>No courses match "${esc(homeState.query)}".</p></div>`;
  };
  draw();

  document.getElementById("search").addEventListener("input", (e) => { homeState.query = e.target.value; draw(); });
  document.getElementById("chips").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    homeState.cat = btn.dataset.cat;
    document.querySelectorAll("#chips .chip").forEach((b) => b.classList.toggle("is-active", b === btn));
    draw();
  });
}

function courseCard(c) {
  const s = c.guide ? courseStats(c.id) : null;
  const content = c.guide && window.AP_CONTENT && window.AP_CONTENT[c.id];
  const meta = content && !content.extends ? `${content.units.length} units · ${s.total} questions` : (c.units ? `${c.units.length} units` : "Exam overview");
  return `
    <a class="card course-card" href="#/course/${c.id}" style="${catVars(c.cat)}">
      <div class="course-card-top">
        <div class="cat-icon">${catIcon(c.cat)}</div>
        ${s && s.tried ? ring(s.pct, 40, 4) : ""}
      </div>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.blurb)}</p>
      <div class="course-card-foot">
        <div class="badges">${badgesFor(c)}</div>
        <span class="meta">${meta}</span>
      </div>
    </a>`;
}

/* ================= Course overview ================= */

async function renderCourse(course) {
  document.title = `${course.name} | AP Prep Hub`;
  const content = course.guide ? await loadContent(course.id) : null;
  const isMine = store.data.mine.includes(course.id);
  const s = content ? courseStats(course.id) : null;

  // Suggest the first unit that isn't fully mastered.
  let nextUnit = 0;
  if (content) {
    const i = content.units.findIndex((u, k) => unitMastery(course.id, k, u).pct < 100);
    nextUnit = i < 0 ? 0 : i;
  }

  const weighted = course.exam.filter((x) => x.weight != null);
  const examHtml = `
    ${weighted.length ? `<div class="stack">${weighted.map((x, i) => `<span style="width:${x.weight}%;opacity:${1 - i * 0.22}" title="${esc(x.name)}: ${x.weight}%"></span>`).join("")}</div>` : ""}
    <div class="exam-rows">${course.exam.map((x, i) => `
      <div class="exam-row">
        <span class="swatch" style="opacity:${x.weight != null ? 1 - weighted.indexOf(x) * 0.22 : 0.25}"></span>
        <div class="grow"><div class="name">${esc(x.name)}</div><div class="detail">${esc(x.detail)}</div></div>
        <span class="pct">${x.weight != null ? `${x.weight}%` : ""}</span>
      </div>`).join("")}</div>`;

  let unitsHtml;
  if (content) {
    unitsHtml = `<div class="unit-list">${content.units.map((u, i) => {
      const m = unitMastery(course.id, i, u);
      const state = m.tried === 0 ? "Not started" : m.pct === 100 ? "Mastered" : `${m.right}/${m.total} correct`;
      return `
        <a class="card unit-row ${m.pct === 100 ? "is-done" : ""}" href="#/course/${course.id}/unit/${i + 1}">
          <div class="unit-num">${m.pct === 100 ? icon("check", 20) : i + 1}</div>
          <div class="grow">
            <h3>${esc(u.title)}</h3>
            <div class="sub">${esc(weightText(u))} · ${u.concepts.length} concepts · ${u.terms.length} terms · ${u.questions.length} questions</div>
          </div>
          <div class="unit-state"><span>${state}</span>${bar(m.pct)}</div>
          ${icon("arrowR", 18)}
        </a>`;
    }).join("")}</div>`;
  } else {
    const related = course.related && courseById[course.related];
    unitsHtml = `
      <div class="card empty">
        <div class="empty-ico">${icon("book", 26)}</div>
        <h3>Full study guide coming soon</h3>
        <p class="muted">We're writing summaries and practice questions for this course. Until then, use the official
        course and exam description linked on this page.</p>
        ${related ? `<p>Tip: <a href="#/course/${related.id}">${esc(related.name)}</a> has a full study guide.</p>` : ""}
      </div>
      ${course.units ? `<div class="card"><h3 class="card-title">Course units</h3><ol class="plain-units">${course.units.map((u) => `<li>${esc(u)}</li>`).join("")}</ol></div>` : ""}`;
  }

  app.innerHTML = `
    <section class="course-hero" style="${catVars(course.cat)}">
      <div class="page">
        <nav class="crumbs"><a href="#/">Courses</a> ${icon("arrowR", 12)} <span>${esc(course.cat)}</span></nav>
        <div class="course-hero-grid">
          <div>
            <div class="course-title-row"><div class="cat-icon lg">${catIcon(course.cat, 28)}</div><h1>${esc(course.name)}</h1></div>
            <p class="lead">${esc(course.blurb)}</p>
            <div class="badges">${badgesFor(course)}</div>
            <div class="btn-row hero-actions">
              ${content ? `
                <a class="btn btn-primary btn-lg" href="#/course/${course.id}/unit/${nextUnit + 1}">${icon("play", 16)} ${s.tried ? "Continue" : "Start"} Unit ${nextUnit + 1}</a>
                <a class="btn btn-lg" href="#/course/${course.id}/quiz">${icon("shuffle", 16)} Mixed quiz</a>` : ""}
              <button class="btn btn-lg ${isMine ? "is-starred" : ""}" id="star">${icon("star", 16)} ${isMine ? "In my courses" : "Add to my courses"}</button>
            </div>
          </div>
          ${s ? `
          <div class="card hero-progress">
            ${ring(s.pct, 88, 8)}
            <div>
              <div class="overline">Your mastery</div>
              <div class="hp-line"><b>${s.right}</b>/${s.total} questions correct</div>
              <div class="hp-line"><b>${s.known}</b>/${s.cards} flashcards known</div>
            </div>
          </div>` : ""}
        </div>
      </div>
    </section>

    <div class="page course-body">
      ${course.changes ? `<div class="callout callout-warn">${icon("alert", 18)}<div><strong>What's new for 2026-27</strong>${esc(course.changes)}</div></div>` : ""}
      <div class="course-grid">
        <div class="course-main">
          <div class="section-head"><h2>Units</h2>${content ? `<span class="muted">${content.units.length} units</span>` : ""}</div>
          ${content && content.intro ? `<p class="muted intro">${esc(content.intro)}</p>` : ""}
          ${unitsHtml}
        </div>
        <aside class="course-aside" style="${catVars(course.cat)}">
          <div class="card">
            <h3 class="card-title">${icon("chart", 16)} Exam at a glance</h3>
            ${examHtml}
          </div>
          ${content && content.tips ? `
          <div class="card">
            <h3 class="card-title">${icon("bulb", 16)} Exam strategy</h3>
            <ul class="tips">${content.tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          </div>` : ""}
          <div class="card">
            <h3 class="card-title">${icon("external", 16)} Official resources</h3>
            <div class="link-list">
              ${course.ced ? `<a href="${course.ced}" target="_blank" rel="noopener">Course & Exam Description (PDF) ${icon("external", 14)}</a>` : ""}
              <a href="${course.page}" target="_blank" rel="noopener">AP Central course page ${icon("external", 14)}</a>
              <a href="${EXAM_WINDOW.schedule}" target="_blank" rel="noopener">2027 exam schedule ${icon("external", 14)}</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `;

  document.getElementById("star").addEventListener("click", () => {
    const i = store.data.mine.indexOf(course.id);
    if (i >= 0) store.data.mine.splice(i, 1); else store.data.mine.push(course.id);
    store.save();
    toast(i >= 0 ? "Removed from My courses" : `${icon("star", 14)} Added to My courses`);
    renderCourse(course);
  });
}

/* ================= Unit page ================= */

const TABS = [
  ["learn", "Learn", "book"],
  ["cards", "Flashcards", "cards"],
  ["practice", "Practice", "check"],
  ["frq", "Free response", "pen"],
  ["watch", "Watch out", "alert"],
];
let conceptView = "both"; // "simple" | "both"

async function renderUnit(course, idx, tab) {
  const content = await loadContent(course.id);
  const unit = content && content.units[idx];
  if (!unit) { location.hash = `#/course/${course.id}`; return; }
  document.title = `${unit.title} | ${course.name}`;
  store.data.recent = { c: course.id, u: idx, tab, t: Date.now() };
  store.save();
  const base = `#/course/${course.id}/unit/${idx + 1}`;
  const m = unitMastery(course.id, idx, unit);
  const s = courseStats(course.id);

  const sideList = content.units.map((u, i) => {
    const um = unitMastery(course.id, i, u);
    return `<a class="side-unit ${i === idx ? "is-active" : ""} ${um.pct === 100 ? "is-done" : ""}" href="#/course/${course.id}/unit/${i + 1}">
      <span class="side-num">${um.pct === 100 ? icon("check", 14) : i + 1}</span>
      <span class="side-title">${esc(u.title)}</span>
      ${um.tried ? `<span class="side-pct">${um.pct}%</span>` : ""}
    </a>`;
  }).join("");

  app.innerHTML = `
    <div class="page unit-layout" style="${catVars(course.cat)}">
      <aside class="unit-side">
        <a class="side-course" href="#/course/${course.id}">
          <div class="cat-icon">${catIcon(course.cat)}</div>
          <div><div class="side-course-name">${esc(course.name)}</div><div class="muted small">${s.pct}% mastered</div></div>
        </a>
        ${bar(s.pct)}
        <details class="side-details" open>
          <summary>${icon("list", 16)} All units</summary>
          <nav class="side-units">${sideList}</nav>
        </details>
        <a class="btn btn-block" href="#/course/${course.id}/quiz">${icon("shuffle", 16)} Mixed quiz</a>
      </aside>

      <section class="unit-main">
        <nav class="crumbs"><a href="#/">Courses</a> ${icon("arrowR", 12)} <a href="#/course/${course.id}">${esc(course.name)}</a> ${icon("arrowR", 12)} <span>Unit ${idx + 1}</span></nav>
        <div class="unit-head">
          <div>
            <div class="overline">Unit ${idx + 1} · ${esc(weightText(unit, true))}</div>
            <h1>${esc(unit.title)}</h1>
          </div>
          <div class="unit-head-stat">${ring(m.pct, 56, 5)}<div class="small muted">${m.tried ? `${m.right}/${m.total} correct` : "Not started"}</div></div>
        </div>
        <nav class="tabs" role="tablist">
          ${TABS.map(([k, label, ic]) => `<a class="tab ${k === tab ? "is-active" : ""}" href="${base}/${k}" role="tab" aria-selected="${k === tab}">${icon(ic, 16)}<span>${label}</span></a>`).join("")}
        </nav>
        <div id="tab-body" class="tab-body"></div>
        <div class="unit-nav">
          ${idx > 0 ? `<a class="nav-card" href="#/course/${course.id}/unit/${idx}"><span class="muted small">${icon("arrowL", 14)} Previous</span><b>Unit ${idx}: ${esc(content.units[idx - 1].title)}</b></a>` : "<span></span>"}
          ${idx < content.units.length - 1
            ? `<a class="nav-card next" href="#/course/${course.id}/unit/${idx + 2}"><span class="muted small">Next ${icon("arrowR", 14)}</span><b>Unit ${idx + 2}: ${esc(content.units[idx + 1].title)}</b></a>`
            : `<a class="nav-card next" href="#/course/${course.id}/quiz"><span class="muted small">Finished the course? ${icon("arrowR", 14)}</span><b>Take a mixed quiz</b></a>`}
        </div>
      </section>
    </div>
  `;
  if (window.innerWidth < 900) app.querySelector(".side-details").open = false;
  const body = document.getElementById("tab-body");

  if (tab === "learn") renderLearn(body, unit);
  else if (tab === "cards") renderFlashcards(body, course, idx, unit);
  else if (tab === "practice") {
    runQuiz(body, unit.questions.map((q, i) => ({ courseId: course.id, unitIdx: idx, qIdx: i, q })), {
      title: `Unit ${idx + 1} practice`,
      onRestart: () => renderUnit(course, idx, "practice"),
    });
  } else if (tab === "frq") renderFrq(body, course, idx, unit);
  else renderWatchOut(body, content, unit);
}

function renderLearn(body, unit) {
  const draw = () => {
    body.innerHTML = `
      <div class="tldr"><div class="tldr-ico">${icon("sparkle", 18)}</div><div><span class="label">The big idea</span>${fmt(unit.tldr)}</div></div>
      <div class="learn-bar">
        <span class="muted small">${unit.concepts.length} key concepts</span>
        <div class="seg" role="group" aria-label="Explanation level">
          <button data-view="simple" class="${conceptView === "simple" ? "is-active" : ""}">Plain English</button>
          <button data-view="both" class="${conceptView === "both" ? "is-active" : ""}">+ Exam detail</button>
        </div>
      </div>
      ${unit.concepts.map((c, i) => `
        <article class="card concept">
          <h3><span class="n">${i + 1}</span>${esc(c.title)}</h3>
          <p class="simple">${fmt(c.simple)}</p>
          <details ${conceptView === "both" ? "open" : ""}>
            <summary>Go deeper: what the exam expects</summary>
            <p>${fmt(c.detail)}</p>
          </details>
          ${c.example ? `<div class="note note-example"><b>${icon("pen", 14)} Example</b><div>${fmt(c.example)}</div></div>` : ""}
          ${c.hook ? `<div class="note note-hook"><b>${icon("bulb", 14)} Memory hook</b><div>${fmt(c.hook)}</div></div>` : ""}
        </article>`).join("")}
    `;
    body.querySelectorAll("[data-view]").forEach((b) => b.addEventListener("click", () => { conceptView = b.dataset.view; draw(); }));
  };
  draw();
}

function renderFlashcards(body, course, idx, unit) {
  const cardKey = (t) => `${course.id}|${idx}|${t}`;
  let order = unit.terms.map((_, i) => i);
  let pos = 0;
  let flipped = false;

  const draw = () => {
    const known = unit.terms.filter(([t]) => store.data.known[cardKey(t)]).length;
    const [term, def] = unit.terms[order[pos]];
    const isKnown = !!store.data.known[cardKey(term)];
    body.innerHTML = `
      <div class="flash-wrap">
        <div class="flash-meta"><span>Card <b>${pos + 1}</b> of ${order.length}</span><span>${known}/${unit.terms.length} known</span></div>
        ${bar(Math.round((known / unit.terms.length) * 100))}
        <div class="flashcard ${flipped ? "is-flipped" : ""}" id="fc" tabindex="0" role="button" aria-label="Flip card">
          <div class="flashcard-inner">
            <div class="flash-face front">${isKnown ? `<span class="known-tag">${icon("check", 12)} Known</span>` : ""}<div class="term">${esc(term)}</div><div class="hint">Click or press Space to flip</div></div>
            <div class="flash-face back"><div class="def">${esc(def)}</div><div class="hint">${esc(term)}</div></div>
          </div>
        </div>
        <div class="flash-controls">
          <button class="btn btn-icon" id="prev" ${pos === 0 ? "disabled" : ""} aria-label="Previous card">${icon("arrowL")}</button>
          <button class="btn btn-bad" id="learning">Still learning</button>
          <button class="btn btn-good" id="gotit">${icon("check", 16)} Got it</button>
          <button class="btn btn-icon" id="next" ${pos === order.length - 1 ? "disabled" : ""} aria-label="Next card">${icon("arrowR")}</button>
        </div>
        <div class="flash-controls secondary">
          <button class="btn btn-ghost" id="shuffle">${icon("shuffle", 16)} Shuffle</button>
          <button class="btn btn-ghost" id="unknown">${icon("target", 16)} Only cards I don't know</button>
        </div>
        <p class="kbd-hint"><kbd>Space</kbd> flip · <kbd>←</kbd> <kbd>→</kbd> move</p>
      </div>
      <div class="card term-card">
        <h3 class="card-title">${icon("list", 16)} All terms in this unit</h3>
        <table class="term-table">
          ${unit.terms.map(([t, d]) => `<tr><td>${store.data.known[cardKey(t)] ? `<span class="known">${icon("check", 14)}</span>` : ""}${esc(t)}</td><td>${esc(d)}</td></tr>`).join("")}
        </table>
      </div>
    `;
    const fc = body.querySelector("#fc");
    fc.addEventListener("click", () => { flipped = !flipped; fc.classList.toggle("is-flipped", flipped); });
    body.querySelector("#prev").addEventListener("click", () => move(-1));
    body.querySelector("#next").addEventListener("click", () => move(1));
    body.querySelector("#gotit").addEventListener("click", () => mark(true));
    body.querySelector("#learning").addEventListener("click", () => mark(false));
    body.querySelector("#shuffle").addEventListener("click", () => { order = shuffle(order); pos = 0; flipped = false; draw(); toast("Cards shuffled"); });
    body.querySelector("#unknown").addEventListener("click", () => {
      const rest = unit.terms.map((_, i) => i).filter((i) => !store.data.known[cardKey(unit.terms[i][0])]);
      if (!rest.length) { toast("You know every card in this unit. Nice work!"); return; }
      order = rest; pos = 0; flipped = false; draw();
    });
  };
  const move = (d) => { pos = Math.max(0, Math.min(order.length - 1, pos + d)); flipped = false; draw(); };
  const mark = (isKnown) => {
    const k = cardKey(unit.terms[order[pos]][0]);
    if (isKnown) store.data.known[k] = true; else delete store.data.known[k];
    markStudied();
    store.save();
    if (pos < order.length - 1) move(1); else { flipped = false; draw(); }
  };
  const onKey = (e) => {
    if (e.target.matches("input, textarea") || paletteOpen()) return;
    if (e.key === " " && e.target.matches("button, a")) return; // native activation already handles it
    if (e.key === " ") { e.preventDefault(); flipped = !flipped; body.querySelector("#fc")?.classList.toggle("is-flipped", flipped); }
    else if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
  };
  document.addEventListener("keydown", onKey);
  cleanup = () => document.removeEventListener("keydown", onKey);
  draw();
}

function renderFrq(body, course, idx, unit) {
  if (!unit.frq) { body.innerHTML = `<div class="card empty"><p class="muted">No free-response practice for this unit yet.</p></div>`; return; }
  const key = `${course.id}|${idx}`;
  const saved = store.data.frq[key] || { text: "", checked: [], shown: false };
  body.innerHTML = `
    <div class="frq">
      <div class="card">
        <div class="overline">Free-response practice</div>
        <div class="frq-prompt">${fmt(unit.frq.prompt)}</div>
        <textarea id="frq-text" placeholder="Write your answer the way you would on the exam…">${esc(saved.text)}</textarea>
        <div class="frq-foot">
          <span class="muted small" id="frq-saved">${saved.text ? "Saved in this browser" : "Your answer saves automatically"}</span>
          <div class="btn-row">
            <button class="btn btn-ghost" id="clear">Clear</button>
            <button class="btn btn-primary" id="reveal">${saved.shown ? "Hide" : "Show"} scoring guide</button>
          </div>
        </div>
      </div>
      <div class="card rubric-card" id="rubric" ${saved.shown ? "" : "hidden"}>
        <div class="rubric-head"><h3 class="card-title">${icon("check", 16)} Scoring guide</h3><span class="score-pill" id="frq-score"></span></div>
        <p class="muted small">Check off each point your answer earned. Be honest: this is how you find what to fix.</p>
        <ul class="rubric">
          ${unit.frq.points.map((p, i) => `<li><label><input type="checkbox" data-i="${i}" ${saved.checked[i] ? "checked" : ""}/> <span>${fmt(p)}</span></label></li>`).join("")}
        </ul>
      </div>
    </div>`;
  const persist = () => { store.data.frq[key] = saved; store.save(); };
  const score = () => {
    const n = unit.frq.points.filter((_, i) => saved.checked[i]).length;
    body.querySelector("#frq-score").textContent = `${n} / ${unit.frq.points.length} points`;
  };
  score();
  let typingTimer;
  body.querySelector("#frq-text").addEventListener("input", (e) => {
    saved.text = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => { markStudied(); persist(); body.querySelector("#frq-saved").textContent = "Saved in this browser"; }, 400);
  });
  body.querySelector("#reveal").addEventListener("click", (e) => {
    saved.shown = !saved.shown; persist();
    body.querySelector("#rubric").hidden = !saved.shown;
    e.currentTarget.textContent = `${saved.shown ? "Hide" : "Show"} scoring guide`;
  });
  body.querySelector("#clear").addEventListener("click", () => {
    if (!confirm("Clear your answer and checkmarks for this question?")) return;
    delete store.data.frq[key]; store.save(); renderFrq(body, course, idx, unit);
  });
  body.querySelectorAll(".rubric input").forEach((cb) => cb.addEventListener("change", () => {
    saved.checked[+cb.dataset.i] = cb.checked; persist(); score();
  }));
}

function renderWatchOut(body, content, unit) {
  body.innerHTML = `
    <div class="card">
      <h3 class="card-title">${icon("alert", 16)} Common mistakes in this unit</h3>
      <ul class="notes-list bad">${unit.mistakes.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
    </div>
    ${content.tips ? `<div class="card">
      <h3 class="card-title">${icon("bulb", 16)} Exam strategy for this course</h3>
      <ul class="notes-list good">${content.tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    </div>` : ""}
  `;
}

/* ================= Quiz engine (unit practice, mixed quiz, mistake review) ================= */

// items: [{ courseId, unitIdx, qIdx, q }]. opts: { title, pace (secs/question), showSource, onRestart }
function runQuiz(body, items, opts = {}) {
  // Shuffle answer order on every attempt so students learn content, not letter positions.
  items = items.map((it) => ({ ...it, perm: shuffle(it.q.choices.map((_, k) => k)) }));
  let i = 0;
  let picked = null;
  const results = [];
  let timeLeft = opts.pace ? opts.pace * items.length : null;
  let timer = null;

  if (timeLeft) {
    timer = setInterval(() => {
      timeLeft--;
      const el = body.querySelector("#timer");
      if (el) {
        el.querySelector("span").textContent = fmtTime(timeLeft);
        el.classList.toggle("is-low", timeLeft <= 30);
      }
      if (timeLeft <= 0) { clearInterval(timer); finish(true); }
    }, 1000);
  }

  const draw = () => {
    const { q, courseId, unitIdx, perm } = items[i];
    const answerPos = perm.indexOf(q.answer);
    const answered = picked !== null;
    const correct = answered && picked === answerPos;
    const course = courseById[courseId];
    const unitTitle = window.AP_CONTENT[courseId].units[unitIdx].title;
    const right = results.filter((r) => r.ok).length;
    body.innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <span class="small"><b>Question ${i + 1}</b> <span class="muted">of ${items.length}</span></span>
          ${bar(Math.round(((i + (answered ? 1 : 0)) / items.length) * 100))}
          <span class="small score-live">${icon("check", 14)} ${right}</span>
          ${timeLeft != null ? `<span class="timer" id="timer">${icon("clock", 14)}<span>${fmtTime(timeLeft)}</span></span>` : ""}
        </div>
        <div class="card q-card">
          ${opts.showSource ? `<div class="q-source" style="${catVars(course.cat)}">${catIcon(course.cat, 14)} ${esc(course.name)} · Unit ${unitIdx + 1}: ${esc(unitTitle)}</div>` : ""}
          <div class="q-text">${fmt(q.q)}</div>
          <div class="choices">
            ${perm.map((orig, ci) => {
              let cls = "";
              if (answered && ci === answerPos) cls = "is-correct";
              else if (answered && ci === picked) cls = "is-wrong";
              else if (answered) cls = "is-dim";
              return `<button class="choice ${cls}" data-ci="${ci}" ${answered ? "disabled" : ""}><span class="letter">${LETTERS[ci]}</span><span class="choice-text">${fmt(q.choices[orig])}</span></button>`;
            }).join("")}
          </div>
          ${answered ? `
            <div class="feedback ${correct ? "good" : "bad"}">
              <div class="fb-ico">${icon(correct ? "check" : "alert", 20)}</div>
              <div><strong>${correct ? "Correct!" : `Not quite. The answer is ${LETTERS[answerPos]}.`}</strong>
              <p>${fmt(q.explain)}</p></div>
            </div>
            <div class="quiz-actions">
              <button class="btn btn-primary" id="next">${i === items.length - 1 ? "See results" : "Next question"} ${icon("arrowR", 16)}</button>
            </div>` : ""}
        </div>
        <p class="kbd-hint"><kbd>1</kbd>–<kbd>${q.choices.length}</kbd> answer · <kbd>Enter</kbd> next</p>
      </div>`;
    body.querySelectorAll(".choice").forEach((b) => b.addEventListener("click", () => choose(+b.dataset.ci)));
    body.querySelector("#next")?.addEventListener("click", next);
  };

  const choose = (ci) => {
    if (picked !== null) return;
    picked = ci;
    const it = items[i];
    const ok = it.perm[ci] === it.q.answer;
    results.push({ ...it, ok });
    recordAnswer(qKey(it.courseId, it.unitIdx, it.qIdx), ok);
    draw();
    body.querySelector("#next")?.focus({ preventScroll: true });
  };

  const next = () => {
    if (i === items.length - 1) { finish(false); return; }
    i++; picked = null; draw();
  };

  const finish = (timedOut) => {
    if (timer) clearInterval(timer);
    document.removeEventListener("keydown", onKey);
    const right = results.filter((r) => r.ok).length;
    const pct = Math.round((right / items.length) * 100);
    const byUnit = {};
    results.forEach((r) => {
      const k = `${r.courseId}|${r.unitIdx}`;
      byUnit[k] = byUnit[k] || { ...r, right: 0, total: 0 };
      byUnit[k].total++; if (r.ok) byUnit[k].right++;
    });
    const msg = pct >= 85 ? "Excellent. You're exam-ready on this material." : pct >= 60 ? "Solid progress. Review the weaker units below and try again." : "Keep going. Re-read the Learn tab for the weaker units, then retry.";
    body.innerHTML = `
      <div class="quiz">
        <div class="card results">
          ${timedOut ? `<div class="callout callout-warn">${icon("clock", 18)}<div><strong>Time's up!</strong>Unanswered questions weren't counted.</div></div>` : ""}
          <div class="overline">${esc(opts.title || "Practice")} complete</div>
          <div class="results-score">${ring(pct, 120, 10)}<div><div class="score-big">${right}<span>/${items.length}</span></div><p>${msg}</p></div></div>
          <div class="breakdown">
            ${Object.values(byUnit).map((u) => {
              const content = window.AP_CONTENT[u.courseId];
              const p = Math.round((u.right / u.total) * 100);
              return `<a class="row" href="#/course/${u.courseId}/unit/${u.unitIdx + 1}"><span>${opts.showSource ? esc(courseById[u.courseId].name) + " · " : ""}Unit ${u.unitIdx + 1}: ${esc(content.units[u.unitIdx].title)}</span><b>${u.right}/${u.total}</b>${bar(p, p >= 80 ? "good" : p >= 50 ? "" : "bad")}</a>`;
            }).join("")}
          </div>
          <div class="btn-row center">
            ${opts.onRestart ? `<button class="btn btn-primary" id="again">${icon("rotate", 16)} Try again</button>` : ""}
            ${results.some((r) => !r.ok) ? `<a class="btn" href="#/review">Review my mistakes</a>` : ""}
            <a class="btn btn-ghost" href="#/dashboard">View progress</a>
          </div>
        </div>
      </div>`;
    body.querySelector("#again")?.addEventListener("click", opts.onRestart);
  };

  const onKey = (e) => {
    if (e.target.matches("input, textarea") || paletteOpen()) return;
    if (e.key === "Enter" && e.target.matches("button, a")) return; // native click already fires
    const n = parseInt(e.key, 10);
    if (n >= 1 && n <= items[i].q.choices.length) choose(n - 1);
    else if (e.key === "Enter" && picked !== null) next();
  };
  document.addEventListener("keydown", onKey);
  cleanup = () => { if (timer) clearInterval(timer); document.removeEventListener("keydown", onKey); };
  draw();
}

const fmtTime = (s) => `${Math.floor(Math.max(0, s) / 60)}:${String(Math.max(0, s) % 60).padStart(2, "0")}`;

/* ================= Mixed quiz setup ================= */

async function renderQuizSetup(course) {
  const content = await loadContent(course.id);
  if (!content) { location.hash = `#/course/${course.id}`; return; }
  document.title = `Mixed quiz | ${course.name}`;
  const pace = mcqPace(course);
  const allQs = content.units.flatMap((u, ui) => u.questions.map((q, qi) => ({ courseId: course.id, unitIdx: ui, qIdx: qi, q })));
  const sel = { units: new Set(content.units.map((_, i) => i)), count: 10, timed: false };
  const crumbs = `<nav class="crumbs"><a href="#/">Courses</a> ${icon("arrowR", 12)} <a href="#/course/${course.id}">${esc(course.name)}</a> ${icon("arrowR", 12)} <span>Mixed quiz</span></nav>`;

  const draw = () => {
    const pool = allQs.filter((x) => sel.units.has(x.unitIdx));
    const n = sel.count === "All" ? pool.length : Math.min(sel.count, pool.length);
    app.innerHTML = `
      <div class="page narrow" style="${catVars(course.cat)}">
        ${crumbs}
        <div class="page-head"><div class="cat-icon lg">${icon("shuffle", 26)}</div><div><h1>Mixed practice quiz</h1>
        <p class="muted">Questions are shuffled across the units you pick, the way the real exam mixes topics.</p></div></div>
        <div class="card setup">
          <div class="setup-sec">
            <div class="setup-label">Units</div>
            <label class="check-row all"><input type="checkbox" id="all" ${sel.units.size === content.units.length ? "checked" : ""}/> <b>All units</b></label>
            <div class="unit-checks">
              ${content.units.map((u, i) => `<label class="check-row"><input type="checkbox" data-u="${i}" ${sel.units.has(i) ? "checked" : ""}/> <span>Unit ${i + 1}: ${esc(u.title)}</span> <span class="muted small">${u.questions.length}</span></label>`).join("")}
            </div>
          </div>
          <div class="setup-sec">
            <div class="setup-label">Number of questions</div>
            <div class="seg">${[5, 10, 20, "All"].map((k) => `<button data-n="${k}" class="${sel.count === k ? "is-active" : ""}">${k}</button>`).join("")}</div>
          </div>
          <div class="setup-sec">
            <div class="setup-label">Timing</div>
            <label class="switch"><input type="checkbox" id="timed" ${sel.timed ? "checked" : ""}/><span class="switch-ui"></span>
            <span>Exam pace: about ${Math.round(pace / 6) / 10} min per question, like the real multiple-choice section</span></label>
          </div>
          <button class="btn btn-primary btn-lg btn-block" id="go" ${pool.length ? "" : "disabled"}>${icon("play", 16)} Start quiz · ${n} question${n === 1 ? "" : "s"}</button>
        </div>
      </div>`;
    app.querySelector("#all").addEventListener("change", (e) => {
      sel.units = e.target.checked ? new Set(content.units.map((_, i) => i)) : new Set(); draw();
    });
    app.querySelectorAll("[data-u]").forEach((cb) => cb.addEventListener("change", () => {
      const u = +cb.dataset.u; cb.checked ? sel.units.add(u) : sel.units.delete(u); draw();
    }));
    app.querySelectorAll("[data-n]").forEach((b) => b.addEventListener("click", () => {
      sel.count = b.dataset.n === "All" ? "All" : +b.dataset.n; draw();
    }));
    app.querySelector("#timed").addEventListener("change", (e) => { sel.timed = e.target.checked; });
    app.querySelector("#go").addEventListener("click", () => {
      const picked = shuffle(pool).slice(0, n);
      app.innerHTML = `<div class="page narrow" style="${catVars(course.cat)}">${crumbs}<div id="quiz-body"></div></div>`;
      runQuiz(document.getElementById("quiz-body"), picked, {
        title: "Mixed quiz", pace: sel.timed ? pace : null, showSource: true,
        onRestart: () => renderQuizSetup(course),
      });
    });
  };
  draw();
}

/* ================= Mistake review ================= */

async function reviewItems() {
  const list = mistakes();
  await Promise.all([...new Set(list.map((m) => m.courseId))].filter((id) => courseById[id]).map(loadContent));
  return list
    .filter((m) => window.AP_CONTENT[m.courseId]?.units[m.unitIdx]?.questions[m.qIdx])
    .map((m) => ({ ...m, q: window.AP_CONTENT[m.courseId].units[m.unitIdx].questions[m.qIdx] }));
}

async function renderReview() {
  document.title = "My mistakes | AP Prep Hub";
  const items = await reviewItems();

  if (!items.length) {
    app.innerHTML = `
      <div class="page narrow">
        <div class="page-head"><div class="cat-icon lg">${icon("rotate", 26)}</div><div><h1>My mistakes</h1><p class="muted">Questions you miss land here until you get them right.</p></div></div>
        <div class="card empty">
          <div class="empty-ico good">${icon("check", 28)}</div>
          <h3>Nothing to review right now</h3>
          <p class="muted">Any question you answer incorrectly shows up here, so you can retry it until it sticks.
          Answer it correctly and it leaves this list.</p>
          <a class="btn btn-primary" href="#/">Browse courses</a>
        </div>
      </div>`;
    return;
  }

  const byCourse = {};
  items.forEach((it) => { (byCourse[it.courseId] = byCourse[it.courseId] || []).push(it); });
  app.innerHTML = `
    <div class="page narrow">
      <div class="page-head">
        <div class="cat-icon lg">${icon("rotate", 26)}</div>
        <div class="grow"><h1>My mistakes</h1><p class="muted">${items.length} question${items.length === 1 ? "" : "s"} to retry. Answer one correctly and it leaves this list.</p></div>
        <button class="btn btn-primary btn-lg" id="retry-all">${icon("play", 16)} Retry all</button>
      </div>
      ${Object.entries(byCourse).map(([cid, its]) => {
        const c = courseById[cid];
        return `
        <div class="card review-course" style="${catVars(c.cat)}">
          <div class="review-head">
            <div class="cat-icon">${catIcon(c.cat)}</div>
            <h3 class="grow">${esc(c.name)}</h3>
            <button class="btn" data-retry="${cid}">Retry ${its.length}</button>
          </div>
          <ul class="review-list">
            ${its.map((it) => `<li><span class="pill">Unit ${it.unitIdx + 1}</span> ${esc(it.q.q.split("\n")[0])}</li>`).join("")}
          </ul>
        </div>`;
      }).join("")}
    </div>
  `;
  const start = (subset) => {
    app.innerHTML = `<div class="page narrow"><nav class="crumbs"><a href="#/review">My mistakes</a> ${icon("arrowR", 12)} <span>Retry</span></nav><div id="quiz-body"></div></div>`;
    runQuiz(document.getElementById("quiz-body"), shuffle(subset), { title: "Mistake review", showSource: true, onRestart: renderReview });
  };
  app.querySelector("#retry-all").addEventListener("click", () => start(items));
  app.querySelectorAll("[data-retry]").forEach((b) => b.addEventListener("click", () => start(byCourse[b.dataset.retry])));
}

/* ================= Dashboard ================= */

async function renderDashboard() {
  document.title = "My progress | AP Prep Hub";
  await loadAllGuides();
  const guides = COURSES.filter((c) => c.guide);
  const answered = Object.keys(store.data.q).length;
  const correct = Object.values(store.data.q).filter((r) => r.c).length;
  const known = Object.keys(store.data.known).length;
  const days = streak();
  const wrong = mistakes().length;

  const active = guides.filter((c) => { const s = courseStats(c.id); return (s && (s.tried || s.known)) || store.data.mine.includes(c.id); });

  // Weakest units: tried units with the lowest accuracy, then untouched units in My courses.
  const recs = [];
  guides.forEach((c) => {
    const content = window.AP_CONTENT[c.id];
    if (!content || content.extends) return;
    content.units.forEach((u, i) => {
      const m = unitMastery(c.id, i, u);
      if (m.tried && m.pct < 100) recs.push({ c, i, u, m, score: m.right / Math.max(1, m.tried) });
    });
  });
  recs.sort((a, b) => a.score - b.score);
  store.data.mine.forEach((id) => {
    const c = courseById[id]; const content = c && c.guide && window.AP_CONTENT[id];
    if (!content) return;
    const i = content.units.findIndex((u, k) => unitMastery(id, k, u).tried === 0);
    if (i >= 0) recs.push({ c, i, u: content.units[i], m: null, score: 2 });
  });

  app.innerHTML = `
    <div class="page">
      <div class="page-head"><div class="cat-icon lg">${icon("chart", 26)}</div><div class="grow"><h1>My progress</h1><p class="muted">Everything here is saved only in this browser.</p></div></div>
      <div class="stat-grid">
        <div class="card stat"><div class="stat-ico flame">${icon("flame", 20)}</div><b>${days}</b><span>day study streak</span></div>
        <div class="card stat"><div class="stat-ico">${icon("check", 20)}</div><b>${answered}</b><span>questions answered</span></div>
        <div class="card stat"><div class="stat-ico">${icon("target", 20)}</div><b>${answered ? Math.round((correct / answered) * 100) : 0}%</b><span>latest-attempt accuracy</span></div>
        <div class="card stat"><div class="stat-ico">${icon("cards", 20)}</div><b>${known}</b><span>flashcards known</span></div>
      </div>

      <div class="dash-grid">
        <div>
          <div class="section-head"><h2>Course progress</h2></div>
          ${active.length ? `<div class="card dash-courses">${active.map((c) => {
            const s = courseStats(c.id);
            return `<a class="dash-course" href="#/course/${c.id}" style="${catVars(c.cat)}">
              <div class="cat-icon">${catIcon(c.cat)}</div>
              <div class="grow"><b>${esc(c.name)}</b><div class="muted small">${s.right}/${s.total} questions · ${s.known}/${s.cards} flashcards</div>${bar(s.pct)}</div>
              <span class="pct">${s.pct}%</span></a>`;
          }).join("")}</div>` : `
            <div class="card empty"><div class="empty-ico">${icon("book", 26)}</div><h3>No progress yet</h3>
            <p class="muted">Open a study guide and try some practice questions. Your progress will show up here.</p>
            <a class="btn btn-primary" href="#/">Pick a course</a></div>`}
        </div>
        <div>
          <div class="section-head"><h2>Study next</h2></div>
          <div class="card">
            ${recs.length ? `<div class="rec-list">${recs.slice(0, 5).map((r) => `
              <a class="rec" href="#/course/${r.c.id}/unit/${r.i + 1}/${r.m ? "learn" : "learn"}" style="${catVars(r.c.cat)}">
                <div class="cat-icon sm">${catIcon(r.c.cat, 16)}</div>
                <div class="grow"><b>Unit ${r.i + 1}: ${esc(r.u.title)}</b><div class="muted small">${esc(r.c.name)} · ${r.m ? `${r.m.right}/${r.m.tried} right so far` : "Not started"}</div></div>
                ${icon("arrowR", 16)}
              </a>`).join("")}</div>` : `<p class="muted">Answer some practice questions and we'll point out your weakest units here.</p>`}
            ${wrong ? `<a class="btn btn-block" href="#/review">${icon("rotate", 16)} Retry ${wrong} missed question${wrong === 1 ? "" : "s"}</a>` : ""}
          </div>
          <button class="btn btn-ghost btn-block danger" id="reset">Reset all progress</button>
        </div>
      </div>
    </div>`;
  app.querySelector("#reset").addEventListener("click", () => {
    if (!confirm("Erase all progress, flashcards, saved answers and My courses in this browser? This can't be undone.")) return;
    Object.assign(store.data, { q: {}, known: {}, mine: [], frq: {}, days: [], recent: null });
    store.save();
    toast("Progress reset");
    renderDashboard();
  });
}

/* ================= Search palette ================= */

let paletteEl = null;
const paletteOpen = () => !!paletteEl;

function buildSearchIndex() {
  const idx = COURSES.map((c) => ({ type: "Course", title: c.name, sub: c.cat, href: `#/course/${c.id}`, cat: c.cat, text: `${c.name} ${c.blurb} ${c.cat}` }));
  COURSES.filter((c) => c.guide).forEach((c) => {
    const content = window.AP_CONTENT && window.AP_CONTENT[c.id];
    if (!content || content.extends) return;
    content.units.forEach((u, i) => {
      idx.push({ type: "Unit", title: `Unit ${i + 1}: ${u.title}`, sub: c.name, href: `#/course/${c.id}/unit/${i + 1}`, cat: c.cat, text: `${u.title} ${u.concepts.map((k) => k.title).join(" ")}` });
      u.terms.forEach(([t, d]) => idx.push({ type: "Term", title: t, sub: `${c.name} · Unit ${i + 1}`, detail: d, href: `#/course/${c.id}/unit/${i + 1}/cards`, cat: c.cat, text: t }));
    });
  });
  return idx;
}

function openPalette() {
  if (paletteEl) return;
  const index = buildSearchIndex();
  paletteEl = document.createElement("div");
  paletteEl.className = "palette-overlay";
  paletteEl.innerHTML = `
    <div class="palette" role="dialog" aria-label="Search">
      <div class="palette-input">${icon("search", 20)}<input id="pal-q" placeholder="Search courses, units, key terms…" autocomplete="off" /><kbd>Esc</kbd></div>
      <div class="palette-results" id="pal-r"></div>
    </div>`;
  document.body.appendChild(paletteEl);
  document.body.classList.add("no-scroll");
  const input = paletteEl.querySelector("#pal-q");
  const out = paletteEl.querySelector("#pal-r");
  let sel = 0, hits = [];

  const draw = () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      hits = index.filter((x) => x.type === "Course" && courseById[x.href.split("/")[2]].guide).slice(0, 9);
    } else {
      const words = q.split(/\s+/);
      hits = index
        .map((x) => {
          const t = x.title.toLowerCase(), all = x.text.toLowerCase();
          if (!words.every((w) => all.includes(w))) return null;
          const score = (t.startsWith(q) ? 0 : t.includes(q) ? 1 : 2) + (x.type === "Course" ? 0 : x.type === "Unit" ? 0.3 : 0.6);
          return { ...x, score };
        })
        .filter(Boolean).sort((a, b) => a.score - b.score).slice(0, 12);
    }
    sel = Math.min(sel, Math.max(0, hits.length - 1));
    out.innerHTML = hits.length ? `
      ${!q ? `<div class="pal-group">Study guides</div>` : ""}
      ${hits.map((h, i) => `
        <a class="pal-item ${i === sel ? "is-sel" : ""}" href="${h.href}" data-i="${i}" style="${catVars(h.cat)}">
          <span class="pal-ico">${h.type === "Term" ? icon("cards", 16) : h.type === "Unit" ? icon("book", 16) : catIcon(h.cat, 16)}</span>
          <span class="grow"><b>${esc(h.title)}</b><span class="muted small">${esc(h.sub)}${h.detail ? ` · ${esc(h.detail)}` : ""}</span></span>
          <span class="pal-type">${h.type}</span>
        </a>`).join("")}` : `<div class="pal-empty">No results for "${esc(input.value)}"</div>`;
  };
  const go = () => { if (hits[sel]) { location.hash = hits[sel].href; closePalette(); } };
  input.addEventListener("input", () => { sel = 0; draw(); });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); sel = Math.min(hits.length - 1, sel + 1); draw(); out.querySelector(".is-sel")?.scrollIntoView({ block: "nearest" }); }
    else if (e.key === "ArrowUp") { e.preventDefault(); sel = Math.max(0, sel - 1); draw(); out.querySelector(".is-sel")?.scrollIntoView({ block: "nearest" }); }
    else if (e.key === "Enter") { e.preventDefault(); go(); }
  });
  out.addEventListener("mousemove", (e) => {
    const a = e.target.closest("[data-i]");
    if (a && +a.dataset.i !== sel) { sel = +a.dataset.i; out.querySelectorAll(".pal-item").forEach((x, k) => x.classList.toggle("is-sel", k === sel)); }
  });
  out.addEventListener("click", () => setTimeout(closePalette, 0));
  paletteEl.addEventListener("mousedown", (e) => { if (e.target === paletteEl) closePalette(); });
  draw();
  input.focus();
}

function closePalette() {
  if (!paletteEl) return;
  paletteEl.remove();
  paletteEl = null;
  document.body.classList.remove("no-scroll");
}

document.addEventListener("click", (e) => { if (e.target.closest("[data-open-search]")) openPalette(); });
document.addEventListener("keydown", (e) => {
  const typing = e.target.matches("input, textarea");
  if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !typing)) { e.preventDefault(); paletteOpen() ? closePalette() : openPalette(); }
  else if (e.key === "Escape" && paletteOpen()) closePalette();
});

/* ================= Theme ================= */

(function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const media = matchMedia("(prefers-color-scheme: dark)");
  let saved = null;
  try { saved = localStorage.getItem("apprep.theme"); } catch (_) {}
  const apply = () => {
    const t = saved || (media.matches ? "dark" : "light");
    document.documentElement.dataset.theme = t;
    btn.innerHTML = icon(t === "dark" ? "sun" : "moon", 18);
    btn.setAttribute("aria-label", `Switch to ${t === "dark" ? "light" : "dark"} theme`);
  };
  apply();
  media.addEventListener?.("change", () => { if (!saved) apply(); });
  btn.addEventListener("click", () => {
    saved = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("apprep.theme", saved); } catch (_) {}
    apply();
  });
})();

/* ================= Boot ================= */

document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = icon(el.dataset.icon, +el.dataset.size || 18); });
// Preload guides so home-page cards and search can use them.
loadAllGuides().then(() => {
  const onHome = !location.hash || location.hash === "#/" || location.hash === "#";
  if (onHome && !homeState.query && document.activeElement?.id !== "search") renderHome();
});
window.addEventListener("hashchange", route);
updateMistakeCount();
route();
