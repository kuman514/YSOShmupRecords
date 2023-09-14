import React from 'react';
import styled from 'styled-components';

import { Chevron } from '^/components/atoms/Chevron';
import { NavNodeInfo } from '^/types';
import { navNodeInfo } from '^/constants';
import { useNavNodeStore } from '^/stores/nav-node';

interface RootProps {
  /**
   * Added `$` in front of camelCase properties
   * to prevent warnings like "React does not recognize the `isActive` prop on a DOM element."
   */
  $isActive: boolean;
}

const Root = styled.button<RootProps>`
  all: unset;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  height: 50px;
  padding: 0px 15px;

  background: ${({ $isActive }) =>
    $isActive ? 'var(--active-color)' : 'var(--main-color)'};
  color: ${({ $isActive }) =>
    $isActive ? 'var(--main-color)' : 'var(--nav-nonactive-font-color)'};
  fill: ${({ $isActive }) =>
    $isActive ? 'var(--main-color)' : 'var(--nav-nonactive-font-color)'};

  cursor: pointer;

  &:hover {
    background: var(--hover-color);
    color: var(--nav-nonactive-font-color);
    fill: var(--nav-nonactive-font-color);
  }

  &:disabled {
    background: var(--main-color);
    color: var(--disabled-color);
    fill: var(--disabled-color);
  }
`;

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
  isDisabled: boolean;
  onClick?(): void;
}

export function NavItem({ depth, nodeInfo, isDisabled, onClick }: Props) {
  const isOpen = useNavNodeStore((store) => store.isOpen[nodeInfo.id]);
  const setIsOpen = useNavNodeStore((store) => store.setIsOpen);

  const isLeaf = nodeInfo.childNavNodeIds.length === 0;
  /**
   * @todo
   * Add `isSelected`, which determines if this item is in the route.
   */
  const isActive = isOpen;

  const handleOnClick = () => {
    onClick?.();
    if (!isLeaf) {
      setIsOpen(nodeInfo.id, !isOpen);
    }
  };

  const renderChevron = !isLeaf ? (
    <Chevron isOpen={isOpen} fillColor="inherit" />
  ) : null;

  const renderSubitems =
    !isLeaf && isOpen
      ? nodeInfo.childNavNodeIds.map((id) => (
          <NavItem
            key={navNodeInfo[id].id}
            depth={depth + 1}
            /**
             * @todo
             * Add route moving if this child node is a leaf
             */
            onClick={() => {}}
            isDisabled={false}
            nodeInfo={navNodeInfo[id]}
          />
        ))
      : null;

  return (
    <>
      <Root $isActive={isActive} disabled={isDisabled} onClick={handleOnClick}>
        <span
          style={{
            paddingLeft: depth * 15,
          }}
        >
          {nodeInfo.label}
        </span>
        {renderChevron}
      </Root>
      {renderSubitems}
    </>
  );
}
