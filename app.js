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
  decks: "vibeclub_studyvibe_decks_v1",
  stats: "vibeclub_studyvibe_stats_v1",
  theme: "vibeclub_studyvibe_theme_v1",
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
  } catch {
    /* storage unavailable (private mode, quota) — app still works this session */
  }
}

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

function todayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

/* ---------------------------------------------------------------------
 * Sample decks (seeded once, on first run only)
 * ------------------------------------------------------------------- */
function makeSeedDecks() {
  const now = new Date().toISOString();
  const seed = (name, description, pairs) => ({
    id: uid(),
    name,
    description,
    createdAt: now,
    cards: pairs.map(([front, back]) => newCard(front, back)),
  });
  return [
    seed("Welcome to StudyVibe", "A quick tour of how the app works.", [
      ["How do I flip a card?", "Click the card, or press Space."],
      ["How do I rate a card?", "Press 1 (Again), 2 (Hard), 3 (Good), or 4 (Easy) after flipping."],
      ["Where do decks live?", "In your browser's local storage — nothing leaves your device."],
      ["How do I share a deck?", "Open it in Decks → Export JSON, then send the file to a friend."],
    ]),
    seed("Big-O Cheat Sheet", "Common time complexities every CS student should know cold.", [
      ["O(1)", "Constant time — doesn't grow with input size."],
      ["O(log n)", "Logarithmic — e.g. binary search."],
      ["O(n)", "Linear — e.g. a single loop over the input."],
      ["O(n log n)", "Linearithmic — e.g. merge sort, quicksort (average)."],
      ["O(n^2)", "Quadratic — e.g. nested loops, bubble sort."],
      ["O(2^n)", "Exponential — e.g. naive recursive Fibonacci."],
    ]),
  ];
}

/* ---------------------------------------------------------------------
 * Spaced repetition (lightweight SM-2 variant)
 * ------------------------------------------------------------------- */
const MS_PER_DAY = 24 * 60 * 60 * 1000;

function newCard(front, back) {
  return {
    id: uid(),
    front,
    back,
    interval: 0, // days
    ease: 2.5,
    due: new Date().toISOString(),
    reps: 0,
    lapses: 0,
  };
}

function isDue(card, now = new Date()) {
  return new Date(card.due).getTime() <= now.getTime();
}

function previewInterval(card, rating) {
  const { interval, ease } = card;
  let nextInterval;
  switch (rating) {
    case "again":
      nextInterval = 0; // due again today
      break;
    case "hard":
      nextInterval = Math.max(1, Math.round((interval || 1) * 1.2));
      break;
    case "good":
      nextInterval = interval <= 0 ? 1 : Math.round(interval * ease);
      break;
    case "easy":
      nextInterval = interval <= 0 ? 3 : Math.round(interval * ease * 1.3);
      break;
  }
  return nextInterval;
}

function formatIntervalShort(days) {
  if (days <= 0) return "<10m";
  if (days === 1) return "1d";
  if (days < 30) return `${days}d`;
  if (days < 365) return `${Math.round(days / 30)}mo`;
  return `${(days / 365).toFixed(1)}y`;
}

function applyRating(card, rating) {
  const nextInterval = previewInterval(card, rating);
  if (rating === "again") {
    card.ease = Math.max(1.3, card.ease - 0.2);
    card.lapses += 1;
    const due = new Date();
    due.setMinutes(due.getMinutes() + 10);
    card.due = due.toISOString();
  } else {
    if (rating === "hard") card.ease = Math.max(1.3, card.ease - 0.15);
    if (rating === "easy") card.ease = card.ease + 0.15;
    const due = new Date();
    due.setTime(due.getTime() + nextInterval * MS_PER_DAY);
    card.due = due.toISOString();
  }
  card.interval = nextInterval;
  card.reps += 1;
  return card;
}

/* ---------------------------------------------------------------------
 * App state
 * ------------------------------------------------------------------- */
let decks = loadJSON(STORAGE_KEYS.decks, null);
if (!decks) {
  decks = makeSeedDecks();
  saveJSON(STORAGE_KEYS.decks, decks);
}

let stats = loadJSON(STORAGE_KEYS.stats, { totalReviews: 0, byDate: {}, lastStudyDate: null, streak: 0 });

function persistDecks() {
  saveJSON(STORAGE_KEYS.decks, decks);
}
function persistStats() {
  saveJSON(STORAGE_KEYS.stats, stats);
}

function findDeck(id) {
  return decks.find((d) => d.id === id) || null;
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
  if (tabId === "decks") renderDeckManager();
  if (tabId === "study") renderStudyPicker();
  if (tabId === "stats") renderStats();
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
  const meta = document.getElementById("club-meta");
  meta.innerHTML = `<span>📍 ${escapeHTML(CLUB_INFO.meets)}</span>`;
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

/* ---------------------------------------------------------------------
 * Study picker
 * ------------------------------------------------------------------- */
function renderStudyPicker() {
  document.getElementById("study-session").hidden = true;
  document.getElementById("study-empty").hidden = true;
  document.getElementById("study-picker").hidden = false;

  const list = document.getElementById("study-deck-list");
  list.innerHTML = "";

  if (decks.length === 0) {
    list.innerHTML = `<p class="muted">No decks yet — head to the Decks tab to create one.</p>`;
    return;
  }

  decks.forEach((deck) => {
    const dueCount = deck.cards.filter((c) => isDue(c)).length;
    const btn = document.createElement("button");
    btn.className = "deck-card";
    btn.innerHTML = `
      <h4>${escapeHTML(deck.name)}</h4>
      <p>${escapeHTML(deck.description || "")}</p>
      <div class="deck-card-meta">
        <span class="badge-due">${dueCount} due</span>
        <span>${deck.cards.length} cards</span>
      </div>
    `;
    btn.addEventListener("click", () => startStudySession(deck.id));
    list.appendChild(btn);
  });
}

/* ---------------------------------------------------------------------
 * Study session
 * ------------------------------------------------------------------- */
const session = {
  deckId: null,
  queue: [],
  index: 0,
  flipped: false,
  total: 0,
};

function startStudySession(deckId, includeAllIfEmpty = false) {
  const deck = findDeck(deckId);
  if (!deck) return;

  let due = deck.cards.filter((c) => isDue(c));
  if (due.length === 0 && !includeAllIfEmpty) {
    document.getElementById("study-picker").hidden = true;
    document.getElementById("study-session").hidden = true;
    document.getElementById("study-empty").hidden = false;
    document.getElementById("study-anyway").onclick = () => startStudySession(deckId, true);
    session.deckId = deckId;
    return;
  }
  if (due.length === 0 && includeAllIfEmpty) due = deck.cards.slice();

  // shuffle
  for (let i = due.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [due[i], due[j]] = [due[j], due[i]];
  }

  session.deckId = deckId;
  session.queue = due;
  session.index = 0;
  session.total = due.length;
  session.flipped = false;

  document.getElementById("study-picker").hidden = true;
  document.getElementById("study-empty").hidden = true;
  document.getElementById("study-session").hidden = false;
  renderStudyCard();
}

function currentCard() {
  return session.queue[session.index] || null;
}

function renderStudyCard() {
  const card = currentCard();
  const flashcard = document.getElementById("flashcard");
  const ratingRow = document.getElementById("rating-row");

  if (!card) {
    // session complete
    document.getElementById("study-session").hidden = true;
    document.getElementById("study-picker").hidden = false;
    renderStudyPicker();
    toast(`Nice! You reviewed ${session.total} card${session.total === 1 ? "" : "s"}.`);
    return;
  }

  session.flipped = false;
  flashcard.classList.remove("is-flipped");
  ratingRow.hidden = true;
  document.getElementById("flashcard-front-text").textContent = card.front;
  document.getElementById("flashcard-back-text").textContent = card.back;

  const done = session.index;
  document.getElementById("study-progress-text").textContent = `${done} / ${session.total}`;
  document.getElementById("study-progress-fill").style.width = `${(done / session.total) * 100}%`;

  document.getElementById("hint-hard").textContent = formatIntervalShort(previewInterval(card, "hard"));
  document.getElementById("hint-good").textContent = formatIntervalShort(previewInterval(card, "good"));
  document.getElementById("hint-easy").textContent = formatIntervalShort(previewInterval(card, "easy"));
}

function flipCard() {
  const card = currentCard();
  if (!card) return;
  session.flipped = !session.flipped;
  document.getElementById("flashcard").classList.toggle("is-flipped", session.flipped);
  document.getElementById("rating-row").hidden = !session.flipped;
}

function rateCurrentCard(rating) {
  const card = currentCard();
  if (!card || !session.flipped) return;

  applyRating(card, rating);
  persistDecks();
  recordReview();

  session.index += 1;
  renderStudyCard();
}

function recordReview() {
  stats.totalReviews += 1;
  const key = todayKey();
  stats.byDate[key] = (stats.byDate[key] || 0) + 1;

  const last = stats.lastStudyDate;
  if (last !== key) {
    const yesterday = todayKey(new Date(Date.now() - MS_PER_DAY));
    stats.streak = last === yesterday ? stats.streak + 1 : 1;
    stats.lastStudyDate = key;
  }
  persistStats();
}

function initStudySession() {
  document.getElementById("flashcard").addEventListener("click", flipCard);
  document.getElementById("study-exit").addEventListener("click", () => activateTab("study"));
  document.querySelectorAll("[data-rating]").forEach((btn) => {
    btn.addEventListener("click", () => rateCurrentCard(btn.dataset.rating));
  });

  document.addEventListener("keydown", (e) => {
    const studyVisible = document.getElementById("study-session").hidden === false;
    if (!studyVisible) return;
    if (e.code === "Space") {
      e.preventDefault();
      flipCard();
    } else if (["1", "2", "3", "4"].includes(e.key) && session.flipped) {
      const map = { 1: "again", 2: "hard", 3: "good", 4: "easy" };
      rateCurrentCard(map[e.key]);
    }
  });
}

/* ---------------------------------------------------------------------
 * Deck manager
 * ------------------------------------------------------------------- */
let editingDeckId = null;

function renderDeckManager() {
  const list = document.getElementById("deck-manager-list");
  list.innerHTML = "";

  if (decks.length === 0) {
    list.innerHTML = `<p class="muted">No decks yet. Click "+ New deck" to create your first one.</p>`;
  }

  decks.forEach((deck) => {
    const card = document.createElement("div");
    card.className = "deck-card";
    card.innerHTML = `
      <h4>${escapeHTML(deck.name)}</h4>
      <p>${escapeHTML(deck.description || "")}</p>
      <div class="deck-card-meta"><span>${deck.cards.length} cards</span></div>
      <div class="deck-card-actions">
        <button data-action="edit">Edit</button>
        <button data-action="delete">Delete</button>
      </div>
    `;
    card.querySelector('[data-action="edit"]').addEventListener("click", () => openDeckEditor(deck.id));
    card.querySelector('[data-action="delete"]').addEventListener("click", () => {
      if (confirm(`Delete "${deck.name}"? This can't be undone.`)) {
        decks = decks.filter((d) => d.id !== deck.id);
        persistDecks();
        renderDeckManager();
      }
    });
    list.appendChild(card);
  });
}

function openDeckEditor(deckId) {
  editingDeckId = deckId;
  const deck = findDeck(deckId);
  if (!deck) return;
  document.getElementById("deck-editor").hidden = false;
  document.getElementById("deck-editor-name").value = deck.name;
  document.getElementById("deck-editor-desc").value = deck.description || "";
  renderCardList();
  document.getElementById("deck-editor").scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeDeckEditor() {
  editingDeckId = null;
  document.getElementById("deck-editor").hidden = true;
}

function renderCardList() {
  const deck = findDeck(editingDeckId);
  const list = document.getElementById("card-list");
  list.innerHTML = "";
  if (!deck) return;

  if (deck.cards.length === 0) {
    list.innerHTML = `<p class="muted">No cards yet — add one above.</p>`;
    return;
  }

  deck.cards.forEach((card) => {
    const row = document.createElement("div");
    row.className = "card-row";
    row.innerHTML = `
      <div class="card-field"><small>Front</small>${escapeHTML(card.front)}</div>
      <div class="card-field"><small>Back</small>${escapeHTML(card.back)}</div>
      <button title="Delete card">✕</button>
    `;
    row.querySelector("button").addEventListener("click", () => {
      deck.cards = deck.cards.filter((c) => c.id !== card.id);
      persistDecks();
      renderCardList();
      renderDeckManager();
    });
    list.appendChild(row);
  });
}

function initDeckManager() {
  document.getElementById("new-deck-btn").addEventListener("click", () => {
    const deck = { id: uid(), name: "New deck", description: "", createdAt: new Date().toISOString(), cards: [] };
    decks.push(deck);
    persistDecks();
    renderDeckManager();
    openDeckEditor(deck.id);
  });

  document.getElementById("deck-editor-close").addEventListener("click", () => {
    closeDeckEditor();
    renderDeckManager();
  });

  document.getElementById("deck-editor-name").addEventListener("input", (e) => {
    const deck = findDeck(editingDeckId);
    if (!deck) return;
    deck.name = e.target.value;
    persistDecks();
  });
  document.getElementById("deck-editor-name").addEventListener("blur", renderDeckManager);

  document.getElementById("deck-editor-desc").addEventListener("input", (e) => {
    const deck = findDeck(editingDeckId);
    if (!deck) return;
    deck.description = e.target.value;
    persistDecks();
  });
  document.getElementById("deck-editor-desc").addEventListener("blur", renderDeckManager);

  document.getElementById("add-card-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const deck = findDeck(editingDeckId);
    if (!deck) return;
    const frontEl = document.getElementById("add-card-front");
    const backEl = document.getElementById("add-card-back");
    const front = frontEl.value.trim();
    const back = backEl.value.trim();
    if (!front || !back) return;
    deck.cards.push(newCard(front, back));
    persistDecks();
    frontEl.value = "";
    backEl.value = "";
    frontEl.focus();
    renderCardList();
    renderDeckManager();
  });

  document.getElementById("deck-export-btn").addEventListener("click", () => {
    const deck = findDeck(editingDeckId);
    if (!deck) return;
    const blob = new Blob([JSON.stringify(deck, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${deck.name.replace(/[^a-z0-9-_]+/gi, "_") || "deck"}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast("Deck exported");
  });

  document.getElementById("import-deck-input").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const imported = JSON.parse(text);
      if (!imported || !Array.isArray(imported.cards)) throw new Error("Not a valid deck file");
      const deck = {
        id: uid(),
        name: imported.name ? `${imported.name} (imported)` : "Imported deck",
        description: imported.description || "",
        createdAt: new Date().toISOString(),
        cards: imported.cards.map((c) => newCard(c.front ?? "", c.back ?? "")),
      };
      decks.push(deck);
      persistDecks();
      renderDeckManager();
      toast(`Imported "${deck.name}" (${deck.cards.length} cards)`);
    } catch (err) {
      alert("Couldn't import that file — make sure it's a deck exported from StudyVibe.");
    } finally {
      e.target.value = "";
    }
  });
}

/* ---------------------------------------------------------------------
 * Stats
 * ------------------------------------------------------------------- */
function renderStats() {
  document.getElementById("stat-streak").textContent = stats.streak || 0;
  document.getElementById("stat-today").textContent = stats.byDate[todayKey()] || 0;
  document.getElementById("stat-total").textContent = stats.totalReviews || 0;
  document.getElementById("stat-decks").textContent = decks.length;

  const heatmap = document.getElementById("stats-heatmap");
  heatmap.innerHTML = "";
  for (let i = 13; i >= 0; i--) {
    const d = new Date(Date.now() - i * MS_PER_DAY);
    const key = todayKey(d);
    const count = stats.byDate[key] || 0;
    const cell = document.createElement("div");
    cell.className = "heatmap-cell";
    cell.title = `${key}: ${count} cards`;
    cell.textContent = count > 0 ? String(count) : "";
    const intensity = Math.min(1, count / 20);
    if (count > 0) {
      cell.style.background = `color-mix(in srgb, var(--accent) ${20 + intensity * 60}%, var(--bg-sunken))`;
      cell.style.color = intensity > 0.4 ? "white" : "var(--text)";
    }
    heatmap.appendChild(cell);
  }
}

function initStats() {
  document.getElementById("reset-data-btn").addEventListener("click", () => {
    if (!confirm("This will permanently erase all decks and stats in this browser. Continue?")) return;
    localStorage.removeItem(STORAGE_KEYS.decks);
    localStorage.removeItem(STORAGE_KEYS.stats);
    decks = makeSeedDecks();
    stats = { totalReviews: 0, byDate: {}, lastStudyDate: null, streak: 0 };
    persistDecks();
    persistStats();
    renderDeckManager();
    renderStats();
    toast("All local data erased");
  });
}

/* ---------------------------------------------------------------------
 * Focus timer
 * ------------------------------------------------------------------- */
const timerState = {
  mode: "focus", // "focus" | "break"
  remaining: 25 * 60,
  total: 25 * 60,
  running: false,
  intervalHandle: null,
  sessionsToday: 0,
};

const TIMER_CIRCUMFERENCE = 2 * Math.PI * 54;

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function renderTimer() {
  document.getElementById("timer-time").textContent = formatTime(timerState.remaining);
  document.getElementById("timer-mode").textContent = timerState.mode === "focus" ? "Focus" : "Break";
  const progressEl = document.getElementById("timer-progress-circle");
  const fraction = timerState.total > 0 ? timerState.remaining / timerState.total : 0;
  progressEl.style.strokeDasharray = String(TIMER_CIRCUMFERENCE);
  progressEl.style.strokeDashoffset = String(TIMER_CIRCUMFERENCE * (1 - fraction));
  document.getElementById("timer-start").textContent = timerState.running ? "Pause" : "Start";
  document.getElementById("timer-session-count").textContent =
    `${timerState.sessionsToday} focus session${timerState.sessionsToday === 1 ? "" : "s"} completed today`;
}

function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 660;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    osc.start();
    osc.stop(ctx.currentTime + 0.6);
  } catch {
    /* audio unsupported — silent fallback */
  }
}

function timerTick() {
  timerState.remaining -= 1;
  if (timerState.remaining <= 0) {
    playChime();
    if (timerState.mode === "focus") {
      timerState.sessionsToday += 1;
      timerState.mode = "break";
      const breakMin = Number(document.getElementById("timer-break-min").value) || 5;
      timerState.total = breakMin * 60;
    } else {
      timerState.mode = "focus";
      const focusMin = Number(document.getElementById("timer-focus-min").value) || 25;
      timerState.total = focusMin * 60;
    }
    timerState.remaining = timerState.total;
    toast(timerState.mode === "break" ? "Focus session done — take a break!" : "Break's over — back to it.");
  }
  document.title = `${formatTime(timerState.remaining)} · ${timerState.mode === "focus" ? "Focus" : "Break"} — StudyVibe`;
  renderTimer();
}

function toggleTimer() {
  timerState.running = !timerState.running;
  if (timerState.running) {
    timerState.intervalHandle = setInterval(timerTick, 1000);
  } else {
    clearInterval(timerState.intervalHandle);
    document.title = "StudyVibe — flashcards that stick";
  }
  renderTimer();
}

function resetTimer() {
  clearInterval(timerState.intervalHandle);
  timerState.running = false;
  timerState.mode = "focus";
  const focusMin = Number(document.getElementById("timer-focus-min").value) || 25;
  timerState.total = focusMin * 60;
  timerState.remaining = timerState.total;
  document.title = "StudyVibe — flashcards that stick";
  renderTimer();
}

function initTimer() {
  document.getElementById("timer-start").addEventListener("click", toggleTimer);
  document.getElementById("timer-reset").addEventListener("click", resetTimer);
  document.getElementById("timer-focus-min").addEventListener("change", () => {
    if (!timerState.running && timerState.mode === "focus") resetTimer();
  });
  document.getElementById("timer-break-min").addEventListener("change", () => {
    if (!timerState.running && timerState.mode === "break") resetTimer();
  });
  renderTimer();
}

/* ---------------------------------------------------------------------
 * Init
 * ------------------------------------------------------------------- */
function init() {
  initTheme();
  initTabs();
  renderClubInfo();
  initStudySession();
  initDeckManager();
  initStats();
  initTimer();
  renderStudyPicker();
}

document.addEventListener("DOMContentLoaded", init);
