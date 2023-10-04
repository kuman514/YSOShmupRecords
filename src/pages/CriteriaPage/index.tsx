import React from 'react';

import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { DescriptionListItem } from '^/types';

const criteria: DescriptionListItem[] = [
  {
    id: 'Criteria-1',
    description: '반드시 kuman514가 진행해야 함',
    subItems: [
      {
        id: 'Criteria-1-1',
        description: '원코인으로 (즉, 컨티뉴를 하지 않고) 진행해야 함',
      },
      {
        id: 'Criteria-1-2',
        description: 'kuman514 외 인원의 개입이 없어야 함',
      },
    ],
  },
  {
    id: 'Criteria-2',
    description: '다음과 같은 환경으로 플레이해야 함',
    subItems: [
      {
        id: 'Criteria-2-1',
        description:
          '정품 기판이 설치된 실기체 캐비닛 (예: 신중동 아카트로닉스)',
      },
      {
        id: 'Criteria-2-2',
        description:
          '정식 이식판의 정품 소프트웨어 (예: PS4/PC M2 ShotTrigger)',
      },
    ],
  },
  {
    id: 'Criteria-3',
    description: '다음과 같은 결과가 있어야 함',
    subItems: [
      {
        id: 'Criteria-3-1',
        description: '개인 베스트 최종 점수 갱신',
      },
      {
        id: 'Criteria-3-2',
        description: '개인 베스트 최종 스테이지 갱신',
      },
      {
        id: 'Criteria-3-3',
        description: '노미스 ALL (죽지 않고 모든 스테이지 완주) 등 특수한 경우',
      },
    ],
  },
];

export function CriteriaPage() {
  return <DescriptionTemplate descriptionListItems={criteria} />;
}
