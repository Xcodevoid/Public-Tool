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
window.CLUB_INFO = CLUB_INFO;

/* ---------------------------------------------------------------------
 * Storage
 * ------------------------------------------------------------------- */
const STORAGE_KEYS = {
  theme: "vibeclub_blockworld_theme_v1",
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
    /* storage unavailable — non-fatal */
  }
}

/* ---------------------------------------------------------------------
 * Toast
 * ------------------------------------------------------------------- */
let toastTimer = null;
function toast(message) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2200);
}
window.toast = toast;

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
  window.dispatchEvent(new CustomEvent("tabchange", { detail: { tabId } }));
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
 * Init
 * ------------------------------------------------------------------- */
function init() {
  initTheme();
  initTabs();
  renderClubInfo();
}

document.addEventListener("DOMContentLoaded", init);
