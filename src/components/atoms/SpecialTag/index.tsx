import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.span`
  padding: 4px 8px;
  justify-content: center;
  align-items: center;

  background-color: var(--gray-color);
  border-radius: 4px;

  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
`;

interface Props {
  children?: ReactNode;
}

export function SpecialTag({ children }: Props) {
  return <Root>{children}</Root>;
}
