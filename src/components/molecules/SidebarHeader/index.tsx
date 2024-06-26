import styled from 'styled-components';

import { Button } from '^/components/atoms/Button';
import { MenuOpenCloseIcon } from '^/components/atoms/MenuOpenCloseIcon';
import { ButtonType } from '^/types';

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
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
