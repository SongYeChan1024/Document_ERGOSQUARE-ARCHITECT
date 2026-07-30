# ERGOSQUARE: ARCHITECT

> 공간에 삼켜진 자, 공간의 설계자로 각성하다.

`ERGOSQUARE: ARCHITECT`는 근미래 평행 지구를 배경으로 한 3~4인 협동 PvE 전투 게임 기획 프로젝트입니다.  
플레이어는 인벤토리를 전투 청사진으로 설계하고, 전장에 자신의 아공간을 전개해 자원·무기·스킬을 출력합니다. 강해지기 위해 힘의 근원을 드러내고, 팀과 함께 서로의 약점을 지키는 것이 핵심입니다.

## 프로젝트 상태

| 항목 | 내용 |
| --- | --- |
| 개발 형태 | 개인 기획 프로젝트 |
| 현재 단계 | 콘셉트 정리 / 프리프로덕션 |
| 장르 | 3~4인 협동 PvE, 전략 배치, 실시간 액션 |
| 플랫폼 | PC (Windows) 우선 검토 |
| 엔진 | Unity / URP |
| 네트워크 | Photon PUN2 검토 |
| 원안 명칭 | 지구-164991: 청사진 각성자 |
| 기획자 | 송예찬 |

## 핵심 문장

> 인벤토리는 가방이 아니다. 그것은 설계자의 전투 청사진이다.

> 힘을 얻기 위해 약점을 드러내라. 그리고 팀과 함께 그 약점을 지켜라.

## 핵심 용어

- **에르고스피어(Ergosphere)**: 게이트 발생과 함께 형성되는 통제 불가능한 차원 왜곡 영역
- **인벤토리 게이트(Inventory Gate)**: 각성자가 개인 아공간에 접근하고 전장에 투영하는 통로
- **에르고스퀘어(ErgoSquare)**: 설계자가 격자 좌표로 구축하고 재구성하는 개인 아공간
- **설계자(Architect)**: 에르고스퀘어를 구축하고 전투 청사진으로 운용할 수 있는 특수 각성자
- **침식체(Eroded)**: 균열 너머에서 넘어와 현실의 법칙을 침식하는 적대 존재

## 문서 보기

GitHub Pages가 활성화되면 아래 주소에서 웹 문서를 볼 수 있습니다.

`https://songyechan1024.github.io/Document_ERGOSQUARE-ARCHITECT/`

로컬에서는 `docs/index.html`을 열거나 정적 서버로 실행할 수 있습니다.

```powershell
python -m http.server 8000 --directory docs
```

## 저장소 구조

```text
Document_ERGOSQUARE-ARCHITECT/
├─ docs/                     # GitHub Pages 정적 문서 사이트
│  ├─ index.html
│  ├─ css/style.css
│  └─ js/main.js
├─ planning/                 # 기획 원문을 정리한 Markdown 문서
│  ├─ 00-project-overview.md
│  ├─ 01-world-and-terms.md
│  ├─ 02-core-system.md
│  └─ 03-mvp-and-roadmap.md
└─ README.md
```

## 문서 기준

- 노션의 `지구-164991: 청사진 각성자 메인 기획서 v0.4`를 원안으로 사용했습니다.
- `ERGOSQUARE: ARCHITECT` 명칭과 에르고스피어·인벤토리 게이트·에르고스퀘어의 관계는 2026년 7월 리브랜딩 논의를 반영한 작업 정의입니다.
- 구현이 완료되지 않은 항목은 사이트에서 `기획`, `MVP`, `확장`으로 구분합니다.

## 라이선스

기획 내용과 고유 설정의 저작권은 프로젝트 작성자에게 있습니다. 별도 허가 없이 상업적으로 재사용할 수 없습니다.
