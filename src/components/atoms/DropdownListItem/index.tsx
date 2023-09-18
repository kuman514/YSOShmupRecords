import React from 'react';
import styled from 'styled-components';

const Root = styled.li`
  width: 240px;
`;

const Button = styled.button`
  border: unset;

  width: 100%;
  height: 100%;
  padding: 8px 15px;

  display: flex;
  align-items: center;

  color: var(--article-font-color);
  font-size: 12px;
  font-weight: 400;

  cursor: pointer;

  background: var(--active-color);

  &:hover {
    background: var(--hover-color);
  }

  &:disabled {
    background: var(--main-color);
  }
`;

interface Props {
  label: string;
  isSelected: boolean;
  onClick(): void;
}

export function DropdownListItem({ label, isSelected, onClick }: Props) {
  return (
    <Root>
      <Button disabled={isSelected} onClick={onClick}>
        {label}
      </Button>
    </Root>
  );
}
