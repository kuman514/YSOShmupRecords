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
- `2024년 1월 13일`
  - 기록 목록이나 기록 아티클 등을 전환할 시 에러나 빈 목록 표시기가 깜빡이다가 스켈레톤을 표시하게 되는 현상을 수정했습니다.
  - 구글 검색 등록을 목적으로, 구글 검색 인증을 메타태그에 등록했습니다.
- `2024년 1월 25일`
  - 기록 데이터를 AWS API 엔드포인트로부터 가져옵니다.
- `2024년 1월 30일`
  - 기록 목록 페이지에서, 제목 이외의 정보도 간략하게 열람할 수 있습니다.
  - 다크 모드를 지원합니다. 초기 실행 시 OS 테마 설정에 따르며, 우하단의 `다크 모드 켜기/끄기` 버튼으로 변경할 수 있습니다.
  - 기록 당 여러 장의 이미지를 볼 수 있습니다. 썸네일 클릭 시 나오는 이미지 모달에서 `<`, `>` 버튼으로 기록 관련 이미지를 둘러볼 수 있습니다. (이미지가 여러 장인 경우)
- `2024년 2월 7일`
  - 기록 목록 페이지의 영상 아이콘이 유튜브 로고 모양으로 변경되었습니다.
- `2024년 4월 30일`
  - API 호출 시 일관적인 동작과 높은 유지보수성을 위해 Axios API Client를 사용합니다.
  - 슈팅게임 기록에 사용되는 이미지들의 URL을, 환경 변수로 저장된 Static Image Base URL을 기반으로 한 상대적인 경로가 아닌, 받아온 URL 그대로 사용하도록 변경했습니다.
  - 다크 모드에서 인삿말, 등록 기준, 용어 등의 타이틀 폰트 컬러가 잘못된 문제를 해결했습니다.
- `2024년 6월 4일`
  - 헤더 및 네비게이션 사용 경험을 향상시키기 위해, 기존에 헤더와 네비게이션 역할로도 동작하던 사이드바가 고정 헤더와 네비게이션 오버레이 사이드바로 분리됩니다.
  - 아바타가 있던 타이틀은 더 이상 사이드바에 나타나지 않습니다. 아바타를 보여드릴 수 있는 다른 곳을 알아보겠습니다.
- `2024년 6월 17일`
  - 누락된 특이사항 태그명이 추가되었습니다. (`아카트로닉스 6주년 기념`)
  - 특이사항 태그명 변경되었습니다. (`아카트로닉스 5주년 행사` -> `아카트로닉스 5주년 기념`)
  - 문의 창구(카카오 오픈채팅) 버튼을 복구했습니다. (화면 우하단 위치)
  - 기록 리스트의 아이템에 마우스를 올리면 아이템의 썸네일이 하이라이트 및 확대됩니다.
  - 기록 아티클에서 `목록으로 돌아가기` 버튼이 추가되었습니다.
- `2024년 7월 10일`
  - 공유 링크 등을 통해 들어간 기록 아티클에서 `목록으로 돌아가기` 버튼이 작동되지 않는 문제를 해결했습니다.
- `2024년 8월 12일`
  - 특이사항 태그명이 추가되었습니다. (`Korea Shmup Festival 4 참여`)
- `2024년 8월 18일`
  - 페이지의 상단 패딩이 조금 더 넓어졌습니다.
  - 사이드바의 `기록`을 클릭하여 모든 슈팅게임 기록을 한꺼번에 불러올 수 있습니다.
  - 기록 리스트의 아이템에 기록 타입명이 표시됩니다.
- `2024년 8월 25일`
  - 사이드바가 변경되었습니다.
    - 주력 종목인 `도돈파치 (1997): C-Shot`, `갤러그 어레인지먼트`, `케츠이: B타입`만 링크를 따로 남기고, 나머지 종류의 기록은 모든 슈팅게임 기록 목록에서 열람할 수 있게 만들었습니다.
    - 추가로, 주력 종목에 `인더헌트 (해저대전쟁 해외판)`을 추가하였습니다.
    - 추후 빈 공간은 사진 갤러리나 게임 리뷰 등등, 슈팅게임 관련 다양한 컨텐츠로 보강하겠습니다.
  - 모든 슈팅게임 기록 목록을 통해 기록을 들어가려 할 경우 엉뚱한 경로로 이동하여 EMTPY가 발생하는 문제를 해결했습니다.
  - 기록 아티클에서 `목록으로 돌아가기` 버튼 대신 타이틀 바로 아래의 네비게이션 링크를 통해 기록 목록으로 돌아갈 수 있도록 변경했습니다.
- `2024년 9월 1일`
  - 슈팅게임 용어 `하야마와시`에 대한 설명을 추가하였습니다.
  - 슈팅게임 용어 열람에 관한 시각적인 개선을 하였습니다.
    - 용어와 설명을 각각 다른 줄에 배치하였습니다.
    - 용어는 굵은 표시로 강조하였습니다.
  - `아카트로닉스 오시는 길` 페이지를 추가하였습니다.
    - 사이드바에서 `아카트로닉스 오시는 길`을 클릭하시거나 `/way-to-akatronics` 주소로 들어오실 수 있습니다.

## Feedbacks
- ~~트위터에 기록된 게임들이 많은 것 같은데 그것도 이 프로젝트에 다루는게 어떨까?~~ (반영 완료)
- ~~트위터 링크가 너무 길다. 아이콘 버튼으로 축소해줬으면 좋겠다.~~ (폐지)
  - YSOShmupRecords를 통해 트위터 계정으로 넘어오는 기능은 폐지되었습니다.
- ~~레이아웃이 매끄럽지 않다. UI를 조금 더 티스토리에 가깝게 만들어봐도 괜찮지 않을까?~~ (반영 완료)
- ~~원하는 부문의 기록까지는 불러올 수 있지만, 원하는 일자까지 링크로 공유할 수 있었으면 좋겠다.~~ (반영 완료)
- ~~AWS + 백엔드로 백오피스 제작 중~~ (마이그레이션 완료. 해당 피드백 반영이 가능할 것 같습니다.)
  - ~~리절트 화면 이외에도 기록과 관련된 이미지를 여러 개 볼 수 있었다면 좋겠다.~~ (반영 완료. 갤러그 어레인지 2024-01-28 기록에 선행 추가 후 데이터 추가 예정입니다.)
  - ~~기록 리스트에서 제목 이외의 정보도 알고 싶다.~~ (반영 완료)
- ~~다크 모드를 지원했으면 좋겠다.~~ (반영 완료)
- ~~모바일 화면에서 스크롤에 상관없이 헤더가 표시되었으면 좋겠다.~~ (반영 완료)
- ~~슈팅게임 용어 페이지 개편 필요.~~ (반영 완료)
- 기록 외 갤러리나 게임 리뷰같은 컨텐츠도 있었으면 좋겠다. (기획 중)
  - 슈팅게임 관련 사진 갤러리
  - 슈팅게임 리뷰
  - 슈팅게임 음악 갤러리
  - (그 외 추가적인 논의 중)
