import React from 'react';
import styled from 'styled-components';

import { NavNodeInfo } from '^/types';
import { NavigationNode } from '^/components/atoms/NavigationNode';

const Root = styled.div`
  padding-top: 12px;
`;

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
}

export function NavigationTree({ depth, nodeInfo }: Props) {
  const renderSubtrees =
    nodeInfo.childNavNodes && nodeInfo.childNavNodes.length > 0
      ? nodeInfo.childNavNodes.map((childNavNode) => (
          <NavigationTree
            key={childNavNode.id}
            depth={depth + 1}
            nodeInfo={childNavNode}
          />
        ))
      : null;

  return (
    <>
      <Root
        style={{
          paddingLeft: depth * 16,
        }}
      >
        <NavigationNode depth={depth} nodeInfo={nodeInfo} />
      </Root>
      {renderSubtrees}
    </>
  );
}
