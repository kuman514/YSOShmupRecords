import React from 'react';
import styled from 'styled-components';

import { Avatar } from '^/components/atoms/Avatar';
import AvatarJpgUrl from '^/assets/avatar/avatar.jpeg';

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 36px;
`;

const Line = styled.div`
  width: 30px;
  border-top: 1px solid #ffffff;
`;

const Title = styled.h1`
  color: #ffffff;

  font-size: 36px;
  font-weight: 200;
`;

export function TitleWithAvatar() {
  return (
    <Root>
      <Line />
      <Avatar pxSize={150} imageUrl={AvatarJpgUrl} />
      <Title>YSOShmupRecords</Title>
    </Root>
  );
}
