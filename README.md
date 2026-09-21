# MotifForge ⚡

A free, generative music tool built by our school's **Vibe Coding Club**. It seeds a
random melody, groups it into short motifs, then transposes, reverses, and inverts
those motifs to weave them into a new piece — playable right in the browser and
downloadable as a real MIDI file.

**[Live demo →](https://xcodevoid.github.io/Public-Tool/)**

## How it works

1. **Seed** — a bounded random walk through a chosen scale produces a 4-bar melody.
   Every note stays in key; the walk keeps it melodic rather than jumping randomly.
2. **Group** — the seed is chopped into motifs of 3–4 consecutive notes, labeled
   A, B, C…
3. **Arrange** — each motif is scheduled to appear twice across the new piece. The
   first appearance is always the motif in its original form; every later repeat is
   randomly **transposed** (shifted up/down in scale degrees), played in
   **retrograde** (backwards), or **inverted** (its melodic shape flipped upside
   down) — or left as-is. That mix of repetition and variation is a real technique
   composers use for thematic development, automated here.
4. **Play** — the result is synthesized live with the Web Audio API (no samples) and
   can be exported as a `.mid` file to open in any DAW.

## Features

- 🎲 **New seed** — regenerate the random source melody from scratch.
- 🔁 **Reshuffle** — keep the same motifs, generate a new arrangement/transformation
  of them (a different "piece" from the same raw material).
- 🎼 **5 scales** — Major, Natural Minor, Major/Minor Pentatonic, Dorian.
- 🎚️ **Tempo control** — 60–160 BPM.
- 🎨 **Color-coded piano roll** — see which notes came from which motif, and what
  transformation was applied to each repeat.
- ⬇️ **MIDI export** — a hand-written, dependency-free MIDI file writer.
- 🔒 **Local-first** — everything runs client-side. No accounts, no backend, no
  uploads.

## Running it locally

No build tools required — it's a static site.

```bash
git clone https://github.com/xcodevoid/public-tool.git
cd public-tool
python3 -m http.server 8000
# open http://localhost:8000
```

## Deployment

This repo deploys itself automatically via
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) — every push
to the main branch publishes the site to GitHub Pages. If Pages has never been enabled
for this repo before, the first workflow run configures it automatically (it needs
`pages: write` permission, which the workflow already requests). If a run ever fails
with a permissions error, check **Settings → Pages → Source** is set to
`GitHub Actions`.

## Making it your club's

Open `app.js` and edit the `CLUB_INFO` object at the top:

```js
const CLUB_INFO = {
  name: "Vibe Coding Club",
  meets: "Thursdays, 3:30pm — Room 214",
  joinUrl: "https://discord.gg/your-invite-here",
  repoUrl: "https://github.com/xcodevoid/public-tool",
};
```

That drives the "Come to a meeting" CTA, the footer, and the club blurb on the home
page.

## Project structure

```
index.html  — page structure: Home tab + the Compose tab
style.css   — design tokens, layout, light/dark theme, piano-roll UI
app.js      — shared UI: tabs, theme toggle, club info
music.js    — the generator: scales, random seed, motif grouping,
              transformations, arrangement, Web Audio playback, MIDI export
```

## Ideas for contributions

Good first issues for a club meeting:

- Add a chord accompaniment track generated from the same motifs.
- Add more transformations (augmentation/diminution — stretch or shrink durations).
- Let the user pick which instrument timbre to synthesize.
- Add a "lock this motif" toggle so reshuffling leaves a favorite motif untouched.
- Persist generated pieces to `localStorage` so you can revisit past favorites.
- Add swing/groove by nudging off-beat note timing slightly.

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, remix it for your own club.
