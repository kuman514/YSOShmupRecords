import React, { useState } from 'react';
import styled from 'styled-components';

import { Chevron } from '^/components/atoms/Chevron';

const Root = styled.button`
  all: unset;

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
  }

  &:disabled {
    background: var(--main-color);
    color: var(--disabled-color);
    fill: var(--disabled-color);
  }
`;

interface Props {
  isDisabled: boolean;
}

export function NavItem({ isDisabled }: Props) {
  const [tmpIsActive, tmpSetIsActive] = useState<boolean>(false);

  return (
    <Root disabled={isDisabled} onClick={() => tmpSetIsActive(!tmpIsActive)}>
      <span>kuman514</span>
      <Chevron isOpen={tmpIsActive} fillColor="inherit" />
    </Root>
  );
}
