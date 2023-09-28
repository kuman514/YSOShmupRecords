import React, { useState } from 'react';
import styled from 'styled-components';

// import { navNodeInfo } from '^/constants';
import { NavSidebar } from '^/components/organisms/NavSidebar';
// import { useNavNodeStore } from '^/stores/nav-node';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { RecordDropdown } from '^/components/molecules/RecordDropdown';
import { DropdownOption } from '^/types';

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

function Main() {
  const [tmpSelectedOption, setTmpSelectedOption] = useState<DropdownOption>({
    id: '20230926',
    when: new Date('Sep 26 2023'),
  });

  // useEffect(() => {
  //   /**
  //    * @todo
  //    * This should be changed into getting nav node info from backend.
  //    */
  //   setNavNodeInfoById(navNodeInfo);
  //   setRootNodeIds(['intro', 'criteria', 'records']);
  // }, []);

  return (
    <Root>
      <NavSidebar />
      <div>
        <NavRouteTitle navNodeIds={['dodonpachi', 'c-shot']} />
        <RecordDropdown
          selectedOption={tmpSelectedOption}
          options={[
            {
              id: '20230926',
              when: new Date('Sep 26 2023'),
            },
            {
              id: '20230816',
              when: new Date('Aug 16 2023'),
            },
            {
              id: '20230710',
              when: new Date('Jul 10 2023'),
            },
          ]}
          onSelect={setTmpSelectedOption}
        />
        <div>Lorem Ipsum Dolor Sit Amet</div>
      </div>
    </Root>
  );
}

export default Main;
