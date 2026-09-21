# MemeForge ⚡

A free, no-sign-up meme generator built by our school's **Vibe Coding Club**. Pick a
template (or upload your own image), drag text and stickers onto it, and download a
real PNG — all in your browser, in under a minute.

**[Live demo →](https://xcodevoid.github.io/Public-Tool/)**

## Features

- 🖼️ **Templates or your own image** — a terminal window, a chat bubble, an
  achievement badge, a club flyer, a gradient card, or upload any picture.
- ✋ **Drag-and-drop text & stickers** — add as many text boxes and emoji as you want,
  drag them into place, resize and recolor on the fly, switch fonts (Impact / mono /
  comic sans).
- ⬇️ **One-click PNG download** — exports straight to the device, ready to post.
- 🏷️ **Optional club watermark** — a small toggle stamps a subtle club tag onto
  anything exported, so shared memes point people back to the club.
- 🔁 **Local gallery** — everything you save stays in the browser so you can reopen
  and remix it later.
- 🔒 **Local-first** — everything runs in `localStorage`. No accounts, no backend, no
  uploads to anywhere but your own downloads folder.
- 🛠️ **Just HTML/CSS/JS + Canvas** — no build step, no dependencies. Easy to read,
  easy to extend at a club meeting.

## Running it locally

No build tools required — it's a static site.

```bash
git clone https://github.com/xcodevoid/public-tool.git
cd public-tool
python3 -m http.server 8000
# open http://localhost:8000
```

Or just open `index.html` directly in a browser.

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

That single block drives the "Come to a meeting" CTA, the footer, the club blurb on
the home page, the watermark text, and the pre-filled club flyer template.

## Project structure

```
index.html   — page structure & all tabs (Home, Create, My Memes)
style.css    — design tokens, layout, light/dark theme
app.js       — editor logic: canvas rendering, drag/drop, templates, gallery
```

Everything lives in three files on purpose — it's meant to be readable and forkable
by anyone in the club, including people brand new to web dev. The whole editor is
built on the HTML5 Canvas 2D API — no image libraries required.

## Ideas for contributions

Good first issues for a club meeting:

- Add more built-in templates (poll card, event countdown, "vote for us" banner).
- Add layer reordering (bring to front / send to back) and duplicate-layer.
- Add an undo/redo stack for the editor.
- Add a text outline color picker (currently auto black/white).
- Add keyboard shortcuts (Delete to remove selected layer, arrow keys to nudge it).
- Add a "share" button using the Web Share API on mobile.

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, remix it for your own club.
