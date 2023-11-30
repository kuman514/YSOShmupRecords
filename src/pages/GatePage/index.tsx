import React from 'react';
import styled from 'styled-components';

import GateLogoPngUrl from '^/assets/logos/gate.png';

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function GatePage() {
  return (
    <Root>
      <img src={GateLogoPngUrl} alt="Welcome to YSOShmupRecords by kuman514" />
    </Root>
  );
}
