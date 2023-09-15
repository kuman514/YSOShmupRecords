import React from 'react';
import styled from 'styled-components';

import { navNodeInfo } from '^/constants';
import { NavSidebar } from '^/components/molecules/NavSidebar';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <Root>
      <NavSidebar
        navNodeInfo={navNodeInfo}
        rootNavNodeIds={['intro', 'criteria', 'records']}
      />
    </Root>
  );
}

export default Main;
