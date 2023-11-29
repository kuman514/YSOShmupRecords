import React from 'react';
import styled from 'styled-components';

import { NavNodeInfo } from '^/types';
import { NavigationForest } from '^/components/molecules/NavigationForest';

const Root = styled.div`
  height: 100vh;

  background: var(--main-color);

  overflow-x: hidden;
  overflow-y: auto;
`;

interface Props {
  rootNavNodes: NavNodeInfo[];
}

export function Sidebar({ rootNavNodes }: Props) {
  return (
    <Root>
      <NavigationForest rootNavNodes={rootNavNodes} />
    </Root>
  );
}
