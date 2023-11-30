import React from 'react';
import styled from 'styled-components';

import GateLogoPngUrl from '^/assets/logos/gate.png';

const Root = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
`;

export function GatePage() {
  return (
    <Root>
      <Image
        src={GateLogoPngUrl}
        alt="Welcome to YSOShmupRecords by kuman514"
      />
    </Root>
  );
}
