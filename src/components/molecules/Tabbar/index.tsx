import styled from 'styled-components';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

const Root = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-direction: row;
`;

interface Props {
  tabNames: string[];
  currentTabIndex: number;
  onClick(tabIndex: number): void;
}

export function Tabbar({ tabNames, currentTabIndex, onClick }: Props) {
  return (
    <Root>
      {tabNames.map((tabName, index) => (
        <Button
          key={`tab-${tabName}`}
          type={ButtonType.CLEAR}
          isDisabled={false}
          onClick={() => {
            onClick(index);
          }}
          customStyle={{
            minHeight: '100%',
            borderRadius: 0,
            textAlign: 'center',
            borderTop:
              currentTabIndex === index ? 'solid 3px transparent' : 'none',
            borderBottom:
              currentTabIndex === index
                ? 'solid 3px var(--primary-color)'
                : 'none',
            wordBreak: 'keep-all',
            flexGrow: 1,
          }}
        >
          {tabName}
        </Button>
      ))}
    </Root>
  );
}
