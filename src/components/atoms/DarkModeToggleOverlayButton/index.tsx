import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { Button } from '^/components/atoms/Button';
import {
  COLOR_THEME_LOCAL_STORAGE_KEY,
  isDarkModeTurnedOn,
} from '^/constants/dark-mode';
import { ButtonType } from '^/types';
import { ReactComponent as RawSunSvgrepoSvg } from '^/assets/icons/sun-svgrepo-com.svg';
import { ReactComponent as RawMoonSvgrepoSvg } from '^/assets/icons/moon-svgrepo-com.svg';

const SunSvgrepoSvg = styled(RawSunSvgrepoSvg)`
  width: 36px;
  height: 36px;
  fill: var(--white-color);
`;

const MoonSvgrepoSvg = styled(RawMoonSvgrepoSvg)`
  width: 36px;
  height: 36px;
  fill: var(--white-color);
`;

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

  const renderIcon = isDarkModeTurnedOn[colorTheme] ? (
    <MoonSvgrepoSvg />
  ) : (
    <SunSvgrepoSvg />
  );

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', colorTheme);
  }, [colorTheme]);

  return (
    <Button
      type={ButtonType.CLEAR}
      customStyle={{
        padding: '4px',
        paddingBottom: 0,
        borderRadius: '50%',
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
      {renderIcon}
    </Button>
  );
}
