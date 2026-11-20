"""Build the portfolio pages from the original Framer export.

    python tools/build.py

Reads   framer-source/*.html        (untouched Framer export — do not edit)
        assets/portfolio-content.js (all text / image / colour changes)
Writes  index.html, about.html, services.html, contact.html

Uses only the Python standard library.
"""
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "framer-source"
PAGES = ["index.html", "about.html", "services.html", "contact.html"]
RUNTIME_TAGS = (
    '<script src="assets/portfolio-content.js"></script>'
    '<script src="assets/portfolio-runtime.js"></script>'
)


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def load_content():
    js = (ROOT / "assets" / "portfolio-content.js").read_text(encoding="utf-8")
    body = js[js.index("{", js.index("PORTFOLIO_CONTENT")): js.rindex("}") + 1]
    content = json.loads(body)
    text = {norm(k): v for k, v in content["text"].items()}
    # A replacement must never itself be a key, or two rules would fight.
    loops = [k for k, v in text.items() if norm(v) in text and norm(v) != k]
    if loops:
        raise SystemExit(f"These replacements are also keys (would loop): {loops}")
    content["text"] = text
    return content


def recolor(s, colors):
    def hx(m):
        h = m.group(1).lower()
        return "#" + colors[h] if h in colors else m.group(0)

    s = re.sub(r"#([0-9a-fA-F]{6})(?=[0-9a-fA-F]{2}\b|\b)", hx, s)
    rgb = {
        tuple(int(k[i:i + 2], 16) for i in (0, 2, 4)): tuple(int(v[i:i + 2], 16) for i in (0, 2, 4))
        for k, v in colors.items()
    }

    def rg(m):
        t = (int(m.group(2)), int(m.group(4)), int(m.group(6)))
        if t not in rgb:
            return m.group(0)
        r, g, b = rgb[t]
        return f"{m.group(1)}{r}{m.group(3)}{g}{m.group(5)}{b}"

    return re.sub(r"(rgba?\(\s*)(\d+)(\s*,\s*)(\d+)(\s*,\s*)(\d+)", rg, s)


def set_alts(s, alts):
    def tag(m):
        t = m.group(0)
        for img_id, alt in alts.items():
            if img_id in t:
                return re.sub(r'\balt(="[^"]*")?(?=[\s>/])', 'alt="' + html.escape(alt) + '"', t, count=1)
        return t

    return re.sub(r"<img\b[^>]*>", tag, s)


def replace_images(s, images):
    ids = "|".join(map(re.escape, images))
    pat = re.compile(r"https://framerusercontent\.com/images/(" + ids + r")\.[a-z]+(?:\?[^\"')\s,]*)?")
    return pat.sub(lambda m: images[m.group(1)], s)


def replace_text(s, text):
    # Only touch text between tags, never inside <script>/<style>.
    parts = re.split(r"(<script\b.*?</script>|<style\b.*?</style>)", s, flags=re.S)

    def tx(m):
        raw = m.group(1)
        key = norm(html.unescape(raw))
        if not key or key not in text:
            return m.group(0)
        lead = raw[: len(raw) - len(raw.lstrip())]
        trail = raw[len(raw.rstrip()):]
        return ">" + lead + html.escape(text[key], quote=False) + trail + "<"

    for i in range(0, len(parts), 2):
        parts[i] = re.sub(r">([^<>]+)<", tx, parts[i])
    return "".join(parts)


def replace_scoped(s, scoped):
    """Text inside one element only, e.g. {"within": ".framer-8mnrm6", "text": "..."}."""
    for item in scoped:
        cls = item["within"].lstrip(".")
        pat = re.compile(r'(class="' + re.escape(cls) + r'"[^>]*>(?:\s*<p\b[^>]*>)?)[^<]*(<)')
        s = pat.sub(lambda m: m.group(1) + html.escape(item["text"], quote=False) + m.group(2), s)
    return s


def replace_meta(s, page):
    title = html.escape(page["title"])
    desc = html.escape(page["description"])
    s = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", s, count=1, flags=re.S)
    for attr, val in [
        ('name="description"', desc),
        ('property="og:title"', title),
        ('property="og:description"', desc),
        ('name="twitter:title"', title),
        ('name="twitter:description"', desc),
    ]:
        s = re.sub(r'(<meta ' + attr + r' content=")[^"]*(")', lambda m: m.group(1) + val + m.group(2), s)
    return s


def main():
    content = load_content()
    for name in PAGES:
        s = (SRC / name).read_text(encoding="utf-8")
        s = recolor(s, content["colors"])
        s = set_alts(s, content.get("alts", {}))
        s = replace_images(s, content["images"])
        s = replace_scoped(s, content.get("scopedText", []))
        s = replace_text(s, content["text"])
        s = replace_meta(s, content["pages"][name])
        s = s.replace("</head>", '<link rel="stylesheet" href="assets/portfolio-overrides.css"></head>', 1)
        s = s.replace("</body>", RUNTIME_TAGS + "</body>", 1)
        (ROOT / name).write_text(s, encoding="utf-8", newline="")
        left = len(re.findall(r"(?i)joanne", re.sub(r'data-framer-name="[^"]*"', "", s)))
        print(f"built {name}  (remaining 'Joanne' mentions: {left})")


if __name__ == "__main__":
    main()
