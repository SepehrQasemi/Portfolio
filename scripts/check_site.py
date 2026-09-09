from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = ["index.html", "projects.html", "work.html", "projects/crm-platform.html", "README.md"]

class Links(HTMLParser):
    def __init__(self):
        super().__init__(); self.targets = []
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        for key in ("href", "src"):
            if key in values: self.targets.append(values[key])

errors=[]
for name in REQUIRED:
    if not (ROOT/name).is_file(): errors.append(f"Missing required file: {name}")
for page in ROOT.rglob("*.html"):
    parser=Links(); parser.feed(page.read_text(encoding="utf-8"))
    for raw in parser.targets:
        if not raw or raw.startswith(("#","http://","https://","mailto:","tel:","data:")): continue
        target=unquote(raw.split("#",1)[0].split("?",1)[0])
        resolved=(ROOT/target.lstrip("/")) if target.startswith("/") else (page.parent/target)
        if target and not resolved.resolve().exists(): errors.append(f"Broken local reference: {page.relative_to(ROOT)} -> {raw}")
for path in [*ROOT.rglob("*.html"), *ROOT.rglob("*.md")]:
    text=path.read_text(encoding="utf-8").lower()
    for marker in ("todo", "tbd", "fixme", "placeholder"):
        if marker in text: errors.append(f"Placeholder marker in {path.relative_to(ROOT)}: {marker}")
if errors:
    print(*errors, sep=chr(10)); raise SystemExit(1)
print("Static site validation passed")
