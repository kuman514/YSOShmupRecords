import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavNodeInfo } from '^/types';
import { NavItemButton } from '^/components/atoms/NavItemButton';

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
}

export function NavItemTree({ depth, nodeInfo }: Props) {
  const navigate = useNavigate();

  const isLeaf =
    nodeInfo.childNavNodes === undefined || nodeInfo.childNavNodes.length === 0;

  const handleOnClick = () => {
    if (isLeaf && nodeInfo.linkTo !== undefined) {
      navigate(nodeInfo.linkTo);
    }
  };

  const renderSubitems = !isLeaf
    ? nodeInfo.childNavNodes?.map((childNavNode) => (
        <NavItemTree
          key={childNavNode.id}
          depth={depth + 1}
          nodeInfo={childNavNode}
        />
      ))
    : null;

  return (
    <>
      <NavItemButton
        depth={depth}
        nodeInfo={nodeInfo}
        onClick={handleOnClick}
      />
      {renderSubitems}
    </>
  );
}
