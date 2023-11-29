import React from 'react';
import styled from 'styled-components';

import { NavigationTree } from '^/components/molecules/NavigationTree';
import { NavNodeInfo } from '^/types';

const Root = styled.div`
  width: 300px;
  height: 100vh;

  background: var(--main-color);

  overflow-x: hidden;
  overflow-y: auto;
`;

interface Props {
  rootNavNodes: NavNodeInfo[];
}

export function NavSidebar({ rootNavNodes }: Props) {
  const renderRootNavNodes = rootNavNodes.map((navNode) => (
    <NavigationTree key={navNode.id} depth={0} nodeInfo={navNode} />
  ));

  return <Root>{renderRootNavNodes}</Root>;
}
