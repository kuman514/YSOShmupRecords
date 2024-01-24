import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { NavNodeInfo } from '^/types';
import { textsForNavigation } from '^/constants/texts';

interface RootProps {
  $url?: string;
}

const Root = styled.div<RootProps>`
  & > * {
    color: #ffffff;

    font-style: normal;
    line-height: normal;

    transition: color 100ms linear;

    ${({ $url }) =>
      $url
        ? `
          &:hover {
            color: var(--hovering-color);
            text-decoration-line: underline;
          }
        `
        : ''}
  }

  & > h2 {
    font-size: 24px;
    font-weight: 600;
  }

  & > h3 {
    font-size: 20px;
    font-weight: 500;
  }

  & > span {
    font-size: 16px;
    font-weight: 200;
  }
`;

const NoUnderlineLinkOnNotHover = styled(Link)`
  all: inherit;
  cursor: pointer;
`;

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
}

export function NavigationNode({ depth, nodeInfo }: Props) {
  const text = textsForNavigation[nodeInfo.id] ?? nodeInfo.id;
  const renderLinkText = nodeInfo.linkTo ? (
    <NoUnderlineLinkOnNotHover to={nodeInfo.linkTo}>
      {text}
    </NoUnderlineLinkOnNotHover>
  ) : (
    text
  );

  const renderMainBody = (() => {
    switch (depth) {
      case 0:
        return <h2>{renderLinkText}</h2>;
      case 1:
        return <h3>{renderLinkText}</h3>;
      case 2:
        return <span>{renderLinkText}</span>;
      default:
        return null;
    }
  })();

  return <Root $url={nodeInfo.linkTo}>{renderMainBody}</Root>;
}
