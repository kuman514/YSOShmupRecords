import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavNodeInfo } from '^/types';
import { useNavNodeStore } from '^/stores/nav-node';
import { NavItemButton } from '^/components/atoms/NavItemButton';

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
  linkTo: string;
}

export function NavItemTree({ depth, nodeInfo, linkTo }: Props) {
  const isOpen = useNavNodeStore((store) => store.isOpen[nodeInfo.id]);
  const setIsOpen = useNavNodeStore((store) => store.setIsOpen);
  const navigate = useNavigate();

  const isLeaf =
    nodeInfo.childNavNodes === undefined || nodeInfo.childNavNodes.length === 0;

  const handleOnClick = () => {
    if (isLeaf) {
      navigate(linkTo);
    } else {
      setIsOpen(nodeInfo.id, !isOpen);
    }
  };

  const renderSubitems =
    !isLeaf && isOpen
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
