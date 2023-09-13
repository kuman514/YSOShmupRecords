import React from 'react';
import styled from 'styled-components';

import { Chevron } from '^/components/atoms/Chevron';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <Root>
      <Chevron isOpen fillColor="var(--main-color)" />
      <Chevron isOpen={false} fillColor="var(--main-color)" />
    </Root>
  );
}

export default Main;
