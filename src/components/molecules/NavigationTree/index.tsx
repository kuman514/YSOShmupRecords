import React from 'react';

import { NavNodeInfo } from '^/types';
import { NavigationNode } from '^/components/atoms/NavigationNode';

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
}

export function NavigationTree({ depth, nodeInfo }: Props) {
  const isHavingChildren =
    nodeInfo.childNavNodes === undefined || nodeInfo.childNavNodes.length === 0;

  const renderSubtrees = !isHavingChildren
    ? nodeInfo.childNavNodes?.map((childNavNode) => (
        <NavigationTree
          key={childNavNode.id}
          depth={depth + 1}
          nodeInfo={childNavNode}
        />
      ))
    : null;

  return (
    <div
      style={{
        paddingLeft: depth * 16,
      }}
    >
      <NavigationNode depth={depth} nodeInfo={nodeInfo} />
      {renderSubtrees}
    </div>
  );
}
