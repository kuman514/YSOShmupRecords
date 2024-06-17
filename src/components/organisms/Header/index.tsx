import styled from 'styled-components';

import { Button } from '^/components/atoms/Button';
import { DarkModeToggleButton } from '^/components/atoms/DarkModeToggleButton';
import { MenuOpenCloseIcon } from '^/components/atoms/MenuOpenCloseIcon';
import { ButtonType } from '^/types';

const Root = styled.div`
  width: 100%;
  height: 60px;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 19;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 8px;

  background: var(--primary-color);
`;

const Title = styled.h1`
  color: var(--white-color);

  font-size: clamp(16px, 3.6vw, 36px);
  font-weight: 200;
`;

interface Props {
  onClickOpenOrCloseNavigationButton(): void;
}

export function Header({ onClickOpenOrCloseNavigationButton }: Props) {
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
        <MenuOpenCloseIcon isOpen={false} />
      </Button>
      <Title>YSOShmupRecords</Title>
      <DarkModeToggleButton />
    </Root>
  );
}
