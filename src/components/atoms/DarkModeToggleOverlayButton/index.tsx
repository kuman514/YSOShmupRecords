import React, { useEffect, useState } from 'react';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';
import { isDarkModeTurnedOn } from '^/constants/dark-mode';

export function DarkModeToggleOverlayButton() {
  const preferredTheme = window.matchMedia?.('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const [colorTheme, setColorTheme] = useState<string>(
    localStorage.getItem('yso-shmup-records-color-theme') ?? preferredTheme
  );

  function handleOnClickToggleColorTheme(newTheme: string) {
    localStorage.setItem('yso-shmup-records-color-theme', newTheme);
    setColorTheme(newTheme);
  }

  const renderLabel = isDarkModeTurnedOn[colorTheme]
    ? '다크 모드 끄기'
    : '다크 모드 켜기';

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
        zIndex: 10,
      }}
      isDisabled={false}
      onClick={() => {
        switch (colorTheme) {
          case 'light':
            handleOnClickToggleColorTheme('dark');
            break;
          case 'dark':
            handleOnClickToggleColorTheme('light');
            break;
          default:
            break;
        }
      }}
    >
      {renderLabel}
    </Button>
  );
}
