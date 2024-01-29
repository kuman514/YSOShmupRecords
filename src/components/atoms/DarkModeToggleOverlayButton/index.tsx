import React from 'react';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

interface Props {
  onClick(): void;
}

export function DarkModeToggleOverlayButton({ onClick }: Props) {
  return (
    <Button
      type={ButtonType.ROUND_SOLID}
      customStyle={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
      }}
      isDisabled={false}
      onClick={onClick}
    >
      다크 모드 활성화
    </Button>
  );
}
