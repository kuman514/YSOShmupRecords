import React from 'react';
import styled from 'styled-components';

import { NavItem } from '^/components/atoms/NavItem';
import { NavNodeInfo } from '^/types';

const Root = styled.div`
  width: 300px;
  height: 100vh;

  background: var(--main-color);

  overflow-x: hidden;
  overflow-y: auto;
`;

interface Props {
  rootNavNodeIds: NavNodeInfo['id'][];
  navNodeInfo: Record<string, NavNodeInfo>;
}

export function NavSidebar({ rootNavNodeIds, navNodeInfo }: Props) {
  const renderRootNavNodes = rootNavNodeIds.map((id) => (
    <NavItem
      navNodeInfo={navNodeInfo}
      key={id}
      depth={0}
      onClick={() => {}}
      isDisabled={false}
      nodeInfo={navNodeInfo[id]}
    />
  ));

  return <Root>{renderRootNavNodes}</Root>;
}
