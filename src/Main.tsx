import React from 'react';
import styled from 'styled-components';

import ClickableChevron from '^/components/atoms/ClickableChevron';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <Root>
      <ClickableChevron isOpen fillColor="var(--main-color)" />
      <ClickableChevron isOpen={false} fillColor="var(--main-color)" />
    </Root>
  );
}

export default Main;
