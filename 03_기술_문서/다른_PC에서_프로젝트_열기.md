# 다른 PC에서 프로젝트 열기

> 문서 상태: 초안 · NCAI와 개인 PC 사이의 개발 파일 동기화 안내.

작성자: 송예찬 · 작성일: 2026-10-21

Unity 프로젝트의 [프로젝트 열기와 동기화 안내](https://github.com/SongYeChan1024/ERGOSQUARE-ARCHITECT/blob/main/GETTING_STARTED.md)에 최초 설치·복제 명령·씬 실행·작업 종료 후 푸시 절차를 모았습니다. 실제 명령과 입력표는 그 안내를 기준으로 합니다.

| 항목 | 기준 |
| --- | --- |
| Unity | `6000.4.0f1` |
| 게임 저장소 | `SongYeChan1024/ERGOSQUARE-ARCHITECT`, 기준 브랜치 `main` (작업은 `main`에서 나눈 브랜치) |
| 문서 저장소 | `SongYeChan1024/Document_ERGOSQUARE-ARCHITECT`, 브랜치 `codex/reorganize-game-design-docs` |
| 공통 패키지 | 게임의 `Packages/com.kasil.game-foundation`에 포함. 별도 저장소·형제 폴더 불필요 |
| 3인칭 연습장 | `Assets/_ERGOSQUARE/01.Scenes/Comparison/ThirdPerson_Comparison.unity` |
| 동굴 미리보기 | 같은 폴더의 `Tutorial_Cave_ThirdPerson_Preview.unity` |

기존 쿼터뷰 튜토리얼은 보존하고, 원본 검 2타와 공격 중 마우스 에임 추적은 비교 씬에서 확인합니다. 동굴 미리보기의 전체 튜토리얼 진행 이벤트 연결과 사용자의 수동 조작감 검수는 후속입니다.

새 PC에서는 Unity를 열기 전에 두 작업 브랜치를 가져오고, 작업을 마친 PC에서는 씬·에셋·문서를 저장한 뒤 두 저장소를 각각 커밋·푸시합니다. Unity 캐시와 임시 검수 프로젝트는 PC별로 생성합니다. VARCO·Notion 로그인과 로컬 세이브는 Git 동기화 대상과 별개입니다.

패키지 포함의 원본 기준은 `UnityGameFoundation` 커밋 `5691fef`입니다. 이번 전달 검수는 게임 저장소의 `Tools/Verification/NcaiHandoff_20261021/`에서 확인합니다.

Git 인덱스만으로 만든 빈 체크아웃에서 기존 `Library` 없이 Unity 6000.3.7f1 임포트·컴파일과 embedded 패키지 복원, 두 씬의 재생 전 FSM·Animator·원본 2타 연결을 확인했습니다. 검수 전용 가상 입력으로 실제 공격·에임·취소·이동 복귀 23개를 통과했습니다. 게임의 저장된 입력 설정은 유지합니다.

위 검사는 당일 초기 전달본의 기록입니다. 21일 후속 마감본은 Space 점프·Ctrl 집중, 오른쪽 숄더뷰·작은 점, B 편집/Tab 이동 중 조준 설치와 1m 격자를 사용합니다. 현재 입력표와 초기 실행 절차는 게임의 `GETTING_STARTED.md`를 따릅니다. 최종 수정 25개, 전개 회귀 56개, 숄더뷰 회귀 55개·카메라 표본 1,152개 결과는 게임의 `Tools/ArtReview/Combat_Deployment_Polish_20261021/`에 있고, 최신 Git 전달 무결성 점검은 `Tools/Verification/EndOfDay_20261021/`에 별도로 보존합니다. 이전의 빈 캐시 검수를 최신 마감본에서 다시 실행한 것으로 해석하지 않습니다.

데일리로그는 노션에 작성하고, 상세 일일개발일지는 이 문서 저장소에 커밋합니다. 새 PC에서 대화 맥락을 복원할 때는 `PROJECT_CONTEXT.md`와 [21일 개발일지](../04_프로젝트_관리/개발_일지/2026-10-21_3인칭_전투와_숄더뷰_조준전개_개선.md)를 먼저 확인합니다.

## Revision History

| 날짜 | 버전 | 변경 내용 | 작성자 |
| --- | --- | --- | --- |
| 2026-10-21 | v1.0 초안 | NCAI 작업 환경 복제와 공통 패키지 포함·작업 브랜치 안내 연결 | 송예찬 |
| 2026-10-21 | v1.1 초안 | 당일 후속 마감 조작·1m 격자와 최신 검수·데일리로그/개발일지 위치 갱신 | 송예찬 |
