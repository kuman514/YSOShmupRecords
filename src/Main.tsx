import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { NavSidebar } from '^/components/organisms/NavSidebar';
import { rootNavNodes } from '^/constants';
import { useNavNodeStore } from '^/stores/nav-node';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;
`;

function Main() {
  useEffect(() => {
    /**
     * @todo
     * Change into getting root nav nodes from backend.
     */
    useNavNodeStore.getState().setRootNodes(rootNavNodes);
  }, []);

  return (
    <Root>
      <NavSidebar />
      <div>
        <NavRouteTitle />
        <Outlet />
      </div>
    </Root>
  );
}

export default Main;
