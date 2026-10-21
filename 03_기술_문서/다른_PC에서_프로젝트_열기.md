# 다른 PC에서 프로젝트 열기

> 문서 상태: 초안 · NCAI와 개인 PC 사이의 개발 파일 동기화 안내.

작성자: 송예찬 · 작성일: 2026-10-21

Unity 프로젝트의 [프로젝트 열기와 동기화 안내](https://github.com/SongYeChan1024/ERGOSQUARE-ARCHITECT/blob/codex/tutorial-foundation/GETTING_STARTED.md)에 최초 설치·복제 명령·씬 실행·작업 종료 후 푸시 절차를 모았습니다. 실제 명령과 입력표는 그 안내를 기준으로 합니다.

| 항목 | 기준 |
| --- | --- |
| Unity | `6000.3.7f1` |
| 게임 저장소 | `SongYeChan1024/ERGOSQUARE-ARCHITECT`, 브랜치 `codex/tutorial-foundation` |
| 문서 저장소 | `SongYeChan1024/Document_ERGOSQUARE-ARCHITECT`, 브랜치 `codex/reorganize-game-design-docs` |
| 공통 패키지 | 게임의 `Packages/com.kasil.game-foundation`에 포함. 별도 저장소·형제 폴더 불필요 |
| 3인칭 연습장 | `Assets/_ERGOSQUARE/01.Scenes/Comparison/ThirdPerson_Comparison.unity` |
| 동굴 미리보기 | 같은 폴더의 `Tutorial_Cave_ThirdPerson_Preview.unity` |

기존 쿼터뷰 튜토리얼은 보존하고, 원본 검 2타와 공격 중 마우스 에임 추적은 비교 씬에서 확인합니다. 동굴 미리보기의 전체 튜토리얼 진행 이벤트 연결과 사용자의 수동 조작감 검수는 후속입니다.

새 PC에서는 Unity를 열기 전에 두 작업 브랜치를 가져오고, 작업을 마친 PC에서는 씬·에셋·문서를 저장한 뒤 두 저장소를 각각 커밋·푸시합니다. Unity 캐시와 임시 검수 프로젝트는 PC별로 생성합니다. VARCO·Notion 로그인과 로컬 세이브는 Git 동기화 대상과 별개입니다.

패키지 포함의 원본 기준은 `UnityGameFoundation` 커밋 `5691fef`입니다. 이번 전달 검수는 게임 저장소의 `Tools/Verification/NcaiHandoff_20261021/`에서 확인합니다.

Git 인덱스만으로 만든 빈 체크아웃에서 기존 `Library` 없이 Unity 6000.3.7f1 임포트·컴파일과 embedded 패키지 복원, 두 씬의 재생 전 FSM·Animator·원본 2타 연결을 확인했습니다. 검수 전용 가상 입력으로 실제 공격·에임·취소·이동 복귀 23개를 통과했습니다. 게임의 저장된 입력 설정은 유지합니다.

## Revision History

| 날짜 | 버전 | 변경 내용 | 작성자 |
| --- | --- | --- | --- |
| 2026-10-21 | v1.0 초안 | NCAI 작업 환경 복제와 공통 패키지 포함·작업 브랜치 안내 연결 | 송예찬 |
