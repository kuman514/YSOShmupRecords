import React from 'react';
import styled from 'styled-components';

import { NavNodeInfo } from '^/types';
import { texts } from '^/constants/texts';

const Root = styled.button`
  border: unset;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  height: 50px;
  padding: 0px 15px;

  background: var(--main-color);
  color: var(--nav-nonactive-font-color);
  fill: var(--nav-nonactive-font-color);

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
  return (
    <Root onClick={onClick}>
      <span
        style={{
          paddingLeft: depth * 15,
        }}
      >
        {texts[nodeInfo.id] ?? nodeInfo.id}
      </span>
    </Root>
  );
}
