import React, { useState } from 'react';
import styled from 'styled-components';

import { NavNodeInfo } from '^/types';
import { NavigationForest } from '^/components/molecules/NavigationForest';
import { SidebarFooter } from '^/components/molecules/SidebarFooter';
import { SidebarHeader } from '^/components/molecules/SidebarHeader';
import { TitleWithAvatar } from '^/components/molecules/TitleWithAvatar';

const Root = styled.div`
  height: 100%;

  display: grid;
  grid-template-rows: auto 1fr auto;

  background: var(--primary-color);
`;

const CenterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <CenterWrapper>{renderCenter}</CenterWrapper>
      <SidebarFooter />
    </Root>
  );
}
