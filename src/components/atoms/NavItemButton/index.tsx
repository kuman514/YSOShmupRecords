import React from 'react';
import styled from 'styled-components';

import { Chevron } from '^/components/atoms/Chevron';
import { NavNodeInfo } from '^/types';
import { useNavNodeStore } from '^/stores/nav-node';
import { texts } from '^/constants/texts';

interface RootProps {
  /**
   * Added `$` in front of camelCase properties
   * to prevent warnings like "React does not recognize the `isActive` prop on a DOM element."
   */
  $isActive: boolean;
}

const Root = styled.button<RootProps>`
  border: unset;

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
`;

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
  onClick(): void;
}

export function NavItemButton({ depth, nodeInfo, onClick }: Props) {
  const isOpen = useNavNodeStore((store) => store.isOpen[nodeInfo.id]);

  const isLeaf =
    nodeInfo.childNavNodes === undefined || nodeInfo.childNavNodes.length === 0;
  /**
   * @todo
   * Add `isSelected`, which determines if this item is in the route.
   */
  const isActive = isOpen;

  const renderChevron = !isLeaf ? (
    <Chevron isOpen={isOpen} fillColor="inherit" />
  ) : null;

  return (
    <Root $isActive={isActive} onClick={onClick}>
      <span
        style={{
          paddingLeft: depth * 15,
        }}
      >
        {texts[nodeInfo.id] ?? nodeInfo.id}
      </span>
      {renderChevron}
    </Root>
  );
}
