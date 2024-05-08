import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { textsForArticle } from '^/constants/texts';

const Crumbs = styled.ol`
  list-style-type: none;
  padding-left: 0;
`;

const CrumbItem = styled.li`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;

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

  return pathNameSplit.length > 0 ? (
    <nav>
      <Crumbs>
        {pathNameSplit.map((navNodeId) => (
          <CrumbItem key={navNodeId}>
            {textsForArticle[navNodeId] ?? navNodeId}
          </CrumbItem>
        ))}
      </Crumbs>
    </nav>
  ) : null;
}
