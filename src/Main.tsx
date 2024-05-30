import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { DarkModeToggleOverlayButton } from '^/components/atoms/DarkModeToggleOverlayButton';
import { rootNavNodes } from '^/constants/nav-node';
import { NavigationSidebar } from '^/components/organisms/NavigationSidebar';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: 1000px) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

const OutletPositionHolder = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const OutletContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 720px;
  padding-top: 72px;
  padding-bottom: 72px;
`;

function Main() {
  return (
    <Root>
      <NavigationSidebar rootNavNodes={rootNavNodes} />
      <OutletPositionHolder>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </OutletPositionHolder>
      <DarkModeToggleOverlayButton />
    </Root>
  );
}

export default Main;
