import React, { useState } from 'react';
import styled from 'styled-components';

import { NavNodeInfo } from '^/types';
import { NavigationForest } from '^/components/molecules/NavigationForest';
import { SidebarFooter } from '^/components/molecules/SidebarFooter';
import { SidebarHeader } from '^/components/molecules/SidebarHeader';
import { TitleWithAvatar } from '^/components/molecules/TitleWithAvatar';

const Root = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  background: var(--main-color);
`;

interface Props {
  rootNavNodes: NavNodeInfo[];
}

export function Sidebar({ rootNavNodes }: Props) {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  const renderCenter = isNavigationOpen ? (
    <NavigationForest rootNavNodes={rootNavNodes} />
  ) : (
    <TitleWithAvatar />
  );

  return (
    <Root>
      <SidebarHeader
        isNavigationOpen={isNavigationOpen}
        onClickOpenOrCloseNavigationButton={() => {
          setIsNavigationOpen(!isNavigationOpen);
        }}
      />
      {renderCenter}
      <SidebarFooter />
    </Root>
  );
}
