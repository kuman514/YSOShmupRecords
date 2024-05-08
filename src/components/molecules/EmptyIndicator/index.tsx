import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import EmptyPngUrl from '^/assets/images/empty.png';
import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  row-gap: 16px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const EmptyInformationTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

export function EmptyIndicator() {
  const navigate = useNavigate();

  return (
    <Root>
      <Image src={EmptyPngUrl} alt="에러 발생" />
      <EmptyInformationTitle>
        현재 등록된 기록이 없습니다.
      </EmptyInformationTitle>
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
        타이틀 화면으로 돌아가기
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
