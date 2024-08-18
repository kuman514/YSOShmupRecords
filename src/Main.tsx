import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { ContactButton } from '^/components/atoms/ContactButton';
import { Header } from '^/components/organisms/Header';
import { NavigationSidebar } from '^/components/organisms/NavigationSidebar';
import { rootNavNodes } from '^/constants/nav-node';

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
  padding-top: 144px;
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
      <ContactButton
        onClick={() => {
          window.open('https://open.kakao.com/me/YSOShmupRecords', '_blank');
        }}
      />
    </Root>
  );
}

export default Main;
