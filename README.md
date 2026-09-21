# StudyVibe ⚡

A free, no-sign-up flashcard app built by our school's **Vibe Coding Club**. It uses
spaced repetition to schedule reviews, so studying stays focused on the cards you're
about to forget instead of the ones you already know.

**[Live demo →](#)** _(fill in once deployed — see below)_

## Features

- 🧠 **Spaced repetition** — a lightweight SM-2-style scheduler adjusts each card's
  review interval based on how well you know it (Again / Hard / Good / Easy).
- 📤 **Share decks as files** — export any deck to JSON and send it to a classmate;
  they import it and start studying immediately.
- 🔥 **Streaks & stats** — daily streak, cards reviewed, and a 14-day activity heatmap.
- ⏱️ **Built-in focus timer** — a simple Pomodoro timer for study sessions.
- 🔒 **Local-first** — everything is stored in the browser's `localStorage`. No
  accounts, no backend, no tracking.
- 🛠️ **Just HTML/CSS/JS** — no build step, no dependencies. Easy to read, easy to
  contribute to at a club meeting.

## Running it locally

No build tools required — it's a static site.

```bash
git clone https://github.com/xcodevoid/public-tool.git
cd public-tool
python3 -m http.server 8000
# open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Deploying it for free (GitHub Pages)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, pick your
   default branch and `/ (root)`, then save.
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/` within a
   minute or two.

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

That single block drives the "Come to a meeting" CTA, the footer, and the club blurb
on the home page.

## Project structure

```
index.html   — page structure & all tabs (Home, Study, Decks, Timer, Stats)
style.css    — design tokens, layout, light/dark theme
app.js       — app logic: scheduling, storage, rendering, timer
```

Everything lives in three files on purpose — it's meant to be readable and forkable
by anyone in the club, including people brand new to web dev.

## Ideas for contributions

Good first issues for a club meeting:

- Add a "shuffle vs. sequential" study mode toggle.
- Add tags/categories to decks and filter by them.
- Add a keyboard shortcut cheat-sheet overlay.
- Swap the scheduler for full SM-2 (this one is intentionally simplified).
- Add CSV import (many teachers export vocab lists as CSV/Quizlet exports).
- Add an "export all decks" / "import all data" backup feature.

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, remix it for your own club.
