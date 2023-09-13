import React from 'react';
import styled from 'styled-components';

import { NavItem } from '^/components/atoms/NavItem';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <Root>
      <NavItem isActive onClick={() => {}} isDisabled={false}>
        Koishi
      </NavItem>
      <NavItem isActive onClick={() => {}} isDisabled>
        Koishi
      </NavItem>
    </Root>
  );
}

export default Main;
