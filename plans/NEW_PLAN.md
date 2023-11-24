## 필히 필요함
- 대문 <-> 네비게이션 전환형 사이드바
  - 공통
    - 전환 버튼
  - 대문
    - 간판
      - 간판용 아바타
      - 간판용 타이틀 텍스트
    - 대문 배경 이미지
    - 대문 하단
      - 홈페이지 공유 버튼 모음
        - 링크 복사 버튼
        - 각종 SNS로 공유 버튼
  - 네비게이션
    - 네비게이션 트리
      - 네비게이션 루트 노드
      - 네비게이션 중간 노드
      - 네비게이션 말단 노드
- 초기 페이지
  - 로고 이미지
- 개요 페이지
- 조건 페이지
- 부문별 기록 목록 페이지
  - 부문 타이틀
  - 기록 요약 카드 리스트
    - 기록 요약 카드
      - 썸네일
      - 타이틀
      - 코멘터리
      - 트위터 링크, 유튜브 영상 등등 보유 여부 표시
- 기록 페이지
  - 기록 타이틀
  - 기록 아티클
    - 제목
      - 일시
      - 종목
    - 썸네일
      - 썸네일 클릭 시 성과 사진의 원본 이미지를 보여주는 모달
    - 기록 본문
      - 최종 스테이지
      - 최종 점수
      - 수단 또는 장소
      - 코멘터리
      - 특수 태그 (노미스 ALL, 현재 점탑 등등)
      - 트윗 링크로 이어지는 아이콘
      - 유튜브 영상
  - 소형 기록 요약 카드 리스트
- 데이터 저장 방식
  - AWS 구축 전
    - Vercel에 하드코딩 기록을 만들어둘 것
  - AWS 구축 후
    - Vercel에 배포되어 있던 기록을 AWS 데이터베이스로 이관
    - 나만 로그인할 수 있는 백오피스를 구축하여 기록 등록 기능 구축

## 있으면 좋을 것 같음
- 라우팅으로 구현
  - 성장 기록
    - 종목별 최고 기록의 성장 그래프를 차트로 열람할 수 있는 기능
      - 최고 스테이지 성장 그래프
      - 최고 스코어 성장 그래프