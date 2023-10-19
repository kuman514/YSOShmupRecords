import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { texts } from '^/constants/texts';

const Root = styled.nav`
  padding: 10px 15px;
`;

const Crumbs = styled.ol`
  list-style-type: none;
  padding-left: 0;
`;

const CrumbItem = styled.li`
  display: inline-block;
  font-size: 36px;
  font-weight: 700;

  & + &::before {
    content: ' > ';
    white-space: pre;
  }
`;

export function NavRouteTitle() {
  const location = useLocation();
  const pathNameSplit = location.pathname
    .split('/')
    .filter((path) => path.length > 1);
  const renderTitle =
    pathNameSplit.length > 0 ? (
      pathNameSplit.map((navNodeId) => (
        <CrumbItem key={navNodeId}>{texts[navNodeId] ?? navNodeId}</CrumbItem>
      ))
    ) : (
      <CrumbItem>{texts['']}</CrumbItem>
    );
  return (
    <Root>
      <Crumbs>{renderTitle}</Crumbs>
    </Root>
  );
}
