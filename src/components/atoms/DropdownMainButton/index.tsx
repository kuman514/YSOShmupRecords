import React from 'react';
import styled from 'styled-components';

import { Chevron } from '^/components/atoms/Chevron';

const Root = styled.button`
  border: unset;

  width: 240px;
  padding: 8px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  background: var(--active-color);
`;

const Label = styled.span`
  color: var(--article-font-color);
  font-size: 12px;
  font-weight: 400;
`;

interface Props {
  label: string;
  isOpen: boolean;
  onClick(): void;
}

export function DropdownMainButton({ label, isOpen, onClick }: Props) {
  return (
    <Root onClick={onClick}>
      <Label>{label}</Label>
      <Chevron isOpen={isOpen} fillColor="var(--article-font-color)" />
    </Root>
  );
}
