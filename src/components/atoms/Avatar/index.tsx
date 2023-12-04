import React from 'react';
import styled from 'styled-components';

interface RootProps {
  pxSize: number;
}

const Root = styled.div<RootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: calc(${({ pxSize }) => pxSize}px / 2);
  width: ${({ pxSize }) => pxSize}px;
  height: ${({ pxSize }) => pxSize}px;
  background-color: var(--gray-color);
`;

const TmpPlaceholder = styled.span`
  color: #000000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
`;

interface Props {
  pxSize: number;
  // imageUrl: string;
}

/**
 * @todo
 * Add real image url for avatar
 * Make test cases for Avatar
 */

export function Avatar({ pxSize }: Props) {
  return (
    <Root pxSize={pxSize}>
      <TmpPlaceholder>Insert image here</TmpPlaceholder>
    </Root>
  );
}
