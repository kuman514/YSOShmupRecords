import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.75);

  display: flex;
  justify-content: center;
  align-items: center;

  touch-action: none;

  z-index: 20;
`;

interface Props {
  children?: ReactNode;
  onClick?(): void;
}

export function Overlay({ children, onClick }: Props) {
  return <Root onClick={onClick}>{children}</Root>;
}
