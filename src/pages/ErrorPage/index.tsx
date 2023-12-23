import React from 'react';
import { styled } from 'styled-components';

import { ErrorIndicator } from '^/components/molecules/ErrorIndicator';

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

export function ErrorPage() {
  return (
    <Root>
      <ErrorIndicator title="페이지를 불러올 수 없습니다." />
    </Root>
  );
}
