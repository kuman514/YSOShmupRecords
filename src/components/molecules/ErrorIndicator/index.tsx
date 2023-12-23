import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ErrorPngUrl from '^/assets/images/error.png';
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

const ErrorOrEmptyInformationTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

const ErrorOrEmptyInformation = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

interface Props {
  title: string;
}

export function ErrorIndicator({ title }: Props) {
  const navigate = useNavigate();

  return (
    <Root>
      <Image src={ErrorPngUrl} alt="에러 발생" />
      <ErrorOrEmptyInformationTitle>{title}</ErrorOrEmptyInformationTitle>
      <ErrorOrEmptyInformation>
        인터넷 연결 상태와 현재 주소를 확인해주세요.
      </ErrorOrEmptyInformation>
      <ErrorOrEmptyInformation>
        서버 상의 에러일 수 있으니 잠시 후 다시 시도해주세요.
      </ErrorOrEmptyInformation>
      <ErrorOrEmptyInformation>
        문제 발생 시 아래 카카오 오픈채팅방 버튼으로 문의해주세요.
      </ErrorOrEmptyInformation>
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
