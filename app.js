// AP Prep Hub: a static, hash-routed single-page app.
// Course metadata lives in data/catalog.js. Full study guides live in
// content/<course-id>.js and are loaded on demand.

const app = document.getElementById("app");
const courseById = Object.fromEntries(COURSES.map((c) => [c.id, c]));
const LETTERS = ["A", "B", "C", "D", "E"];

/* ---------------- Storage (per-browser only) ---------------- */

const STORE_KEY = "apprep.v1";
const store = (() => {
  let data = { q: {}, known: {}, mine: [], frq: {} };
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

function recordAnswer(key, correct) {
  const prev = store.data.q[key] || { n: 0 };
  store.data.q[key] = { c: correct, n: prev.n + 1 };
  store.save();
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

/* ---------------- Helpers ---------------- */

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const fmt = (s) => esc(s).replace(/\n/g, "<br>");
const pctBar = (pct) => `<div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><span style="width:${pct}%"></span></div>`;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function badgesFor(c) {
  const b = [];
  if (c.guide) b.push('<span class="badge badge-guide">Study guide</span>');
  if (c.status === "new") b.push('<span class="badge badge-new">New course</span>');
  if (c.status === "changed") b.push('<span class="badge badge-changed">Changes for 2027</span>');
  return b.join("");
}

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

const loaded = {};
function loadContent(id) {
  if (window.AP_CONTENT && window.AP_CONTENT[id]) return Promise.resolve(window.AP_CONTENT[id]);
  if (!loaded[id]) {
    loaded[id] = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = `content/${id}.js`;
      s.onload = () => resolve(window.AP_CONTENT[id]);
      s.onerror = () => reject(new Error(`Could not load study guide for ${id}`));
      document.head.appendChild(s);
    });
  }
  return loaded[id];
}

/* ---------------- Router ---------------- */

let cleanup = null; // teardown for the current view (timers, key handlers)

async function route() {
  if (cleanup) { cleanup(); cleanup = null; }
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  document.querySelectorAll("[data-nav]").forEach((a) => {
    a.classList.toggle("is-active", (parts[0] || "home") === a.dataset.nav || (a.dataset.nav === "home" && parts[0] === "course"));
  });
  try {
    if (parts[0] === "course" && courseById[parts[1]]) {
      const course = courseById[parts[1]];
      if (parts[2] === "unit") await renderUnit(course, +parts[3] - 1, parts[4] || "learn");
      else if (parts[2] === "quiz") await renderQuizSetup(course);
      else await renderCourse(course);
    } else if (parts[0] === "review") {
      await renderReview();
    } else {
      renderHome();
    }
  } catch (err) {
    app.innerHTML = `<div class="card"><h2>Something went wrong</h2><p>${esc(err.message)}</p><a class="btn" href="#/">Back to courses</a></div>`;
  }
  window.scrollTo(0, 0);
}

/* ---------------- Home ---------------- */

const homeState = { query: "", cat: "All" };

function renderHome() {
  const days = Math.ceil((new Date(EXAM_WINDOW.start + "T08:00:00") - new Date()) / 86400000);
  const mine = store.data.mine.map((id) => courseById[id]).filter(Boolean);
  document.title = "AP Prep Hub — unit-by-unit study guides and practice";

  app.innerHTML = `
    <section class="hero">
      ${days > 0 ? `<div class="countdown"><b>${days}</b> days until AP Exams begin (May 3, 2027)</div>` : ""}
      <h1>Every AP exam, <span class="grad">one unit at a time.</span></h1>
      <p>Plain-English summaries, flashcards, practice questions that explain every answer,
      and free-response practice with scoring guides, built from the official 2026-27
      course and exam descriptions.</p>
    </section>

    <div class="features">
      <div class="feature"><div class="ico">💡</div><h4>Plain English first</h4><p>Every concept starts simple. Open "Go deeper" when you want the exam-level detail.</p></div>
      <div class="feature"><div class="ico">🃏</div><h4>Flashcards</h4><p>Flip through key terms and mark the ones you know.</p></div>
      <div class="feature"><div class="ico">✅</div><h4>Instant feedback</h4><p>Every practice question explains why the right answer is right.</p></div>
      <div class="feature"><div class="ico">⏱️</div><h4>Exam-pace quizzes</h4><p>Mixed-unit quizzes timed to match the real exam's pace.</p></div>
      <div class="feature"><div class="ico">🔁</div><h4>Mistake review</h4><p>Missed questions are saved so you can retry them until they stick.</p></div>
    </div>

    ${mine.length ? `<h2>My courses</h2><div class="grid">${mine.map(courseCard).join("")}</div>` : ""}

    <div class="filters">
      <input class="search" id="search" type="search" placeholder="Search 42 AP courses…" value="${esc(homeState.query)}" aria-label="Search courses" />
      <div class="chips" id="chips">
        ${["All", "Study guides", ...CATEGORIES].map((c) => `<button class="chip ${homeState.cat === c ? "is-active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`).join("")}
      </div>
    </div>
    <div id="course-results"></div>
  `;

  const results = document.getElementById("course-results");
  const draw = () => {
    const q = homeState.query.trim().toLowerCase();
    const match = (c) =>
      (!q || c.name.toLowerCase().includes(q) || c.blurb.toLowerCase().includes(q) || c.cat.toLowerCase().includes(q)) &&
      (homeState.cat === "All" || (homeState.cat === "Study guides" ? c.guide : c.cat === homeState.cat));
    const html = CATEGORIES.map((cat) => {
      const list = COURSES.filter((c) => c.cat === cat && match(c));
      return list.length ? `<h3 class="cat-title">${esc(cat)}</h3><div class="grid">${list.map(courseCard).join("")}</div>` : "";
    }).join("");
    results.innerHTML = html || `<p class="muted">No courses match "${esc(homeState.query)}".</p>`;
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
  let progress = "";
  if (c.guide && window.AP_CONTENT && window.AP_CONTENT[c.id]) {
    const units = window.AP_CONTENT[c.id].units;
    const total = units.reduce((n, u) => n + u.questions.length, 0);
    const right = units.reduce((n, u, i) => n + unitMastery(c.id, i, u).right, 0);
    const pct = Math.round((right / total) * 100);
    progress = `<div class="meta">${pct}% mastered</div>${pctBar(pct)}`;
  }
  return `
    <a class="card course-card" href="#/course/${c.id}">
      <div class="badges">${badgesFor(c)}</div>
      <h3>${esc(c.name)}</h3>
      <p>${esc(c.blurb)}</p>
      ${progress}
    </a>`;
}

/* ---------------- Course overview ---------------- */

async function renderCourse(course) {
  document.title = `${course.name} — AP Prep Hub`;
  const content = course.guide ? await loadContent(course.id) : null;
  const isMine = store.data.mine.includes(course.id);

  const examRows = course.exam.map((s) => `
    <div class="exam-row">
      <span class="name">${esc(s.name)}</span>
      <span class="pct">${s.weight != null ? `${s.weight}%` : ""}</span>
      <span class="detail">${esc(s.detail)}</span>
      ${s.weight != null ? pctBar(s.weight) : ""}
    </div>`).join("");

  let unitsHtml;
  if (content) {
    unitsHtml = `<div class="unit-list">${content.units.map((u, i) => {
      const m = unitMastery(course.id, i, u);
      return `
        <a class="card unit-item" href="#/course/${course.id}/unit/${i + 1}">
          <div class="unit-num">${i + 1}</div>
          <div><h3>${esc(u.title)}</h3><div class="sub">${esc(u.weight)} of exam · ${u.concepts.length} concepts · ${u.questions.length} questions</div></div>
          <div class="mastery">${m.tried ? `${m.right}/${m.total} correct` : "Not started"}${pctBar(m.pct)}</div>
        </a>`;
    }).join("")}</div>`;
  } else {
    const related = course.related && courseById[course.related];
    unitsHtml = `
      <div class="callout callout-info">
        <strong>Full study guide coming soon</strong>
        We're writing summaries and practice questions for this course. Until then, use the official
        course and exam description (CED) linked above.
        ${related ? `<br>Tip: Units 1–8 are identical to <a href="#/course/${related.id}">${esc(related.name)}</a>, which has a full guide.` : ""}
      </div>
      ${course.units ? `<div class="card"><ol class="plain-units">${course.units.map((u) => `<li>${esc(u)}</li>`).join("")}</ol></div>` : ""}`;
  }

  app.innerHTML = `
    <div class="crumbs"><a href="#/">Courses</a> / ${esc(course.cat)}</div>
    <div class="course-head">
      <div>
        <div class="badges">${badgesFor(course)}</div>
        <h1>${esc(course.name)}</h1>
        <p>${esc(course.blurb)}</p>
      </div>
      <button class="btn star-btn ${isMine ? "is-on" : ""}" id="star">${isMine ? "★ In my courses" : "☆ Add to my courses"}</button>
    </div>

    ${course.changes ? `<div class="callout callout-warn"><strong>What's new for 2026-27</strong>${esc(course.changes)}</div>` : ""}

    <div class="two-col">
      <div class="card">
        <h3>Exam at a glance</h3>
        <div class="exam-rows">${examRows}</div>
      </div>
      <div class="card">
        <h3>Start studying</h3>
        ${content ? `
          <p class="muted small">Work through each unit: learn → flashcards → practice → free response.
          Then take a mixed quiz to see where you stand.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#/course/${course.id}/unit/1">Start Unit 1</a>
            <a class="btn" href="#/course/${course.id}/quiz">Mixed practice quiz</a>
          </div>` : `<p class="muted small">This course's study guide isn't written yet.</p>`}
        <h4 style="margin-top:18px">Official resources</h4>
        <div class="btn-row">
          ${course.ced ? `<a class="btn" href="${course.ced}" target="_blank" rel="noopener">Course & Exam Description ↗</a>` : ""}
          <a class="btn" href="${course.page}" target="_blank" rel="noopener">AP Central page ↗</a>
        </div>
      </div>
    </div>

    ${content && content.tips ? `<h2>Exam strategy</h2><ul class="mistake-list tip-list">${content.tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}

    <h2>Units</h2>
    ${unitsHtml}
  `;

  document.getElementById("star").addEventListener("click", () => {
    const i = store.data.mine.indexOf(course.id);
    if (i >= 0) store.data.mine.splice(i, 1); else store.data.mine.push(course.id);
    store.save();
    renderCourse(course);
  });
}

/* ---------------- Unit page ---------------- */

const TABS = [
  ["learn", "📖 Learn"],
  ["cards", "🃏 Flashcards"],
  ["practice", "✅ Practice"],
  ["frq", "✍️ Free response"],
  ["watch", "⚠️ Watch out"],
];
let conceptView = "both"; // "simple" | "both"

async function renderUnit(course, idx, tab) {
  const content = await loadContent(course.id);
  const unit = content && content.units[idx];
  if (!unit) { location.hash = `#/course/${course.id}`; return; }
  document.title = `${unit.title} — ${course.name}`;
  const base = `#/course/${course.id}/unit/${idx + 1}`;
  const m = unitMastery(course.id, idx, unit);

  app.innerHTML = `
    <div class="crumbs"><a href="#/">Courses</a> / <a href="#/course/${course.id}">${esc(course.name)}</a> / Unit ${idx + 1}</div>
    <h1>Unit ${idx + 1}: ${esc(unit.title)}</h1>
    <div class="muted small">${esc(unit.weight)} of the exam · ${m.tried ? `${m.right}/${m.total} practice questions correct` : "Practice not started"}</div>
    <nav class="tabs" role="tablist">
      ${TABS.map(([k, label]) => `<a class="tab ${k === tab ? "is-active" : ""}" href="${base}/${k}" role="tab">${label}</a>`).join("")}
    </nav>
    <div id="tab-body"></div>
    <div class="unit-nav">
      ${idx > 0 ? `<a class="btn" href="#/course/${course.id}/unit/${idx}">← Unit ${idx}: ${esc(content.units[idx - 1].title)}</a>` : "<span></span>"}
      ${idx < content.units.length - 1 ? `<a class="btn" href="#/course/${course.id}/unit/${idx + 2}">Unit ${idx + 2}: ${esc(content.units[idx + 1].title)} →</a>` : `<a class="btn btn-primary" href="#/course/${course.id}/quiz">Take a mixed quiz →</a>`}
    </div>
  `;
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
      <div class="tldr"><span class="label">The big idea</span>${fmt(unit.tldr)}</div>
      <div class="view-toggle" role="group" aria-label="Explanation level">
        <button data-view="simple" class="${conceptView === "simple" ? "is-active" : ""}">Plain English only</button>
        <button data-view="both" class="${conceptView === "both" ? "is-active" : ""}">Show exam detail</button>
      </div>
      ${unit.concepts.map((c, i) => `
        <div class="card concept">
          <h3><span class="n">${i + 1}</span>${esc(c.title)}</h3>
          <p class="simple">${fmt(c.simple)}</p>
          <details ${conceptView === "both" ? "open" : ""}>
            <summary>Go deeper: what the exam expects</summary>
            <p>${fmt(c.detail)}</p>
          </details>
          ${c.example ? `<div class="example"><b>Example</b>${fmt(c.example)}</div>` : ""}
          ${c.hook ? `<div class="hook"><b>Memory hook</b>${fmt(c.hook)}</div>` : ""}
        </div>`).join("")}
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
    body.innerHTML = `
      <div class="flash-wrap">
        <div class="muted small">Card ${pos + 1} of ${order.length} · ${known}/${unit.terms.length} known</div>
        ${pctBar(Math.round((known / unit.terms.length) * 100))}
        <div class="flashcard ${flipped ? "is-flipped" : ""}" id="fc" tabindex="0" role="button" aria-label="Flip card">
          <div class="flashcard-inner">
            <div class="flash-face front"><div class="term">${esc(term)}</div><div class="hint">Click or press Space to flip</div></div>
            <div class="flash-face back"><div class="def">${esc(def)}</div><div class="hint">${esc(term)}</div></div>
          </div>
        </div>
        <div class="btn-row" style="justify-content:center">
          <button class="btn" id="prev" ${pos === 0 ? "disabled" : ""}>←</button>
          <button class="btn btn-bad" id="learning">Still learning</button>
          <button class="btn btn-good" id="gotit">Got it ✓</button>
          <button class="btn" id="next" ${pos === order.length - 1 ? "disabled" : ""}>→</button>
        </div>
        <div class="btn-row" style="justify-content:center;margin-top:10px">
          <button class="btn" id="shuffle">🔀 Shuffle</button>
          <button class="btn" id="unknown">Only cards I don't know</button>
        </div>
      </div>
      <table class="term-table">
        ${unit.terms.map(([t, d]) => `<tr><td>${store.data.known[cardKey(t)] ? '<span class="known">✓</span> ' : ""}${esc(t)}</td><td>${esc(d)}</td></tr>`).join("")}
      </table>
    `;
    const fc = body.querySelector("#fc");
    fc.addEventListener("click", () => { flipped = !flipped; fc.classList.toggle("is-flipped", flipped); });
    body.querySelector("#prev").addEventListener("click", () => move(-1));
    body.querySelector("#next").addEventListener("click", () => move(1));
    body.querySelector("#gotit").addEventListener("click", () => mark(true));
    body.querySelector("#learning").addEventListener("click", () => mark(false));
    body.querySelector("#shuffle").addEventListener("click", () => { order = shuffle(order); pos = 0; flipped = false; draw(); });
    body.querySelector("#unknown").addEventListener("click", () => {
      const rest = unit.terms.map((_, i) => i).filter((i) => !store.data.known[cardKey(unit.terms[i][0])]);
      if (!rest.length) { alert("You know every card in this unit. Nice work!"); return; }
      order = rest; pos = 0; flipped = false; draw();
    });
  };
  const move = (d) => { pos = Math.max(0, Math.min(order.length - 1, pos + d)); flipped = false; draw(); };
  const mark = (isKnown) => {
    const k = cardKey(unit.terms[order[pos]][0]);
    if (isKnown) store.data.known[k] = true; else delete store.data.known[k];
    store.save();
    if (pos < order.length - 1) move(1); else { flipped = false; draw(); }
  };
  const onKey = (e) => {
    if (e.target.matches("input, textarea")) return;
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
  if (!unit.frq) { body.innerHTML = `<p class="muted">No free-response practice for this unit yet.</p>`; return; }
  const key = `${course.id}|${idx}`;
  const saved = store.data.frq[key] || { text: "", checked: [], shown: false };
  body.innerHTML = `
    <div class="frq">
      <p class="muted small">Write your answer the way you would on the exam, then open the scoring guide and
      honestly check off each point you earned. Your answer saves automatically in this browser.</p>
      <div class="frq-prompt">${fmt(unit.frq.prompt)}</div>
      <textarea id="frq-text" placeholder="Write your answer here…">${esc(saved.text)}</textarea>
      <div class="btn-row" style="margin-top:10px">
        <button class="btn btn-primary" id="reveal">${saved.shown ? "Hide" : "Show"} scoring guide</button>
        <button class="btn" id="clear">Clear my answer</button>
      </div>
      <div id="rubric" ${saved.shown ? "" : "hidden"}>
        <h3 style="margin-top:20px">Scoring guide <span class="muted small" id="frq-score"></span></h3>
        <ul class="rubric">
          ${unit.frq.points.map((p, i) => `<li><label><input type="checkbox" data-i="${i}" ${saved.checked[i] ? "checked" : ""}/> <span>${fmt(p)}</span></label></li>`).join("")}
        </ul>
      </div>
    </div>`;
  const persist = () => { store.data.frq[key] = saved; store.save(); };
  const score = () => {
    const n = unit.frq.points.filter((_, i) => saved.checked[i]).length;
    body.querySelector("#frq-score").textContent = `· you earned ${n}/${unit.frq.points.length}`;
  };
  score();
  body.querySelector("#frq-text").addEventListener("input", (e) => { saved.text = e.target.value; persist(); });
  body.querySelector("#reveal").addEventListener("click", (e) => {
    saved.shown = !saved.shown; persist();
    body.querySelector("#rubric").hidden = !saved.shown;
    e.target.textContent = `${saved.shown ? "Hide" : "Show"} scoring guide`;
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
    <h3>Common mistakes in this unit</h3>
    <ul class="mistake-list">${unit.mistakes.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
    ${content.tips ? `<h3 style="margin-top:28px">Exam strategy for this course</h3>
    <ul class="mistake-list tip-list">${content.tips.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
  `;
}

/* ---------------- Quiz engine (unit practice, mixed quiz, mistake review) ---------------- */

// items: [{ courseId, unitIdx, qIdx, q }]. opts: { title, pace (secs/question), onRestart }
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
        el.textContent = fmtTime(timeLeft);
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
    body.innerHTML = `
      <div class="quiz">
        <div class="quiz-top">
          <span>Question ${i + 1} of ${items.length}</span>
          ${pctBar(Math.round((i / items.length) * 100))}
          ${timeLeft != null ? `<span class="timer" id="timer">${fmtTime(timeLeft)}</span>` : ""}
        </div>
        <div class="card">
          ${opts.showSource ? `<div class="q-source">${esc(course.name)} · Unit ${unitIdx + 1}: ${esc(unitTitle)}</div>` : ""}
          <div class="q-text">${fmt(q.q)}</div>
          <div class="choices">
            ${perm.map((orig, ci) => {
              let cls = "";
              if (answered && ci === answerPos) cls = "is-correct";
              else if (answered && ci === picked) cls = "is-wrong";
              return `<button class="choice ${cls}" data-ci="${ci}" ${answered ? "disabled" : ""}><span class="letter">${LETTERS[ci]}</span><span>${fmt(q.choices[orig])}</span></button>`;
            }).join("")}
          </div>
          ${answered ? `
            <div class="feedback ${correct ? "good" : "bad"}">
              <strong>${correct ? "Correct! 🎉" : `Not quite. The answer is ${LETTERS[answerPos]}.`}</strong>
              ${fmt(q.explain)}
            </div>` : ""}
          <div class="quiz-actions">
            ${answered ? `<button class="btn btn-primary" id="next">${i === items.length - 1 ? "See results" : "Next question →"}</button>` : ""}
          </div>
        </div>
        <div class="kbd-hint">Keyboard: press 1–${q.choices.length} to answer, Enter for next</div>
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
    const msg = pct >= 85 ? "Excellent. You're exam-ready on this material." : pct >= 60 ? "Solid progress. Review the units below and try again." : "Keep going. Re-read the Learn tab for the weaker units, then retry.";
    body.innerHTML = `
      <div class="quiz">
        <div class="card results">
          ${timedOut ? `<div class="callout callout-warn"><strong>Time's up!</strong>Unanswered questions weren't counted.</div>` : ""}
          <div class="muted">${esc(opts.title || "Practice")} complete</div>
          <div class="score-big">${right}/${items.length}</div>
          <p>${pct}% · ${msg}</p>
          <div class="breakdown">
            ${Object.values(byUnit).map((u) => {
              const content = window.AP_CONTENT[u.courseId];
              const p = Math.round((u.right / u.total) * 100);
              return `<div class="row"><a href="#/course/${u.courseId}/unit/${u.unitIdx + 1}">${opts.showSource ? esc(courseById[u.courseId].name) + " · " : ""}Unit ${u.unitIdx + 1}: ${esc(content.units[u.unitIdx].title)}</a><span>${u.right}/${u.total}</span>${pctBar(p)}</div>`;
            }).join("")}
          </div>
          <div class="btn-row" style="justify-content:center">
            ${opts.onRestart ? `<button class="btn btn-primary" id="again">Try again</button>` : ""}
            ${results.some((r) => !r.ok) ? `<a class="btn" href="#/review">Review my mistakes</a>` : ""}
          </div>
        </div>
      </div>`;
    body.querySelector("#again")?.addEventListener("click", opts.onRestart);
  };

  const onKey = (e) => {
    if (e.target.matches("input, textarea")) return;
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

/* ---------------- Mixed quiz setup ---------------- */

async function renderQuizSetup(course) {
  const content = await loadContent(course.id);
  if (!content) { location.hash = `#/course/${course.id}`; return; }
  document.title = `Mixed quiz — ${course.name}`;
  const pace = mcqPace(course);
  const allQs = content.units.flatMap((u, ui) => u.questions.map((q, qi) => ({ courseId: course.id, unitIdx: ui, qIdx: qi, q })));
  const sel = { units: new Set(content.units.map((_, i) => i)), count: 10, timed: false };

  const draw = () => {
    const pool = allQs.filter((x) => sel.units.has(x.unitIdx));
    app.innerHTML = `
      <div class="crumbs"><a href="#/">Courses</a> / <a href="#/course/${course.id}">${esc(course.name)}</a> / Mixed quiz</div>
      <h1>Mixed practice quiz</h1>
      <p class="muted">Questions are shuffled across the units you pick, the way the real exam mixes topics.</p>
      <div class="card setup" style="max-width:720px">
        <fieldset>
          <legend>Units</legend>
          <label><input type="checkbox" id="all" ${sel.units.size === content.units.length ? "checked" : ""}/> <b>All units</b></label>
          ${content.units.map((u, i) => `<label><input type="checkbox" data-u="${i}" ${sel.units.has(i) ? "checked" : ""}/> Unit ${i + 1}: ${esc(u.title)} <span class="muted small">(${u.questions.length})</span></label>`).join("")}
        </fieldset>
        <fieldset>
          <legend>Number of questions</legend>
          <div class="seg">${[5, 10, 20, "All"].map((n) => `<button data-n="${n}" class="${sel.count === n ? "is-active" : ""}">${n}</button>`).join("")}</div>
        </fieldset>
        <fieldset>
          <legend>Timing</legend>
          <label><input type="checkbox" id="timed" ${sel.timed ? "checked" : ""}/> Exam pace: about ${Math.round(pace / 6) / 10} min per question, like the real multiple-choice section</label>
        </fieldset>
        <button class="btn btn-primary" id="go" ${pool.length ? "" : "disabled"}>Start quiz (${sel.count === "All" ? pool.length : Math.min(sel.count, pool.length)} questions)</button>
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
      const picked = shuffle(pool).slice(0, sel.count === "All" ? pool.length : sel.count);
      app.innerHTML = `<div class="crumbs"><a href="#/">Courses</a> / <a href="#/course/${course.id}">${esc(course.name)}</a> / Mixed quiz</div><div id="quiz-body"></div>`;
      runQuiz(document.getElementById("quiz-body"), picked, {
        title: "Mixed quiz", pace: sel.timed ? pace : null, showSource: true,
        onRestart: () => renderQuizSetup(course),
      });
    });
  };
  draw();
}

/* ---------------- Mistake review ---------------- */

async function renderReview() {
  document.title = "My mistakes — AP Prep Hub";
  const list = mistakes();
  await Promise.all([...new Set(list.map((m) => m.courseId))].filter((id) => courseById[id]).map(loadContent));
  const items = list
    .filter((m) => window.AP_CONTENT[m.courseId]?.units[m.unitIdx]?.questions[m.qIdx])
    .map((m) => ({ ...m, q: window.AP_CONTENT[m.courseId].units[m.unitIdx].questions[m.qIdx] }));

  if (!items.length) {
    app.innerHTML = `
      <h1>My mistakes</h1>
      <div class="card"><p>🎉 Nothing to review right now.</p>
      <p class="muted">Any question you answer incorrectly shows up here, so you can retry it until you get it right.
      Once you answer it correctly, it's removed from this list.</p>
      <a class="btn btn-primary" href="#/">Browse courses</a></div>`;
    return;
  }

  const byCourse = {};
  items.forEach((it) => { (byCourse[it.courseId] = byCourse[it.courseId] || []).push(it); });
  app.innerHTML = `
    <h1>My mistakes</h1>
    <p class="muted">You have ${items.length} question${items.length === 1 ? "" : "s"} to retry. Answer one correctly and it leaves this list.</p>
    <div class="btn-row" style="margin-bottom:20px"><button class="btn btn-primary" id="retry-all">Retry all (${items.length})</button></div>
    ${Object.entries(byCourse).map(([cid, its]) => `
      <div class="card" style="margin-bottom:12px">
        <div class="course-head" style="align-items:center">
          <h3 style="margin:0">${esc(courseById[cid].name)}</h3>
          <button class="btn" data-retry="${cid}">Retry ${its.length}</button>
        </div>
        <ul class="small" style="margin:10px 0 0;padding-left:20px">
          ${its.map((it) => `<li>Unit ${it.unitIdx + 1}: ${esc(it.q.q.split("\n")[0])}</li>`).join("")}
        </ul>
      </div>`).join("")}
  `;
  const start = (subset) => {
    app.innerHTML = `<div class="crumbs"><a href="#/review">My mistakes</a> / Retry</div><div id="quiz-body"></div>`;
    runQuiz(document.getElementById("quiz-body"), shuffle(subset), { title: "Mistake review", showSource: true, onRestart: renderReview });
  };
  app.querySelector("#retry-all").addEventListener("click", () => start(items));
  app.querySelectorAll("[data-retry]").forEach((b) => b.addEventListener("click", () => start(byCourse[b.dataset.retry])));
}

/* ---------------- Theme ---------------- */

(function initTheme() {
  const btn = document.getElementById("theme-toggle");
  const dark = document.getElementById("theme-icon-dark");
  const light = document.getElementById("theme-icon-light");
  let saved = null;
  try { saved = localStorage.getItem("apprep.theme"); } catch (_) {}
  const apply = (t) => {
    if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme;
    const isDark = t ? t === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    dark.style.display = isDark ? "none" : "";
    light.style.display = isDark ? "" : "none";
  };
  apply(saved);
  btn.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = isDark ? "light" : "dark";
    try { localStorage.setItem("apprep.theme", next); } catch (_) {}
    apply(next);
  });
})();

/* ---------------- Boot ---------------- */

// Preload guides so home-page cards can show progress.
Promise.all(COURSES.filter((c) => c.guide).map((c) => loadContent(c.id).catch(() => null))).then(() => {
  const onHome = !location.hash || location.hash === "#/" || location.hash === "#";
  if (onHome && !homeState.query && document.activeElement?.id !== "search") renderHome();
});
window.addEventListener("hashchange", route);
updateMistakeCount();
route();
