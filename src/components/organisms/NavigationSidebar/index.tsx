import styled from 'styled-components';

import { NavigationForest } from '^/components/molecules/NavigationForest';
import { SidebarFooter } from '^/components/molecules/SidebarFooter';
import { SidebarHeader } from '^/components/molecules/SidebarHeader';
import { NavNodeInfo } from '^/types';

const Root = styled.div`
  height: 100%;

  display: grid;
  grid-template-rows: auto 1fr auto;

  background: var(--primary-color);
`;

interface Props {
  rootNavNodes: NavNodeInfo[];
}

export function NavigationSidebar({ rootNavNodes }: Props) {
  return (
    <Root>
      <SidebarHeader
        isNavigationOpen
        onClickOpenOrCloseNavigationButton={() => {}}
      />
      <NavigationForest
        onClickNavigationNode={() => {}}
        rootNavNodes={rootNavNodes}
      />
      <SidebarFooter />
    </Root>
  );
}
