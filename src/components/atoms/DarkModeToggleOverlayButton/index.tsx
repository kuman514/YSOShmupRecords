import React, { useEffect, useState } from 'react';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

export function DarkModeToggleOverlayButton() {
  const preferredTheme = window.matchMedia?.('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const [colorTheme, setColorTheme] = useState<string>(
    document.documentElement.getAttribute('color-theme') ?? preferredTheme
  );

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', colorTheme);
  }, [colorTheme]);

  return (
    <Button
      type={ButtonType.ROUND_SOLID}
      customStyle={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
      }}
      isDisabled={false}
      onClick={() => {
        switch (colorTheme) {
          case 'light':
            setColorTheme('dark');
            break;
          case 'dark':
            setColorTheme('light');
            break;
          default:
            break;
        }
      }}
    >
      다크 모드 활성화
    </Button>
  );
}
