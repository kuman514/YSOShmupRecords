# YSOShmupRecords
YSO(kuman514)가 주력으로 플레이하는 슈팅게임의 기록을 등록하고 열람하기 위해 만든 웹 프로젝트.
[방문하기](https://yso-shmup-records.vercel.app)

## Project Board
- [프로젝트 관리 보드](https://github.com/users/kuman514/projects/2)

## Plans
- [초기 계획](https://github.com/kuman514/YSOShmupRecords/blob/main/plans/PLAN.md)
- [새로 세운 계획](https://github.com/kuman514/YSOShmupRecords/blob/main/plans/NEW_PLAN.md)

## Design
- [Figma 공유 링크 - Dev Mode](https://www.figma.com/file/ufvkXsisZzY2xRqf5hS11H/YSOShmupRecords?type=design&node-id=0%3A1&mode=dev)
- [새로운 레이아웃 디자인 Figma 공유 링크 - Dev Mode](https://www.figma.com/file/ufvkXsisZzY2xRqf5hS11H/YSOShmupRecords?type=design&node-id=104%3A2&mode=dev)

## Updates
- `2023년 11월 13일`
  - 최초 릴리즈.
- `2023년 11월 18일`
  - 좌측 사이드바의 네비게이션 트리를 모두 펼친 상태로 고정하여, 원하시는 곳을 조금 더 쉽게 찾아갈 수 있도록 만들었습니다.
  - 네비게이션 노드가 펼친 상태나 주소의 경로에 해당되어도 하이라이트되지 않습니다.
- `2023년 11월 21일`
  - 게임에 따라 형태가 달라지는 기록 페이지 주소가 이제 일관성 있는 형태로 바뀝니다.
    - 주소 형태 변경 전: `/records/부문명`(단 하나의 부문만 가진 게임) 또는 `/records/게임명/부문명`(여러 부문으로 나뉘는 게임의 기록)
    - 주소 형태 변경 후: (게임에 상관없이 일관성 있게) `/records/부문명`
- `2023년 12월 13일`
  - 사이드바가 변경되었습니다.
    - 사이드바의 타이틀 모드 <-> 네비게이션 모드를 좌상단 메뉴(및 닫기) 버튼으로 전환하실 수 있습니다.
    - 사이드바의 네비게이션이 버튼이 아닌 링크 형태로 변경되었습니다.
    - 사이드바 하단에 카카오톡 오픈채팅방 소통 창구를 추가하였습니다.
  - 부문 타입 및 기록에 도돈파치(1997)과 다라이어스 외전, 갤러그 어레인지먼트, 케츠이를 추가하였습니다.
    - 이 중에는 아직 플레이해보지 않은 부문이 있어 기록이 비어있을 수 있습니다.
  - 기록 리스트를 열람하실 수 있는 기능을 추가하였습니다. 주소의 형태는 `/records/부문명`입니다.
  - 기록 아티클의 주소에 날짜가 포함됩니다. 주소의 형태는 `/records/부문명/날짜`입니다.
  - 기록 아티클에 유튜브 링크가 있을 경우, 유튜브 영상을 시청하실 수 있습니다.
  - 기록 아티클의 썸네일이 작아지고, 빈 공간을 검은색으로 채웠습니다.
  - 기록 아티클을 외부로 공유할 수 있는 기능을 추가하였습니다.
    - 트위터로 공유할 수 있습니다.
    - 링크를 복사하여 원하는 곳에 붙여넣으실 수 있습니다.
  - 기존에 쓰인, 카카오톡 이외의 소통 창구는 제외하였습니다.
  - 폰트 패밀리가 `Inter, Arial, Helvetica, sans-serif`로 변경되었습니다.
  - 컬러칩이 변경되었습니다. 현재 컬러칩은 다음과 같습니다.
    - 주 테마 컬러: `#22b14c`
    - 호버: `#39fd72`
    - 회색: `#b1b1b1`
    - 라이트 테마 배경: `#ffffff`
    - 라이트 테마 글씨: `#000000`
    - 다크 테마 배경: `#033205`
    - 다크 테마 글씨: `#ffffff`
    - 플레이어 1 색상: `#ff6b00`
    - 플레이어 2 색상: `#4073f4`
    - 오류: `#ee4444`
- `2023년 12월 14일`
  - 모바일 화면을 지원합니다.
    - 가로 크기가 `1000px` 이하일 때, 사이드바가 헤더로 변경됩니다.
    - 앱 실행에 권장되는 최소 가로 크기는 `300px`입니다.
  - 사이드바에서, 네비게이션의 링크를 클릭 시 타이틀 모드로 되돌아갑니다.
- `2023년 12월 24일`
  - 기록 리스트를 부문 타입을 전환할 때마다 불필요한 이미지 주소를 요청하던 버그가 수정되었습니다.
  - 스페셜 태그의 이름이 정상적으로 출력됩니다.
  - 용어 페이지가 추가되었습니다.
  - `개요`가 `인삿말`로 바뀌었습니다.
  - 기다란 기록 리스트나 기록 아티클 등등에서 하단 여백이 나타나지 않던 문제가 수정되었습니다.
  - 로딩 중 에러 표시와 빈 기록 리스트에 대한 이미지와 안내가 추가되었습니다.
- `2024년 1월 8일`
  - 에러가 발생했거나 불러온 기록 리스트가 비었을 때 표시를 개선했습니다.
  - 기록 리스트를 열람할 때, 기록이 몇 개 있는지 알 수 있게 만들었습니다.
  - 기록 아티클에서 썸네일 클릭 시 표시되는 이미지가 자유롭게 확대/축소 및 이동을 할 수 있도록 만들었습니다.
  - 아이콘을 추가했습니다.
- `2023년 1월 13일`
  - 기록 목록이나 기록 아티클 등을 전환할 시 에러나 빈 목록 표시기가 깜빡이다가 스켈레톤을 표시하게 되는 현상을 수정했습니다.
  - 구글 검색 등록을 목적으로, 구글 검색 인증을 메타태그에 등록했습니다.

## Feedbacks
- ~~트위터에 기록된 게임들이 많은 것 같은데 그것도 이 프로젝트에 다루는게 어떨까?~~ (반영 완료)
- ~~트위터 링크가 너무 길다. 아이콘 버튼으로 축소해줬으면 좋겠다.~~ (폐지)
  - YSOShmupRecords를 통해 트위터 계정으로 넘어오는 기능은 폐지되었습니다.
- ~~레이아웃이 매끄럽지 않다. UI를 조금 더 티스토리에 가깝게 만들어봐도 괜찮지 않을까?~~ (반영 완료)
- ~~원하는 부문의 기록까지는 불러올 수 있지만, 원하는 일자까지 링크로 공유할 수 있었으면 좋겠다.~~ (반영 완료)
- 리절트 화면 이외에도 기록과 관련된 이미지를 여러 개 볼 수 있었다면 좋겠다. (백로그)
  - 대대적인 컨텐츠 수정이 필요하므로 시간이 걸립니다.
  - AWS와 백엔드를 배워 백오피스를 만든 뒤 반영 예정입니다.
- 기록 리스트에서 제목 이외의 정보도 알고 싶다. (백로그)
  - AWS와 백엔드를 배워 백오피스를 만든 뒤 반영 예정입니다.
