import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { NavNodeInfo } from '^/types';

interface RootProps {
  url?: string;
}

const Root = styled.div<RootProps>`
  & > * {
    color: #ffffff;
    font-family: Inter;
    font-style: normal;
    line-height: normal;

    animation: color 100ms linear;

    ${({ url }) =>
      url !== undefined
        ? `
          &:hover {
            color: #39FD72;
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

interface Props {
  depth: number;
  nodeInfo: NavNodeInfo;
}

export function NavigationNode({ depth, nodeInfo }: Props) {
  const renderText = (() => {
    if (depth === 0) {
      return <h2>{nodeInfo.id}</h2>;
    }

    if (
      nodeInfo.childNavNodes === undefined ||
      nodeInfo.childNavNodes.length === 0
    ) {
      return <span>{nodeInfo.id}</span>;
    }

    return <h3>{nodeInfo.id}</h3>;
  })();

  const renderMainBody = <Root url={nodeInfo.linkTo}>{renderText}</Root>;

  return nodeInfo.linkTo !== undefined ? (
    <Link to={nodeInfo.linkTo}>{renderMainBody}</Link>
  ) : (
    renderMainBody
  );
}
