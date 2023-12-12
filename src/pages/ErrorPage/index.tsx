import React from 'react';

import styled from 'styled-components';
import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { ButtonType, DescriptionListItem } from '^/types';
import { Button } from '^/components/atoms/Button';

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const errorDescription: DescriptionListItem[] = [
  {
    id: 'Error-1',
    description: '인터넷 연결 상태를 확인해주세요.',
  },
  {
    id: 'Error-2',
    description: '올바른 주소인지 확인해주세요.',
  },
  {
    id: 'Error-3',
    description: '서버 상의 에러일 수 있으니 잠시 후 다시 시도해주세요.',
  },
  {
    id: 'Error-4',
    description:
      '문의사항 발생 시 아래 카카오 오픈채팅방 버튼으로 문의해주세요.',
  },
];

export function ErrorPage() {
  return (
    <div>
      <Title>페이지를 불러올 수 없습니다.</Title>
      <DescriptionTemplate descriptionListItems={errorDescription} />
      <Button
        type={ButtonType.SOLID}
        isDisabled={false}
        onClick={() => {
          window.open('https://open.kakao.com/me/YSOShmupRecords', '_blank');
        }}
      >
        소통창구 (카카오 오픈채팅방)
      </Button>
    </div>
  );
}
