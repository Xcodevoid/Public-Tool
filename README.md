# AP Prep Hub 📘

A free study site for **every AP exam**, built by our school's **Vibe Coding Club**.
Each course is broken into its official units, and each unit comes with a plain-English
summary, flashcards, practice questions that explain every answer, and free-response
practice with a scoring guide.

**[Live demo →](https://xcodevoid.github.io/Crack-AP/)**

## Features

- 🗂️ **All 42 AP courses (2026-27)**: exam format and weighting, what's changing for May 2027,
  and links to each official Course and Exam Description (CED). Courses are color-coded by subject.
- 🔎 **Instant search**: press `/` or `Ctrl K` to jump to any course, unit or key term.
- 💡 **Plain English first**: every concept opens with a simple explanation. Students can
  open "Go deeper" for exam-level detail, plus worked examples and memory hooks.
- 🃏 **Flashcards**: flip through key terms (Space to flip, arrow keys to move), mark the
  ones you know, shuffle, or drill only the cards you still don't know.
- ✅ **Practice questions**: instant feedback with an explanation for every question. Answer
  choices are shuffled on each attempt, so students learn the content instead of letter positions.
- ✍️ **Free-response practice**: write an answer, then self-score it against a point-by-point
  scoring guide. Answers are saved automatically.
- ⏱️ **Mixed quizzes**: shuffle questions across chosen units, with an optional timer set to
  the real exam's multiple-choice pace.
- 📈 **Progress dashboard**: study streak, accuracy, flashcards known, per-course mastery, and a
  "Study next" list of your weakest units.
- 🔁 **My mistakes**: every missed question goes into a review list until you answer it correctly.
- ▶️ **Continue where you left off** from the home page, plus a "My courses" shelf.
- 🌙 Light/dark theme, mobile-friendly, keyboard shortcuts, accessible focus states.
- 🔒 **Local-first**: no accounts, no backend, no tracking. Progress is saved in `localStorage`.
- 📄 **One file**: the whole site builds into a single self-contained `index.html` that works
  on any web host, or opened straight from your computer.

Full study guides are ready for **9 courses**: AP Calculus AB, AP Calculus BC, AP Physics 1,
AP Chemistry, AP Biology, AP Microeconomics, AP Psychology, AP U.S. History and AP English
Language (62 units, 256 practice questions, 62 free-response prompts). Every other course has
its exam overview, its unit list where known, and official links. Its study guide is waiting
for a contributor (see below).

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
index.html            GENERATED: the whole site in one file (don't edit by hand)
build.py              inlines the files below into index.html
src/index.html        page template (header, footer, @inline markers)
src/style.css         design system: tokens, light/dark theme, components, responsive rules
src/app.js            router + views: home, course, unit tabs, quiz, review, dashboard, search
data/catalog.js       all 42 courses: exam format, weights, units, 2026-27 changes, CED links
content/<id>.js       full study guide for one course
research/             notes from researching the official College Board CEDs
```

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

3. Set `guide: true` on that course in `data/catalog.js`.
   - A guide can build on another one: `content/calculus-bc.js` uses `extends: "calculus-ab"`
     to reuse AB's units, with BC exam `weights`, BC-only `patches` per unit, and extra `units`.
   - Units that aren't weighted by topic (like English Language's skills) can use
     `weightLabel` instead of `weight`.
4. Run `python3 build.py` and open `index.html` to check your guide.
5. Check facts against the official CED. Write **original** questions. Don't copy College
   Board's released exam questions.

## Disclaimer

Not affiliated with or endorsed by College Board. AP® is a trademark registered by College Board.
Course details come from the public 2026-27 course and exam descriptions. Always check the
official CED for the final word.

## License

MIT. See [LICENSE](LICENSE). Use it, fork it, remix it for your own club.
