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
      <NavItem isDisabled={false} />
      <NavItem isDisabled />
    </Root>
  );
}

export default Main;
