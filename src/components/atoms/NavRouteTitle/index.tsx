import React from 'react';
import styled from 'styled-components';

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

interface Props {
  navNodeIds: string[];
}

export function NavRouteTitle({ navNodeIds }: Props) {
  const renderTitle = navNodeIds.map((navNodeId) => (
    <CrumbItem key={navNodeId}>{navNodeId}</CrumbItem>
  ));
  return (
    <Root>
      <Crumbs>{renderTitle}</Crumbs>
    </Root>
  );
}
