import React from 'react';

import { NavNodeInfo } from '^/types';
import { useNavNodeStore } from '^/stores/nav-node';
import { NavItemButton } from '^/components/atoms/NavItemButton';

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
}

export function NavItemTree({ depth, nodeInfo }: Props) {
  const isOpen = useNavNodeStore((store) => store.isOpen[nodeInfo.id]);
  const setIsOpen = useNavNodeStore((store) => store.setIsOpen);

  const isLeaf = nodeInfo.childNavNodes.length === 0;

  const handleOnClick = () => {
    if (isLeaf) {
      /**
       * @todo
       * Add route moving if this child node is a leaf
       */
    } else {
      setIsOpen(nodeInfo.id, !isOpen);
    }
  };

  const renderSubitems =
    !isLeaf && isOpen
      ? nodeInfo.childNavNodes.map((childNavNode) => (
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
