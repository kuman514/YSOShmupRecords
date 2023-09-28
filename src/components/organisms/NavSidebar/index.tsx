import React from 'react';
import styled from 'styled-components';

import { NavItemTree } from '^/components/molecules/NavItemTree';
import { rootNavNodes } from '^/constants';

const Root = styled.div`
  width: 300px;
  height: 100vh;

  background: var(--main-color);

  overflow-x: hidden;
  overflow-y: auto;
`;

export function NavSidebar() {
  const renderRootNavNodes = rootNavNodes.map((navNode) => (
    <NavItemTree key={navNode.id} depth={0} nodeInfo={navNode} />
  ));

  return <Root>{renderRootNavNodes}</Root>;
}
