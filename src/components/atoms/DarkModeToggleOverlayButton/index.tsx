import React, { useEffect, useState } from 'react';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';
import {
  COLOR_THEME_LOCAL_STORAGE_KEY,
  isDarkModeTurnedOn,
} from '^/constants/dark-mode';

export function DarkModeToggleOverlayButton() {
  const preferredTheme = window.matchMedia?.('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const [colorTheme, setColorTheme] = useState<string>(
    localStorage.getItem(COLOR_THEME_LOCAL_STORAGE_KEY) ?? preferredTheme
  );

  function handleOnClickToggleColorTheme(newTheme: string) {
    localStorage.setItem(COLOR_THEME_LOCAL_STORAGE_KEY, newTheme);
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
