import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavNodeInfo } from '^/types';
import { NavItemButton } from '^/components/atoms/NavItemButton';

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
  linkTo: string;
}

export function NavItemTree({ depth, nodeInfo, linkTo }: Props) {
  const navigate = useNavigate();

  const isLeaf =
    nodeInfo.childNavNodes === undefined || nodeInfo.childNavNodes.length === 0;

  const handleOnClick = () => {
    if (isLeaf) {
      navigate(linkTo);
    }
  };

  const renderSubitems = !isLeaf
    ? nodeInfo.childNavNodes?.map((childNavNode) => (
        <NavItemTree
          key={childNavNode.id}
          depth={depth + 1}
          nodeInfo={childNavNode}
          linkTo={`${linkTo}/${childNavNode.id}`}
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
