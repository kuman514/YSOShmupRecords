import React from 'react';
import styled, { CSSProp } from 'styled-components';

interface RootProps {
  width?: CSSProp;
  height?: CSSProp;
  borderRadius?: CSSProp;
}

const Root = styled.div<RootProps>`
  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    50%,
    100% {
      transform: translateX(100%);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #e2e2e2, #b6b6b6, #e2e2e2);
    animation: loading 1000ms ease-in-out infinite;
  }

  overflow: hidden;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: #e2e2e2;
`;

interface Props extends RootProps {}

export function Skeleton({ width, height, borderRadius }: Props) {
  return <Root width={width} height={height} borderRadius={borderRadius} />;
}
