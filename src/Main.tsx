import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '^/components/organisms/Sidebar';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { rootNavNodes } from '^/constants/nav-node';

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;
`;

function Main() {
  return (
    <Root>
      <Sidebar rootNavNodes={rootNavNodes} />
      <div>
        <NavRouteTitle />
        <Outlet />
      </div>
    </Root>
  );
}

export default Main;
