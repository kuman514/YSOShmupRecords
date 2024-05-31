import styled from 'styled-components';

import { NavigationForest } from '^/components/molecules/NavigationForest';
import { SidebarFooter } from '^/components/molecules/SidebarFooter';
import { SidebarHeader } from '^/components/molecules/SidebarHeader';
import { NavNodeInfo } from '^/types';
import { Overlay } from '^/components/atoms/Overlay';

const Root = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Container = styled.div`
  width: fit-content;
  height: 100%;

  display: grid;
  grid-template-rows: auto 1fr auto;

  background: var(--primary-color);
`;

interface Props {
  isNavigationOpen: boolean;
  rootNavNodes: NavNodeInfo[];
  onClickCloseNavigationButton(): void;
}

export function NavigationSidebar({
  isNavigationOpen,
  rootNavNodes,
  onClickCloseNavigationButton,
}: Props) {
  return isNavigationOpen ? (
    <Overlay>
      <Root>
        <Container>
          <SidebarHeader
            isNavigationOpen
            onClickOpenOrCloseNavigationButton={onClickCloseNavigationButton}
          />
          <NavigationForest
            onClickNavigationNode={onClickCloseNavigationButton}
            rootNavNodes={rootNavNodes}
          />
          <SidebarFooter />
        </Container>
      </Root>
    </Overlay>
  ) : null;
}
