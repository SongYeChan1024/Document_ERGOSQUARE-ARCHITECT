# ERGOSQUARE: ARCHITECT — Document Repository

> 공간에 삼켜진 자, 공간의 설계자로 각성하다.

개인 게임 기획 프로젝트 `ERGOSQUARE: ARCHITECT`의 기획, 개발 전달, 작업 기록, QA와 포트폴리오 산출물을 관리하는 문서 저장소입니다.

이 저장소는 문서를 모아두는 자료실이 아니라, **현재 기준 문서가 무엇인지 명확하게 유지하는 SSOT 저장소**를 목표로 합니다.

## 프로젝트 개요

| 항목 | 내용 |
| --- | --- |
| 프로젝트명 | ERGOSQUARE: ARCHITECT |
| 한글명 | 에르고스퀘어: 설계자 |
| 원안명 | 지구-164991: 청사진 각성자 |
| 형태 | 개인 기획 프로젝트 |
| 현재 단계 | 콘셉트 정리 / 프리프로덕션 |
| 장르 | 3~4인 협동 PvE, 전략 배치, 실시간 액션 |
| 엔진 | Unity / URP |
| 네트워크 | Photon PUN2 검토 |
| 기획자 | 송예찬 |

## 핵심 콘셉트

플레이어는 인벤토리를 전투 청사진으로 설계하고, 인벤토리 게이트를 통해 자신의 `에르고스퀘어`를 전장에 전개합니다. 전개된 코어와 모듈은 자원·무기·스킬을 제공하지만 침식체에게 공격받는 약점이 됩니다.

> 인벤토리는 가방이 아니다. 그것은 설계자의 전투 청사진이다.

> 힘을 얻기 위해 약점을 드러내라. 그리고 팀과 함께 그 약점을 지켜라.

## 저장소 구조

```text
Document_ERGOSQUARE-ARCHITECT/
├─ ErgoSquare_Document/
│  ├─ 01_SSOT_최종_기준문서/
│  ├─ 02_개발_전달용/
│  │  └─ P0_기획_명세서/
│  ├─ 03_기획_부록_참고문서/
│  │  ├─ 컨셉_기획서/
│  │  └─ 아이디어_백로그/
│  ├─ 04_UI_이미지_레퍼런스/
│  ├─ 05_개인_개발일지/
│  ├─ 06_이미지_작업물/
│  ├─ 07_기획서_이미지_자료/
│  ├─ 08_발표_포트폴리오/
│  ├─ 09_QA_테스트/
│  ├─ 90_Archive_구버전/
│  └─ 99_Trash_삭제후보/
├─ Templates/
├─ web/
├─ docs/
├─ PROJECT_CONTEXT.md
├─ DOCUMENT_RULES.md
├─ SPEC_WRITING_GUIDE.md
└─ WORKFLOW_GUIDE.md
```

## 문서 신뢰 순서

1. [`01_SSOT_최종_기준문서`](./ErgoSquare_Document/01_SSOT_최종_기준문서/)
2. [`02_개발_전달용`](./ErgoSquare_Document/02_개발_전달용/)
3. [`03_기획_부록_참고문서`](./ErgoSquare_Document/03_기획_부록_참고문서/)
4. [`90_Archive_구버전`](./ErgoSquare_Document/90_Archive_구버전/)

`docs/`의 공개 웹 문서는 프로젝트 소개를 위한 요약 결과물이며 SSOT가 아닙니다.

## 현재 기준 문서

| 문서 | 상태 | 설명 |
| --- | --- | --- |
| [프로젝트 개요](./ErgoSquare_Document/01_SSOT_최종_기준문서/프로젝트_개요.md) | 초안 | 프로젝트의 목표 경험과 포지셔닝 |
| [세계관 및 용어 기준](./ErgoSquare_Document/01_SSOT_최종_기준문서/세계관_및_용어_기준.md) | 초안 | 게이트부터 설계자까지의 용어 체계 |
| [에르고스퀘어 핵심 시스템](./ErgoSquare_Document/01_SSOT_최종_기준문서/에르고스퀘어_핵심_시스템.md) | 초안 | 편성·전개·설치·파괴·성장 구조 |
| [MVP 범위 및 로드맵](./ErgoSquare_Document/02_개발_전달용/MVP_범위_및_로드맵.md) | 초안 | 검증 질문, 필수 범위와 기술 후보 |
| [P0 문서 백로그](./ErgoSquare_Document/02_개발_전달용/P0_기획_명세서/문서_백로그.md) | 초안 | 다음에 작성할 구현 단위 명세 목록 |
| [프로젝트 명칭 기획서](./ErgoSquare_Document/03_기획_부록_참고문서/컨셉_기획서/프로젝트_명칭_기획서.md) | 초안 | `ERGOSQUARE: ARCHITECT` 명칭의 논리 |

## AI와 작업 시작하기

Antigravity에서 이 저장소를 연 뒤 다음처럼 시작합니다.

```text
@PROJECT_CONTEXT.md와 @DOCUMENT_RULES.md를 읽고
ERGOSQUARE: ARCHITECT 문서 저장소의 Co-PM으로 작업을 시작해.
SSOT 문서를 우선하고 미확정 내용은 임의로 확정하지 마.
```

새 명세서를 만들 때:

```text
@Templates/TEMPLATE_기획_명세서.md 양식으로
에르고스퀘어 전개·회수 시스템 명세서를 작성해줘.
ErgoSquare_Document/02_개발_전달용/P0_기획_명세서/에 저장하고
미확정 항목에는 TBD를 표시해.
```

## 공개 웹 문서

- 소스: [`docs/`](./docs/)
- 예정 주소: `https://songyechan1024.github.io/Document_ERGOSQUARE-ARCHITECT/`
- 게시 설정: GitHub Pages에서 `main /docs` 선택

로컬 미리보기:

```powershell
python -m http.server 8000 --directory docs
```

## 문서 작성 규칙

- AI가 작성한 신규 문서는 `[!IMPORTANT]` 초안 배너를 유지합니다.
- 기획자가 직접 검토해 배너를 제거한 문서만 확정 사양입니다.
- 구현 증거가 없는 기능을 `구현 완료`로 표기하지 않습니다.
- 메이저 변경 전 기존 확정본을 `90_Archive_구버전/`에 보관합니다.
- 세부 규칙은 [`DOCUMENT_RULES.md`](./DOCUMENT_RULES.md)를 따릅니다.

## 출처

초기 내용은 노션의 `지구-164991: 청사진 각성자 메인 기획서 v0.4`를 기준으로 구성했습니다. `ERGOSQUARE: ARCHITECT` 명칭 체계는 2026년 7월 리브랜딩 논의를 반영한 작업 정의입니다.

## 라이선스

기획 내용과 고유 설정의 저작권은 작성자에게 있습니다. 별도 허가 없이 상업적으로 재사용할 수 없습니다.
