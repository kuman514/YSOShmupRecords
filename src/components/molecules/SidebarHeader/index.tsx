import React from 'react';
import styled from 'styled-components';

import { Button } from '^/components/atoms/Button';
import { MenuOpenCloseIcon } from '^/components/atoms/MenuButtonIcon';
import { ButtonType } from '^/types';

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 16px;
`;

interface Props {
  isNavigationOpen: boolean;
  onClickOpenOrCloseNavigationButton(): void;
}

export function SidebarHeader({
  isNavigationOpen,
  onClickOpenOrCloseNavigationButton,
}: Props) {
  return (
    <Root>
      <Button
        type={ButtonType.CLEAR}
        customStyle={{
          padding: '4px',
          borderRadius: '50%',
        }}
        isDisabled={false}
        onClick={onClickOpenOrCloseNavigationButton}
      >
        <MenuOpenCloseIcon isOpen={isNavigationOpen} />
      </Button>
    </Root>
  );
}
