import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { ButtonType } from '^/types';
import { Button } from '^/components/atoms/Button';
import ErrorPngUrl from '^/assets/images/error.png';

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: var(--light-font-color);

  font-size: 36px;
  font-weight: 700;
`;

const Information = styled.div`
  color: var(--light-font-color);
  font-size: 16px;
  font-weight: 400;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Root>
      <Image src={ErrorPngUrl} alt="에러 발생" />
      <Title>페이지를 불러올 수 없습니다.</Title>
      <Information>인터넷 연결 상태와 현재 주소를 확인해주세요.</Information>
      <Information>
        서버 상의 에러일 수 있으니 잠시 후 다시 시도해주세요.
      </Information>
      <Information>
        문제 발생 시 아래 카카오 오픈채팅방 버튼으로 문의해주세요.
      </Information>
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
