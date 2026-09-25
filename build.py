#!/usr/bin/env python3
"""Bundle the site into one self-contained index.html.

Inlines src/style.css, data/catalog.js, every study guide in content/, and src/app.js
into src/index.html. The result works from a web server, GitHub Pages, or a
double-clicked local file, with no other files needed.

Usage:  python3 build.py
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "src"


def script(code: str, name: str) -> str:
    # A literal "</script" inside inlined JS would end the tag early.
    code = code.replace("</script", "<\\/script")
    return f"<script>/* {name} */\n{code}\n</script>"


def build() -> str:
    html = (SRC / "index.html").read_text(encoding="utf-8")

    def inline_css(m):
        return f"<style>\n{(SRC / m.group(1)).read_text(encoding='utf-8')}\n</style>"

    def inline_js(m):
        path = (SRC / m.group(1)).resolve()
        return script(path.read_text(encoding="utf-8"), path.relative_to(ROOT).as_posix())

    def inline_content(m):
        folder = (SRC / m.group(1)).resolve()
        return "\n".join(
            script(f.read_text(encoding="utf-8"), f.relative_to(ROOT).as_posix())
            for f in sorted(folder.glob("*.js"))
        )

    html = re.sub(r"<!-- @inline-css (\S+) -->", inline_css, html)
    html = re.sub(r"<!-- @inline-content (\S+) -->", inline_content, html)
    html = re.sub(r"<!-- @inline-js (\S+) -->", inline_js, html)
    if "@inline-" in html:
        raise SystemExit("build.py: unresolved @inline marker")
    return html


if __name__ == "__main__":
    out = ROOT / "index.html"
    out.write_text(build(), encoding="utf-8")
    print(f"Wrote {out.relative_to(ROOT)} ({out.stat().st_size / 1024:.0f} KB)")
