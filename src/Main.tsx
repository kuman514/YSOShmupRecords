import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import { NavSidebar } from '^/components/organisms/NavSidebar';
import { useNavNodeStore } from '^/stores/nav-node';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { getAPIURL } from '^/utils/api-url';
import { NavNodeInfo } from '^/types';
import { rootNavNodes } from '^/constants';

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;
`;

function Main() {
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get<NavNodeInfo[]>(getAPIURL('nav-info'));
        if (response.status === 200) {
          useNavNodeStore.getState().setRootNodes(response.data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          useNavNodeStore.getState().setRootNodes(rootNavNodes);
        }
      }
    })();
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
