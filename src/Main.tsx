import React, { useEffect } from 'react';
import styled from 'styled-components';

import { navNodeInfo } from '^/constants';
import { NavSidebar } from '^/components/molecules/NavSidebar';
import { useNavNodeStore } from '^/stores/nav-node';

const Root = styled.div`
  width: 100vw;
  height: 100vh;
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
    </Root>
  );
}

export default Main;
