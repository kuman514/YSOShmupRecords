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

const OutletPositionHolder = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 72px;
  padding-bottom: 72px;
  overflow-y: scroll;
`;

const OutletContainer = styled.div`
  width: 100%;
  max-width: 720px;
`;

function Main() {
  return (
    <Root>
      <Sidebar rootNavNodes={rootNavNodes} />
      <OutletPositionHolder>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </OutletPositionHolder>
    </Root>
  );
}

export default Main;
