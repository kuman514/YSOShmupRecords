import styled from 'styled-components';

import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { textsForArticle } from '^/constants/texts';
import { DescriptionListItem } from '^/types';

const introduction: DescriptionListItem[] = [
  {
    id: 'introduction-hello',
    description: '안녕하세요. YSOShmupRecords에 오신 것을 환영합니다!',
  },
  {
    id: 'introduction-description',
    description:
      '이 사이트는 본인 YSO(kuman514)가 플레이하는 Shmups(고전 슈팅게임) 기록들을 담고 있습니다.',
  },
  {
    id: 'introduction-have-a-nice-day',
    description: '잘 부탁드립니다!',
  },
];

const objectives: DescriptionListItem[] = [
  {
    id: 'objectives-1',
    description:
      '슈팅게임 동호인들과 더욱 원활하게 교류하기 위해 제작되었습니다.',
  },
  {
    id: 'objectives-2',
    description:
      '기존에는 SNS나 디스코드 등의 메신저로만 교류하였으나, 이는 다른 종류의 글과 메시지까지 난잡하게 섞여 있어 슈팅게임 기록을 제대로 찾아보기 어려운 문제점을 안고 있었습니다.',
  },
  {
    id: 'objectives-3',
    description:
      '이러한 문제점을 해결하기 위해, 본인 YSO(kuman514)의 기록만을 따로 열람하고 공유할 수 있는 사이트를 만들었습니다.',
  },
];

const topAchievements: DescriptionListItem[] = [
  {
    id: 'top-achivement-galagaarrangement',
    description: `${textsForArticle.galagaarrangement} - 노미스 ALL 및 1338850점 달성`,
  },
  {
    id: 'top-achivement-inthehunt',
    description: `${textsForArticle.inthehunt} - 원코인(노컨티뉴) ALL`,
  },
  {
    id: 'top-achivement-dodonpachi-cshot',
    description: `${textsForArticle['dodonpachi-cshot']} - 원코인(노컨티뉴) 2-6 진출 및 1억점 달성`,
  },
];

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export function IntroPage() {
  return (
    <Root>
      <DescriptionTemplate title="인삿말" descriptionListItems={introduction} />
      <DescriptionTemplate
        title="YSOShmupRecords의 목적"
        descriptionListItems={objectives}
      />
      <DescriptionTemplate
        title="개인 통산 최고 성과"
        descriptionListItems={topAchievements}
      />
    </Root>
  );
}
