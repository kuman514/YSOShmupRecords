import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { DescriptionTemplate } from '^/components/molecules/DescriptionTemplate';
import { ButtonType, DescriptionListItem } from '^/types';
import { Button } from '^/components/atoms/Button';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
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
  const navigate = useNavigate();

  return (
    <Root>
      <DescriptionTemplate
        title="페이지를 불러올 수 없습니다."
        descriptionListItems={errorDescription}
      />
      <Button
        type={ButtonType.SOLID}
        isDisabled={false}
        onClick={() => {
          navigate('/');
        }}
        customStyle={{
          width: 'fit-content',
        }}
      >
        YSOShmupRecords로 돌아가기
      </Button>
      <Button
        type={ButtonType.SOLID}
        isDisabled={false}
        onClick={() => {
          window.open('https://open.kakao.com/me/YSOShmupRecords', '_blank');
        }}
        customStyle={{
          width: 'fit-content',
        }}
      >
        소통창구 (카카오 오픈채팅방)
      </Button>
    </Root>
  );
}
