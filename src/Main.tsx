import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '^/components/organisms/Sidebar';
import { rootNavNodes } from '^/constants/nav-node';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const OutletWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 72px;
  padding-bottom: 72px;
  overflow-y: scroll;
`;

function Main() {
  return (
    <Root>
      <Sidebar rootNavNodes={rootNavNodes} />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Root>
  );
}

export default Main;
