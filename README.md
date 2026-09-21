# Blockworld ⚡

A free, playable 3D block world built by our school's **Vibe Coding Club** — a
Minecraft-inspired voxel island you explore in first person, right in the browser.
Procedurally generated terrain, break and place blocks, no install, no login.

**[Live demo →](https://xcodevoid.github.io/Public-Tool/)**

## Features

- 🗺️ **Procedural terrain** — a 64×64 island generated with layered Perlin noise
  (hills, beaches, a water line, sparse trees). Refresh for a new one.
- 🧱 **Break & place blocks** — 7 block types on a hotbar (grass, dirt, stone, sand,
  wood, leaves, snow). Left-click breaks, right-click places.
- 🕹️ **First-person controls** — pointer-lock mouse look, WASD movement, jump,
  sprint — the standard block-game control scheme.
- ⚙️ **A real voxel engine** — a hand-rolled greedy-ish face-culling mesher (only
  exposed faces are rendered) built on [Three.js](https://threejs.org/), flat-shaded,
  no textures or external assets.
- 🚫 **No backend, no build step** — everything runs client-side; Three.js is
  vendored directly in the repo so the site has zero external dependencies at runtime.

## Controls

| Key | Action |
|---|---|
| `W A S D` | Move |
| Mouse | Look around |
| `Space` | Jump |
| `Shift` | Sprint |
| Left click | Break block |
| Right click | Place block |
| `1`–`7` | Choose block from hotbar |
| `Esc` | Release the mouse |

Best experienced on a laptop/desktop with a mouse — it's a first-person pointer-lock
experience, which touch devices can't drive.

## Running it locally

This site uses ES modules (`<script type="module">`), which browsers block from
loading over `file://` — you need to serve it, not just open the HTML file:

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
index.html               — page structure: Home tab + the Explore/game tab
style.css                — design tokens, layout, light/dark theme, game overlay UI
app.js                    — shared UI: tabs, theme toggle, club info
world.js                  — the voxel engine (ES module): noise, terrain generation,
                            meshing, camera/controls, physics, block break/place
vendor/three.module.min.js — Three.js (MIT), vendored so there's no CDN dependency
```

`world.js` lazily initializes the first time you open the Explore tab, and pauses its
render loop (and releases the pointer lock) when you navigate away.

## Ideas for contributions

Good first issues for a club meeting:

- Add more block types (glass, water reflections, ore veins underground).
- Add a minimap or a compass overlay.
- Add simple caves (3D noise carving into the terrain instead of a pure heightmap).
- Add a day/night cycle by animating the directional light and fog color.
- Add touch controls (on-screen joystick + drag-to-look) for mobile.
- Persist the world to `localStorage` so edits survive a refresh.

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, remix it for your own club.
Three.js itself is © the Three.js authors, also MIT-licensed.
