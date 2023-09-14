import React from 'react';
import styled from 'styled-components';

import { NavItem } from '^/components/atoms/NavItem';
import { navNodeInfo } from '^/constants';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <Root>
      <NavItem
        depth={0}
        onClick={() => {}}
        isDisabled={false}
        nodeInfo={navNodeInfo.test}
      />
    </Root>
  );
}

export default Main;
