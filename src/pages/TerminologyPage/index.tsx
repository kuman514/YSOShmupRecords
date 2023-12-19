import React from 'react';
import { styled } from 'styled-components';

import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { DescriptionListItem } from '^/types';

const terminology: DescriptionListItem[] = [
  {
    id: 'Terminology-1',
    description:
      '컨티뉴: 라이프를 전부 잃어버리는 등의 게임 오버 상황에서 추가적인 과금을 통해 진행하던 상태 그대로 재개하는 행위.',
  },
  {
    id: 'Terminology-2',
    description:
      '미스(죽음): 게임 진행 중 적의 공격이나 지형지물 등의 환경 요소에 당해 라이프를 잃는 행위.',
  },
  {
    id: 'Terminology-3',
    description:
      '봄(폭탄): 적의 공격을 피하거나 적에게 큰 데미지를 주기 위해 사용되는 전멸기.',
  },
  {
    id: 'Terminology-4',
    description: '원코인(노컨티뉴): 컨티뉴를 하지 않고 플레이하는 행위.',
  },
  {
    id: 'Terminology-5',
    description:
      '노미스(노다이, 노데스): 단 한 번의 미스도 발생하지 않고 어떤 목표를 달성하는 행위. 예를 들어, 노미스 ALL은 미스를 한 번도 내지 않고 모든 스테이지를 완주하는 행위를 말한다.',
  },
  {
    id: 'Terminology-6',
    description:
      '노봄: 단 한 번의 봄도 발동시키지 않고 어떤 목표를 달성하는 행위. 예를 들어, 노봄 ALL은 봄을 한 번도 발동하지 않고 모든 스테이지를 완주하는 행위를 말한다.',
  },
  {
    id: 'Terminology-7',
    description:
      'ALL: 모든 스테이지를 완주하는 행위. 단, 도돈파치나 스트라이커즈 1945 등의 2번째 루프까지 있는 게임에서는 2주까지 완료해야만 ALL로 인정된다.',
  },
  {
    id: 'Terminology-8',
    description:
      '1-ALL: 첫번째 루프의 모든 스테이지를 완주하는 행위. 도돈파치나 케츠이 등 2번째 루프로의 진출 조건이 있는 게임에서, 2번째 루프 진입에 실패하여 1번째 루프에서 끝났을 때 해당 용어가 사용된다.',
  },
  {
    id: 'Terminology-9',
    description:
      '2-ALL: 첫번째와 두번째 루프의 모든 스테이지를 완주하는 행위. 도돈파치나 스트라이커즈 1945 등의 2번째 루프까지 있는 게임에서는 2-ALL이 ALL과 동일한 의미다.',
  },
  {
    id: 'Terminology-10',
    description:
      '패턴화: 게임을 원활하게 진행하기 위해 일정한 패턴을 세우는 행위.',
  },
];

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
`;

export function TerminologyPage() {
  return (
    <Root>
      <DescriptionTemplate title="용어" descriptionListItems={terminology} />
    </Root>
  );
}
