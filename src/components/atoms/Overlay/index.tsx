import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh; /* old browsers */
  height: 100dvh; /* new browsers */

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
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return <Root onClick={onClick}>{children}</Root>;
}
