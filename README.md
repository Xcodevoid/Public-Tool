# AP Prep Hub 📘

**Stop rereading. Find what you actually don't know.**

A free, adaptive AP learning system built by our school's **Vibe Coding Club**. Instead of an AP
textbook on a website, it works like a personal coach: it diagnoses which concepts you're weak at,
explains *why* you're getting them wrong, drills exactly those concepts, and brings each one back
right before you'd forget it.

**[Live demo →](https://xcodevoid.github.io/Crack-AP/)**

## The learning loop

```
5-minute diagnostic → weak concepts pinpointed → question → answer → why you picked it
      ↑                                                            │
      │                                           wrong? → "Weak concept detected"
      │                                                  → 30-second refresher
      │                                                  → 3 targeted questions
      │                                                  → "Recovered" or "Still shaky"
      └──────── spaced review after 1, 3, 7, 14, 30 days ◄────────┘
```

## Features

- 🩺 **5-minute diagnostic**: 12 questions across every unit, and a report of your strong and weak *concepts*
  (not just units), with an explanation for everything you missed.
- 🎯 **Concept-level mastery**: every question is tagged to a concept. Each concept has a mastery score
  and a status: Not started, Needs practice, Getting there, or Strong.
- 🧠 **Mistakes that teach**: every wrong answer shows your answer, the correct one, *why your choice was
  tempting* (768 hand-written misconception notes), the concept, and "Practice 5 similar."
- ⚡ **Smart practice**: due reviews first, then your weakest concepts, then new ones. Miss a question and
  it detects the weak concept, gives a refresher, and drills it on the spot.
- 🗓️ **Spaced review**: concepts you get right come back after 1 → 3 → 7 → 14 → 30 days. Misses come
  back in the next session.
- 🃏 **Unlimited targeted questions**: besides 256 written questions, every flashcard term becomes a
  generated question tied to its concept, so each concept always has enough to practice.
- 📈 **Dashboard that means something**: weakest concepts, mistakes this week, concepts due today,
  mastery for every concept in every unit, and one recommended next step.
- 📖 **Study guides**: plain-English concepts with exam-level detail, flashcards, free-response
  practice with scoring guides, common mistakes, and exam strategy for 9 courses.
- 🗂️ **All 42 AP courses (2026-27)**: exam formats, 2027 changes, and official CED links.
- 🔎 Search (`/` or `Ctrl K`), timed mixed quizzes, dark mode, mobile layout, keyboard shortcuts.
- 🔒 **Local-first**: no accounts and no tracking. Progress lives in `localStorage`, with backup/restore
  as a JSON file.
- 📄 **One file**: the whole site builds into a single self-contained `index.html`.

Adaptive courses: AP Calculus AB, Calculus BC, Physics 1, Chemistry, Biology, Microeconomics,
Psychology, U.S. History, English Language.

## Running it locally

No dependencies. Just Python 3 to build.

```bash
git clone https://github.com/Xcodevoid/Crack-AP.git
cd Crack-AP
python3 build.py          # bundles everything into index.html
open index.html           # or double-click it; no server needed
```

**After editing anything in `src/`, `data/` or `content/`, run `python3 build.py` again.**
The deploy workflow also runs it automatically before publishing.

## Project structure

```
index.html                   GENERATED: the whole site in one file (don't edit by hand)
build.py                     inlines everything below into index.html
src/index.html               page template (header, footer, @inline markers)
src/style.css                design system: tokens, light/dark theme, components
src/engine.js                the learning engine: concept mastery, spaced review, diagnostic,
                             smart-practice selection, flashcard-generated questions, analytics
src/app.js                   views: home, course, unit tabs, session runner (the learning loop),
                             diagnostic report, mistakes, dashboard, search
data/catalog.js              all 42 courses: exam format, weights, units, 2026-27 changes, CED links
content/<id>.js              study guide for one course (concepts, terms, questions, FRQs)
content/diagnostics/<id>.js  concept tag + wrong-answer notes for every question in that guide
research/                    notes from researching the official College Board CEDs
```

### The data model

Progress is stored per browser, shaped so it can later sync to a backend with accounts:

```
learner
 ├── cs[course|unit|concept]   mastery 0–1, attempts, streak, next review date
 ├── q[course|unit|question]   latest result + the choice picked
 ├── hist[]                    every answer with a timestamp
 ├── diag[course]              last diagnostic score
 └── known, frq, mine, days    flashcards, free responses, my courses, study streak
```

Mastery update (rules-based): a first answer sets mastery to 60% if right or 15% if wrong. After that,
a right answer closes 35% of the gap to 100%, and a wrong answer halves mastery.

## Adding a study guide (great club project!)

1. Pick a course in `data/catalog.js` and note its `id` (e.g. `"chemistry"`).
2. Create `content/<id>.js`, copying the shape of `content/biology.js`. `build.py` picks it up automatically:

```js
window.AP_CONTENT = window.AP_CONTENT || {};
window.AP_CONTENT["chemistry"] = {
  tips: ["Exam strategy tip…"],
  units: [
    {
      title: "Atomic Structure and Properties",
      weight: "7–9%",                        // from the official CED
      tldr: "One- or two-sentence big idea.",
      concepts: [
        { title: "…", simple: "Plain-English explanation", detail: "Exam-level detail",
          example: "optional worked example", hook: "optional memory trick" },
      ],
      terms: [["Term", "Definition"]],
      mistakes: ["A common mistake students make"],
      questions: [
        { q: "Question text", choices: ["A", "B", "C", "D"], answer: 2,   // index of correct choice
          explain: "Why the answer is right (and why the trap answer is wrong)" },
      ],
      frq: { prompt: "Free-response prompt (\\n for new lines)", points: ["Scoring point 1", "…"] },
    },
  ],
};
```

3. Create `content/diagnostics/<id>.js`, tagging every question with its concept index and adding a
   "why a student might pick this" note for each wrong choice (see `content/diagnostics/biology.js`).
4. Set `guide: true` on that course in `data/catalog.js`.
   - A guide can build on another one: `content/calculus-bc.js` uses `extends: "calculus-ab"`
     to reuse AB's units, with BC exam `weights`, BC-only `patches` per unit, and extra `units`.
   - Units that aren't weighted by topic (like English Language's skills) can use
     `weightLabel` instead of `weight`.
5. Run `python3 build.py` and open `index.html` to check your guide.
6. Check facts against the official CED. Write **original** questions. Don't copy College
   Board's released exam questions.

## Disclaimer

Not affiliated with or endorsed by College Board. AP® is a trademark registered by College Board.
Course details come from the public 2026-27 course and exam descriptions. Always check the
official CED for the final word.

## License

MIT. See [LICENSE](LICENSE). Use it, fork it, remix it for your own club.
