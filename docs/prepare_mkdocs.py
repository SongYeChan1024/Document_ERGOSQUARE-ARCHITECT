"""Create an untracked MkDocs source tree from the canonical repository docs."""

from __future__ import annotations

from pathlib import Path
import shutil


REPOSITORY_ROOT = Path(__file__).resolve().parent.parent
GENERATED_ROOT = REPOSITORY_ROOT / "docs" / ".generated"
TOP_LEVEL_DOC_DIRECTORIES = (
    "00_프로젝트_개요",
    "01_게임_기획",
    "02_세계관_및_콘텐츠",
    "03_기술_문서",
    "04_프로젝트_관리",
    "05_QA",
    "06_포트폴리오",
    "07_에셋",
    "90_Archive",
)


def copy_directory(name: str) -> None:
    source = REPOSITORY_ROOT / name
    if source.exists():
        shutil.copytree(source, GENERATED_ROOT / name)


def main() -> None:
    expected_parent = REPOSITORY_ROOT / "docs"
    if GENERATED_ROOT.parent != expected_parent or GENERATED_ROOT.name != ".generated":
        raise RuntimeError("Refusing to replace an unexpected generated-docs path.")

    if GENERATED_ROOT.exists():
        shutil.rmtree(GENERATED_ROOT)
    GENERATED_ROOT.mkdir(parents=True)

    shutil.copy2(REPOSITORY_ROOT / "README.md", GENERATED_ROOT / "index.md")
    shutil.copy2(REPOSITORY_ROOT / "DOCUMENT_RULES.md", GENERATED_ROOT / "DOCUMENT_RULES.md")
    shutil.copy2(REPOSITORY_ROOT / "PROJECT_CONTEXT.md", GENERATED_ROOT / "PROJECT_CONTEXT.md")

    for directory in TOP_LEVEL_DOC_DIRECTORIES:
        copy_directory(directory)

    # Canonical folder indexes link to ../README.md for GitHub. The generated
    # MkDocs home is index.md, so only top-level index copies need this alias rewrite.
    for directory in TOP_LEVEL_DOC_DIRECTORIES:
        generated_index = GENERATED_ROOT / directory / "README.md"
        if generated_index.exists():
            content = generated_index.read_text(encoding="utf-8")
            generated_index.write_text(
                content.replace("(../README.md)", "(../index.md)"),
                encoding="utf-8",
            )

    build_guide_target = GENERATED_ROOT / "docs"
    build_guide_target.mkdir()
    shutil.copy2(REPOSITORY_ROOT / "docs" / "README.md", build_guide_target / "README.md")

    style_target = GENERATED_ROOT / "assets" / "stylesheets"
    style_target.mkdir(parents=True)
    shutil.copy2(
        REPOSITORY_ROOT / "docs" / "mkdocs" / "stylesheets" / "extra.css",
        style_target / "extra.css",
    )

    print(f"Prepared MkDocs source: {GENERATED_ROOT}")


if __name__ == "__main__":
    main()
