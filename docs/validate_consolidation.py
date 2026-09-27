"""Check local Markdown targets and rendered anchors for the consolidated docs."""
from pathlib import Path
import re
from urllib.parse import unquote
import markdown

ROOT = Path(__file__).resolve().parent.parent
errors = []
cache = {}
files = [ROOT/'README.md', ROOT/'DOCUMENT_RULES.md', ROOT/'PROJECT_CONTEXT.md']
files += [p for folder in ROOT.iterdir() if folder.is_dir() and re.match(r'0[0-7]_', folder.name) for p in folder.rglob('*.md')]
for file in files:
    text = file.read_text(encoding='utf-8-sig')
    text = re.sub(r'(?ms)^(`{3,}|~{3,})[^\n]*\n.*?^\1\s*$', '', text)
    for url in re.findall(r'!?\[[^\]\n]*\]\(([^\s)]+)\)', text):
        if re.match(r'^[a-zA-Z][a-zA-Z0-9+.-]*:', url):
            continue
        path, _, fragment = unquote(url).partition('#')
        target = (file.parent/path).resolve() if path else file
        if not target.exists():
            errors.append(f'{file.relative_to(ROOT)}: missing {url}')
            continue
        if fragment and target.suffix == '.md':
            if target not in cache:
                html = markdown.markdown(target.read_text(encoding='utf-8-sig'), extensions=['toc','tables','fenced_code','attr_list'])
                cache[target] = set(re.findall(r'\bid=["\']([^"\']+)', html))
            if fragment not in cache[target]:
                errors.append(f'{file.relative_to(ROOT)}: missing anchor {url}')
print(f'Checked {len(files)} current Markdown documents; {len(errors)} issues.')
for error in errors:
    print(error)
raise SystemExit(bool(errors))
