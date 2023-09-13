import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Chevron } from '^/components/atoms/Chevron';

interface RootProps {
  isActive: boolean;
}

const Root = styled.button<RootProps>`
  all: unset;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  height: 50px;
  padding: 0px 15px;

  background: ${({ isActive }) =>
    isActive ? 'var(--active-color)' : 'var(--main-color)'};
  color: ${({ isActive }) =>
    isActive ? 'var(--main-color)' : 'var(--nav-nonactive-font-color)'};
  fill: ${({ isActive }) =>
    isActive ? 'var(--main-color)' : 'var(--nav-nonactive-font-color)'};

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
  isActive: boolean;
  isDisabled: boolean;
  children?: ReactNode;
  onClick(): void;
}

export function NavItem({ isActive, isDisabled, children, onClick }: Props) {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <Root isActive={isActive} disabled={isDisabled} onClick={handleOnClick}>
      <span>{children}</span>
      <Chevron isOpen={isActive} fillColor="inherit" />
    </Root>
  );
}
