import React, { useEffect } from 'react';
import styled from 'styled-components';

import { navNodeInfo } from '^/constants';
import { NavSidebar } from '^/components/molecules/NavSidebar';
import { useNavNodeStore } from '^/stores/nav-node';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

function Main() {
  const rootNodeIds = useNavNodeStore((store) => store.rootNodeIds);
  const navNodeInfoById = useNavNodeStore((store) => store.navNodeInfoById);

  const setRootNodeIds = useNavNodeStore((store) => store.setRootNodeIds);
  const setNavNodeInfoById = useNavNodeStore(
    (store) => store.setNavNodeInfoById
  );

  useEffect(() => {
    /**
     * @todo
     * This should be changed into getting nav node info from backend.
     */
    setNavNodeInfoById(navNodeInfo);
    setRootNodeIds(['intro', 'criteria', 'records']);
  }, []);

  return (
    <Root>
      <NavSidebar navNodeInfo={navNodeInfoById} rootNavNodeIds={rootNodeIds} />
      <NavRouteTitle navNodeIds={['dodonpachi', 'c-shot']} />
    </Root>
  );
}

export default Main;
