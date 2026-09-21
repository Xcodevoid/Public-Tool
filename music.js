"use strict";

/* ---------------------------------------------------------------------
 * Music theory
 * ------------------------------------------------------------------- */
const SCALES = [
  { id: "major", name: "Major", intervals: [0, 2, 4, 5, 7, 9, 11] },
  { id: "minor", name: "Natural Minor", intervals: [0, 2, 3, 5, 7, 8, 10] },
  { id: "majorPent", name: "Major Pentatonic", intervals: [0, 2, 4, 7, 9] },
  { id: "minorPent", name: "Minor Pentatonic", intervals: [0, 3, 5, 7, 10] },
  { id: "dorian", name: "Dorian", intervals: [0, 2, 3, 5, 7, 9, 10] },
];
const ROOT_MIDI = 60; // C4

function mod(n, m) { return ((n % m) + m) % m; }

function degreeToMidi(scale, degree) {
  const len = scale.intervals.length;
  const octave = Math.floor(degree / len);
  const idx = mod(degree, len);
  return ROOT_MIDI + octave * 12 + scale.intervals[idx];
}

function midiToFreq(midi) { return 440 * Math.pow(2, (midi - 69) / 12); }

/* ---------------------------------------------------------------------
 * Random seed generation — a bounded random walk through the scale.
 * ------------------------------------------------------------------- */
const TOTAL_BEATS = 16; // 4 bars of 4/4
const DURATIONS = [0.5, 1, 1, 1, 1.5, 2];
const STEP_CHOICES = [-2, -1, -1, 0, 1, 1, 2];

function randChoice(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function generateSeed(scale) {
  const notes = [];
  let remaining = TOTAL_BEATS;
  let degree = 0;
  while (remaining > 0.001) {
    let duration = randChoice(DURATIONS);
    if (duration > remaining) duration = remaining;
    notes.push({ degree, duration });
    remaining -= duration;
    degree = Math.max(-3, Math.min(10, degree + randChoice(STEP_CHOICES)));
  }
  return notes;
}

/* ---------------------------------------------------------------------
 * Grouping the seed into motifs of 3-4 notes.
 * ------------------------------------------------------------------- */
function groupIntoMotifs(notes) {
  const motifs = [];
  let i = 0;
  while (i < notes.length) {
    const size = Math.min(notes.length - i, randChoice([3, 3, 4, 4]));
    motifs.push(notes.slice(i, i + size));
    i += size;
  }
  return motifs;
}

/* ---------------------------------------------------------------------
 * Motif transformations
 * ------------------------------------------------------------------- */
function identity(motif) { return motif.map((n) => ({ ...n })); }
function transpose(motif, shift) { return motif.map((n) => ({ ...n, degree: n.degree + shift })); }
function retrograde(motif) { return [...motif].reverse().map((n) => ({ ...n })); }
function invert(motif) {
  const base = motif[0].degree;
  return motif.map((n) => ({ ...n, degree: base * 2 - n.degree }));
}

function randomTransform() {
  const r = Math.random();
  if (r < 0.35) return { type: "identity" };
  if (r < 0.6) return { type: "transpose", shift: randChoice([2, 3, 4, -2, -3, -4]) };
  if (r < 0.8) return { type: "retrograde" };
  return { type: "invert" };
}

function applyTransform(motif, transform) {
  switch (transform.type) {
    case "transpose": return transpose(motif, transform.shift);
    case "retrograde": return retrograde(motif);
    case "invert": return invert(motif);
    default: return identity(motif);
  }
}

function transformLabel(transform) {
  switch (transform.type) {
    case "transpose": return transform.shift > 0 ? `+${transform.shift}` : `${transform.shift}`;
    case "retrograde": return "R";
    case "invert": return "I";
    default: return "";
  }
}

/* ---------------------------------------------------------------------
 * Arrangement: each motif is introduced once, then revisited (varied)
 * later — repetition with variation is what makes it sound composed.
 * ------------------------------------------------------------------- */
function shuffleNoAdjacentRepeats(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] !== arr[i] && arr[j] !== arr[i - 1]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        break;
      }
    }
  }
  return arr;
}

function buildArrangement(motifs) {
  const slots = [];
  for (let i = 0; i < motifs.length; i++) slots.push(i, i);
  shuffleNoAdjacentRepeats(slots);
  const introduced = new Set();
  return slots.map((motifIndex) => {
    const transform = introduced.has(motifIndex) ? randomTransform() : { type: "identity" };
    introduced.add(motifIndex);
    return { motifIndex, transform };
  });
}

/* ---------------------------------------------------------------------
 * Flatten motifs/arrangement into a timed note list.
 * ------------------------------------------------------------------- */
function buildSeedDisplay(motifs, scale) {
  const notes = [];
  let cursor = 0;
  motifs.forEach((motif, motifIndex) => {
    motif.forEach((n) => {
      notes.push({
        midi: degreeToMidi(scale, n.degree), duration: n.duration, startBeat: cursor,
        motifIndex, motifLabel: String.fromCharCode(65 + motifIndex), transformLabel: "",
      });
      cursor += n.duration;
    });
  });
  return { notes, totalBeats: cursor };
}

function buildPiece(motifs, arrangement, scale) {
  const notes = [];
  let cursor = 0;
  arrangement.forEach(({ motifIndex, transform }) => {
    const transformed = applyTransform(motifs[motifIndex], transform);
    const label = transformLabel(transform);
    transformed.forEach((n) => {
      notes.push({
        midi: degreeToMidi(scale, n.degree), duration: n.duration, startBeat: cursor,
        motifIndex, motifLabel: String.fromCharCode(65 + motifIndex), transformLabel: label,
      });
      cursor += n.duration;
    });
  });
  return { notes, totalBeats: cursor };
}

/* ---------------------------------------------------------------------
 * Rendering
 * ------------------------------------------------------------------- */
const MOTIF_COLORS = ["#8b7bff", "#ff6fb8", "#3fe8d1", "#ffb84d", "#6de07a", "#ff8a65", "#64b5f6", "#ce93d8"];

function renderRoll(container, piece) {
  container.querySelectorAll(".roll-note").forEach((el) => el.remove());
  if (piece.notes.length === 0) return;
  const midis = piece.notes.map((n) => n.midi);
  const minMidi = Math.min(...midis) - 2;
  const maxMidi = Math.max(...midis) + 2;
  const range = Math.max(1, maxMidi - minMidi);

  piece.notes.forEach((n, idx) => {
    const el = document.createElement("div");
    el.className = "roll-note";
    el.dataset.noteIndex = String(idx);
    el.style.left = `${(n.startBeat / piece.totalBeats) * 100}%`;
    el.style.width = `calc(${(n.duration / piece.totalBeats) * 100}% - 2px)`;
    el.style.top = `calc(${((maxMidi - n.midi) / range) * 100}% - 6px)`;
    el.style.height = "12px";
    el.style.background = MOTIF_COLORS[n.motifIndex % MOTIF_COLORS.length];
    el.textContent = n.motifLabel + n.transformLabel;
    container.appendChild(el);
  });
}

function renderLegend(motifCount) {
  const el = document.getElementById("motif-legend");
  el.innerHTML = "";
  for (let i = 0; i < motifCount; i++) {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-swatch" style="background:${MOTIF_COLORS[i % MOTIF_COLORS.length]}"></span>Motif ${String.fromCharCode(65 + i)}`;
    el.appendChild(item);
  }
}

/* ---------------------------------------------------------------------
 * Web Audio playback
 * ------------------------------------------------------------------- */
let audioCtx = null;
let activeNodes = [];
let playing = false;
let playStartTime = 0;
let rafId = null;

function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function scheduleNote(ctx, startTime, freq, durationSec) {
  const osc1 = ctx.createOscillator();
  osc1.type = "triangle";
  const osc2 = ctx.createOscillator();
  osc2.type = "sine";
  osc2.detune.value = 6;
  const gain = ctx.createGain();

  const peak = 0.5, sustainLevel = peak * 0.55;
  const attack = 0.015, decay = 0.08, release = 0.12;
  const noteEnd = startTime + durationSec;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(peak, startTime + attack);
  gain.gain.linearRampToValueAtTime(sustainLevel, startTime + attack + decay);
  gain.gain.setValueAtTime(sustainLevel, Math.max(startTime + attack + decay, noteEnd - 0.001));
  gain.gain.linearRampToValueAtTime(0, noteEnd + release);

  osc1.frequency.setValueAtTime(freq, startTime);
  osc2.frequency.setValueAtTime(freq, startTime);
  osc1.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
  const stopTime = noteEnd + release + 0.02;
  osc1.start(startTime); osc2.start(startTime);
  osc1.stop(stopTime); osc2.stop(stopTime);
  activeNodes.push(osc1, osc2, gain);
}

function stopPlayback() {
  activeNodes.forEach((node) => {
    try { if (node.stop) node.stop(); node.disconnect(); } catch { /* already stopped */ }
  });
  activeNodes = [];
  playing = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  const playhead = document.getElementById("playhead");
  if (playhead) playhead.hidden = true;
  document.querySelectorAll(".roll-note.is-playing").forEach((el) => el.classList.remove("is-playing"));
  updatePlayButton();
}

function updatePlayButton() {
  const btn = document.getElementById("play-btn");
  if (btn) btn.textContent = playing ? "⏹ Stop" : "▶ Play";
}

function animatePlayhead(piece, secondsPerBeat) {
  const playhead = document.getElementById("playhead");
  playhead.hidden = false;
  const totalDuration = piece.totalBeats * secondsPerBeat;
  const noteEls = Array.from(document.querySelectorAll("#piece-roll .roll-note"));

  function frame() {
    const elapsed = audioCtx.currentTime - playStartTime;
    if (elapsed >= totalDuration || !playing) {
      stopPlayback();
      return;
    }
    playhead.style.left = `${(elapsed / totalDuration) * 100}%`;
    noteEls.forEach((el, idx) => {
      const n = piece.notes[idx];
      const isPlaying = elapsed >= n.startBeat * secondsPerBeat && elapsed < (n.startBeat + n.duration) * secondsPerBeat;
      el.classList.toggle("is-playing", isPlaying);
    });
    rafId = requestAnimationFrame(frame);
  }
  rafId = requestAnimationFrame(frame);
}

function playPiece(piece, bpm) {
  if (!piece || piece.notes.length === 0) return;
  const ctx = ensureAudio();
  if (ctx.state === "suspended") ctx.resume();
  stopPlayback();
  const secondsPerBeat = 60 / bpm;
  const now = ctx.currentTime + 0.05;
  playStartTime = now;
  piece.notes.forEach((n) => {
    scheduleNote(ctx, now + n.startBeat * secondsPerBeat, midiToFreq(n.midi), n.duration * secondsPerBeat * 0.92);
  });
  playing = true;
  updatePlayButton();
  animatePlayhead(piece, secondsPerBeat);
}

/* ---------------------------------------------------------------------
 * MIDI file export (format 0, single track)
 * ------------------------------------------------------------------- */
function writeVarLen(value) {
  const bytes = [];
  let buffer = value & 0x7f;
  while ((value >>= 7) > 0) {
    buffer <<= 8;
    buffer |= 0x80;
    buffer += value & 0x7f;
  }
  while (true) {
    bytes.push(buffer & 0xff);
    if (buffer & 0x80) buffer >>>= 8;
    else break;
  }
  return bytes;
}

function buildMidiBytes(piece, bpm) {
  const ticksPerBeat = 480;
  const events = [];
  piece.notes.forEach((n) => {
    events.push({ tick: Math.round(n.startBeat * ticksPerBeat), type: "on", note: n.midi });
    events.push({ tick: Math.round((n.startBeat + n.duration * 0.92) * ticksPerBeat), type: "off", note: n.midi });
  });
  events.sort((a, b) => a.tick - b.tick || (a.type === "off" ? -1 : 1));

  const track = [];
  const microsPerBeat = Math.round(60000000 / bpm);
  track.push(...writeVarLen(0), 0xff, 0x51, 0x03, (microsPerBeat >> 16) & 0xff, (microsPerBeat >> 8) & 0xff, microsPerBeat & 0xff);

  let lastTick = 0;
  events.forEach((e) => {
    track.push(...writeVarLen(e.tick - lastTick));
    lastTick = e.tick;
    track.push(e.type === "on" ? 0x90 : 0x80, e.note, e.type === "on" ? 100 : 0);
  });
  track.push(...writeVarLen(0), 0xff, 0x2f, 0x00);

  const header = [0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, (ticksPerBeat >> 8) & 0xff, ticksPerBeat & 0xff];
  const trackHeader = [
    0x4d, 0x54, 0x72, 0x6b,
    (track.length >> 24) & 0xff, (track.length >> 16) & 0xff, (track.length >> 8) & 0xff, track.length & 0xff,
  ];
  return new Uint8Array([...header, ...trackHeader, ...track]);
}

function downloadMidi(piece, bpm) {
  if (!piece || piece.notes.length === 0) return;
  const blob = new Blob([buildMidiBytes(piece, bpm)], { type: "audio/midi" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "motifforge-tune.mid";
  a.click();
  URL.revokeObjectURL(url);
  window.toast?.("Downloaded motifforge-tune.mid");
}

/* ---------------------------------------------------------------------
 * App state + wiring
 * ------------------------------------------------------------------- */
const state = {
  scale: SCALES[0],
  bpm: 100,
  motifs: [],
  seedPiece: null,
  currentPiece: null,
};

function regenerateSeed() {
  stopPlayback();
  const seedNotes = generateSeed(state.scale);
  state.motifs = groupIntoMotifs(seedNotes);
  state.seedPiece = buildSeedDisplay(state.motifs, state.scale);
  renderRoll(document.getElementById("seed-roll"), state.seedPiece);
  reshuffleArrangement();
  window.toast?.("New seed generated");
}

function reshuffleArrangement() {
  stopPlayback();
  const arrangement = buildArrangement(state.motifs);
  state.currentPiece = buildPiece(state.motifs, arrangement, state.scale);
  renderRoll(document.getElementById("piece-roll"), state.currentPiece);
  renderLegend(state.motifs.length);
}

function renderScaleChips() {
  const row = document.getElementById("scale-row");
  row.innerHTML = "";
  SCALES.forEach((scale) => {
    const btn = document.createElement("button");
    btn.className = "chip-btn" + (scale.id === state.scale.id ? " is-active" : "");
    btn.textContent = scale.name;
    btn.addEventListener("click", () => {
      state.scale = scale;
      renderScaleChips();
      regenerateSeed();
    });
    row.appendChild(btn);
  });
}

function initControls() {
  document.getElementById("new-seed-btn").addEventListener("click", regenerateSeed);
  document.getElementById("reshuffle-btn").addEventListener("click", reshuffleArrangement);
  document.getElementById("play-btn").addEventListener("click", () => {
    if (playing) stopPlayback();
    else playPiece(state.currentPiece, state.bpm);
  });
  document.getElementById("download-btn").addEventListener("click", () => downloadMidi(state.currentPiece, state.bpm));
  document.getElementById("tempo-input").addEventListener("input", (e) => {
    state.bpm = Number(e.target.value);
    document.getElementById("tempo-value").textContent = String(state.bpm);
  });
}

let initialized = false;
function onComposeTabActivated() {
  if (initialized) return;
  initialized = true;
  renderScaleChips();
  initControls();
  regenerateSeed();
}

window.addEventListener("tabchange", (e) => {
  if (e.detail.tabId === "compose") onComposeTabActivated();
  else stopPlayback();
});
