# 문서 웹 뷰어 빌드

이 폴더는 MkDocs 웹 뷰어의 스타일 자산과 기존 소개 페이지를 보관합니다. 기획의 기준 원본은 저장소의 번호 폴더에 있는 Markdown이며, 웹 빌드를 위해 복사본을 만들지 않습니다.

## 빠른 실행

```powershell
python -m pip install -r requirements-docs.txt
python docs/prepare_mkdocs.py
mkdocs serve
```

로컬 주소 `http://127.0.0.1:8000`에서 검색, 상단 탭, 좌측 문서 탐색과 Mermaid 다이어그램을 확인할 수 있습니다.

## 정적 빌드

MkDocs가 설정 파일의 상위 폴더를 원본 폴더로 허용하지 않으므로 준비 스크립트가 번호 폴더의 기준 Markdown을 `docs/.generated/`에 임시 복사합니다. 이 폴더와 빌드 출력은 Git에서 제외됩니다.

```powershell
python docs/prepare_mkdocs.py
mkdocs build --strict
```

## GitHub Pages

- `main` 브랜치의 Markdown 또는 MkDocs 설정이 변경되면 `.github/workflows/docs-pages.yml`이 실행됩니다.
- 워크플로는 정적 사이트를 임시 폴더에 빌드하고 GitHub Pages artifact로 배포합니다.
- 저장소의 **Settings → Pages → Build and deployment → Source**를 `GitHub Actions`로 한 번 설정해야 합니다.
- 기존 `docs/index.html` 소개 페이지는 보존하지만 MkDocs 빌드에서는 제외합니다.

## 구성 파일

| 파일 | 역할 |
| --- | --- |
| `mkdocs.yml` | 내비게이션, 검색, Mermaid와 테마 설정 |
| `requirements-docs.txt` | 문서 빌드 의존성 |
| `docs/prepare_mkdocs.py` | 기준 Markdown을 비추적 빌드 소스로 준비 |
| `docs/mkdocs/stylesheets/extra.css` | 프로젝트 전용 시각 스타일 |
| `.github/workflows/docs-pages.yml` | 자동 빌드·배포 |
