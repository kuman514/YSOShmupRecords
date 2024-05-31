import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { useState } from 'react';
import { rootNavNodes } from '^/constants/nav-node';
import { NavigationSidebar } from '^/components/organisms/NavigationSidebar';
import { Header } from '^/components/organisms/Header';

const Root = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const OutletPositionHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const OutletContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 720px;
  padding-top: 72px;
  padding-bottom: 72px;
`;

function Main() {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  return (
    <Root>
      <Header
        onClickOpenOrCloseNavigationButton={() => {
          setIsNavigationOpen(true);
        }}
      />
      <NavigationSidebar
        isNavigationOpen={isNavigationOpen}
        rootNavNodes={rootNavNodes}
        onClickCloseNavigationButton={() => {
          setIsNavigationOpen(false);
        }}
      />
      <OutletPositionHolder>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </OutletPositionHolder>
    </Root>
  );
}

export default Main;
