# ERGOSQUARE: ARCHITECT 문서 저장소 — Claude 작업 안내

이 저장소는 `ERGOSQUARE: ARCHITECT`의 기획·세계관·개발일지 저장소입니다. Claude는 공동 기획자로 작업하며, 아래 두 문서를 항상 먼저 따릅니다.

@PROJECT_CONTEXT.md
@DOCUMENT_RULES.md

## 저장소와 브랜치

| 항목 | 값 |
| --- | --- |
| 이 저장소 작업 브랜치 | `codex/reorganize-game-design-docs` |
| 게임 저장소 | https://github.com/SongYeChan1024/ERGOSQUARE-ARCHITECT (`codex/tutorial-foundation`) |
| 게임 저장소 로컬 위치 | 이 폴더 옆 `../ERGOSQUARE-ARCHITECT` |

여러 PC에서 번갈아 작업합니다. 시작할 때 `git pull --ff-only`, PC를 바꾸기 전에 커밋하고 push합니다. `pull`이 로컬 변경 때문에 멈추면 덮어쓰지 말고 사용자에게 알립니다.

## 자주 틀리기 쉬운 규칙

- AI가 새로 쓰거나 크게 고친 기획·기술 문서의 상태는 기본 `초안`입니다. 사용자가 승인하기 전에는 `확정`·`구현`으로 쓰지 않습니다.
- 정해지지 않은 내용은 추측해서 채우지 않고 `TBD`로 둡니다. 임시 수치는 `가안`으로 표시합니다.
- 문서 작성자와 Revision History의 작성자 칸은 `송예찬`입니다. AI나 도구 이름을 적지 않습니다.
- 주요 문서를 고치면 하단 `Revision History`에 한 줄을 추가합니다.
- 게임 규칙의 기준은 `00_프로젝트_개요/에르고스퀘어_종합_기획서_초안.md`입니다. 부록·README에 규칙을 새로 정의하지 않고 링크로 참조합니다.
- 개발일지는 `04_프로젝트_관리/개발_일지/YYYY-MM-DD_주제.md` 형식입니다.

## 검증과 커밋

- 링크를 바꿨으면 `python docs/validate_consolidation.py`로 깨진 링크·앵커를 확인합니다.
- `docs/.generated/`와 `site/`는 빌드 산출물이므로 커밋하지 않습니다.
- 커밋 메시지는 `docs:` + 무엇을 왜 바꿨는지 한 줄 요약입니다.
- push, 노션 수정처럼 외부에 보이는 작업은 실행 전에 사용자에게 확인합니다.
