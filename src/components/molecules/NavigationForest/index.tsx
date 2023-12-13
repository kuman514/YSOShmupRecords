import React from 'react';
import styled from 'styled-components';

import { NavigationTree } from '^/components/molecules/NavigationTree';
import { NavNodeInfo } from '^/types';

const Root = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;

  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TreeContainer = styled.div`
  width: 300px;
  height: 100%;

  border-right: 1px solid #ffffff;

  padding-left: 16px;
  padding-right: 16px;

  &:last-of-type {
    border: none;
  }

  @media (max-width: 1000px) {
    width: min(300px, 100%);
    border-right: none;
  }
`;

interface Props {
  rootNavNodes: NavNodeInfo[];
  onClickNavigationNode(): void;
}

export function NavigationForest({
  rootNavNodes,
  onClickNavigationNode,
}: Props) {
  const renderRootNavNodes = rootNavNodes.map((navNode) => (
    <TreeContainer key={navNode.id}>
      <NavigationTree depth={0} nodeInfo={navNode} />
    </TreeContainer>
  ));

  return (
    <Root
      onClick={(event) => {
        if (
          event.target instanceof HTMLElement &&
          event.target.nodeName === 'A'
        ) {
          onClickNavigationNode();
        }
      }}
    >
      {renderRootNavNodes}
    </Root>
  );
}
