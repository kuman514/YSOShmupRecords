import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '^/components/organisms/Sidebar';
import { rootNavNodes } from '^/constants/nav-node';
import { DarkModeToggleOverlayButton } from '^/components/atoms/DarkModeToggleOverlayButton';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;

  @media (max-width: 1000px) {
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

const OutletPositionHolder = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

const OutletContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 720px;
  padding-top: 72px;
  padding-bottom: 72px;
`;

function Main() {
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
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
    <Root>
      <Sidebar rootNavNodes={rootNavNodes} />
      <OutletPositionHolder>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </OutletPositionHolder>
      <DarkModeToggleOverlayButton
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
      />
    </Root>
  );
}

export default Main;
