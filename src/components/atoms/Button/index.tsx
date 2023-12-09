import React, { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

import { ButtonType } from '^/types';

const backgroundColorByType: Record<ButtonType, string> = {
  [ButtonType.SOLID]: 'var(--primary-color)',
  [ButtonType.LINE]: 'transparent',
  [ButtonType.ROUND_SOLID]: 'var(--primary-color)',
  [ButtonType.ROUND_LINE]: 'transparent',
  [ButtonType.CLEAR]: 'transparent',
};

const colorByType: Record<ButtonType, string> = {
  [ButtonType.SOLID]: '#ffffff',
  [ButtonType.LINE]: 'var(--primary-color)',
  [ButtonType.ROUND_SOLID]: '#ffffff',
  [ButtonType.ROUND_LINE]: 'var(--primary-color)',
  [ButtonType.CLEAR]: '#ffffff',
};

const borderByType: Record<ButtonType, string> = {
  [ButtonType.SOLID]: '1px solid var(--primary-color)',
  [ButtonType.LINE]: '1px solid var(--primary-color)',
  [ButtonType.ROUND_SOLID]: '1px solid var(--primary-color)',
  [ButtonType.ROUND_LINE]: '1px solid var(--primary-color)',
  [ButtonType.CLEAR]: 'none',
};

const borderRadiusByType: Record<ButtonType, string> = {
  [ButtonType.SOLID]: '4px',
  [ButtonType.LINE]: '4px',
  [ButtonType.ROUND_SOLID]: '16px',
  [ButtonType.ROUND_LINE]: '16px',
  [ButtonType.CLEAR]: '16px',
};

const disabledColorByType: Record<ButtonType, string> = {
  [ButtonType.SOLID]: '#ffffff',
  [ButtonType.LINE]: '#ffffff',
  [ButtonType.ROUND_SOLID]: '#ffffff',
  [ButtonType.ROUND_LINE]: '#ffffff',
  [ButtonType.CLEAR]: 'var(--gray-color)',
};

const disabledBackgroundColorByType: Record<ButtonType, string> = {
  [ButtonType.SOLID]: 'var(--gray-color)',
  [ButtonType.LINE]: 'var(--gray-color)',
  [ButtonType.ROUND_SOLID]: 'var(--gray-color)',
  [ButtonType.ROUND_LINE]: 'var(--gray-color)',
  [ButtonType.CLEAR]: 'transparent',
};

const disabledTextDecorationLineByType: Record<ButtonType, string> = {
  [ButtonType.SOLID]: 'none',
  [ButtonType.LINE]: 'none',
  [ButtonType.ROUND_SOLID]: 'none',
  [ButtonType.ROUND_LINE]: 'none',
  [ButtonType.CLEAR]: 'line-through',
};

interface RootProps {
  $type: ButtonType;
}

const Root = styled.button<RootProps>`
  all: unset;
  box-sizing: border-box;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;

  padding: 8px 16px;

  color: ${({ $type }) => colorByType[$type]};
  background-color: ${({ $type }) => backgroundColorByType[$type]};
  border: ${({ $type }) => borderByType[$type]};
  border-radius: ${({ $type }) => borderRadiusByType[$type]};

  cursor: pointer;

  &:hover {
    background-color: var(--hovering-color);
    color: #ffffff;
  }

  &:disabled {
    border: none;
    color: ${({ $type }) => disabledColorByType[$type]};
    background-color: ${({ $type }) => disabledBackgroundColorByType[$type]};
    text-decoration: ${({ $type }) => disabledTextDecorationLineByType[$type]};
  }
`;

interface Props {
  type: ButtonType;
  children?: ReactNode;
  isDisabled: boolean;
  customStyle?: CSSProperties;
  onClick(): void;
}

export function Button({
  type,
  children,
  isDisabled,
  customStyle,
  onClick,
}: Props) {
  return (
    <Root
      $type={type}
      style={customStyle}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </Root>
  );
}
