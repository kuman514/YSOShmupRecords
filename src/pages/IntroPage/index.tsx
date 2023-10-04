import React from 'react';

import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { DescriptionListItem } from '^/types';

const introduction: DescriptionListItem[] = [
  {
    id: 'Introduction-1',
    description: '안녕하세요',
    subItems: [
      {
        id: 'Introduction-1-1',
        description: '반갑습니다',
      },
    ],
  },
  {
    id: 'Introduction-2',
    description: 'kuman514',
  },
];

export function IntroPage() {
  return <DescriptionTemplate descriptionListItems={introduction} />;
}
