import React, { useEffect } from 'react';
import styled from 'styled-components';

import { navNodeInfo } from '^/constants';
import { NavSidebar } from '^/components/molecules/NavSidebar';
import { useNavNodeStore } from '^/stores/nav-node';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { DropdownListItem } from '^/components/atoms/DropdownListItem';
import { DropdownMainButton } from '^/components/atoms/DropdownMainButton';

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
      <div>
        <NavRouteTitle navNodeIds={['dodonpachi', 'c-shot']} />
        <DropdownMainButton
          label="kuman514"
          isOpen={false}
          onClick={() => {}}
        />
        <DropdownMainButton label="kuman514" isOpen onClick={() => {}} />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <DropdownListItem
            label="kuman514"
            isSelected={false}
            onClick={() => {}}
          />
          <DropdownListItem label="kuman514" isSelected onClick={() => {}} />
        </ul>
      </div>
    </Root>
  );
}

export default Main;
