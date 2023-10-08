import React from 'react';

import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { DescriptionListItem } from '^/types';

const introduction: DescriptionListItem[] = [
  {
    id: 'Introduction-1',
    description: '안녕하세요. YSOShmupRecords에 오신 것을 환영합니다!',
  },
  {
    id: 'Introduction-2',
    description:
      '이 사이트는 제작자인 본인 YSO(kuman514라고도 합니다)가 주력으로 플레이하는 Shmups(고전 슈팅게임) 기록들을 담고 있습니다.',
  },
  {
    id: 'Introduction-3',
    description: '잘 부탁드립니다!',
  },
  {
    id: 'Introduction-4',
    description: '소통 창구',
    subItems: [
      {
        id: 'Introduction-4-1',
        description: '트위터(현 X) @kumankoishi',
      },
      {
        id: 'Introduction-4-2',
        description: '깃허브 kuman514',
      },
      {
        id: 'Introduction-4-3',
        description: '블루스카이 kuman514.bsky.social',
      },
    ],
  },
];

export function IntroPage() {
  return <DescriptionTemplate descriptionListItems={introduction} />;
}
