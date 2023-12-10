import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { NavNodeInfo } from '^/types';
import { texts } from '^/constants/texts';

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
      $url !== undefined
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
  text-decoration: none;
`;

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
}

export function NavigationNode({ depth, nodeInfo }: Props) {
  const text = texts[nodeInfo.id] ?? nodeInfo.id;
  const renderText = (() => {
    switch (depth) {
      case 0:
        return <h2>{text}</h2>;
      case 1:
        return <h3>{text}</h3>;
      case 2:
        return <span>{text}</span>;
      default:
        return null;
    }
  })();

  const renderMainBody = <Root $url={nodeInfo.linkTo}>{renderText}</Root>;

  return nodeInfo.linkTo !== undefined ? (
    <NoUnderlineLinkOnNotHover to={nodeInfo.linkTo}>
      {renderMainBody}
    </NoUnderlineLinkOnNotHover>
  ) : (
    renderMainBody
  );
}
