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
      '이 사이트는 제작자인 본인 YSO(kuman514)가 주력으로 플레이하는 Shmups(고전 슈팅게임) 기록들을 담고 있습니다.',
  },
  {
    id: 'Introduction-3',
    description: '잘 부탁드립니다!',
  },
];

export function IntroPage() {
  return (
    <DescriptionTemplate title="인삿말" descriptionListItems={introduction} />
  );
}
