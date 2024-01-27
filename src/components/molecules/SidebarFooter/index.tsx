import React from 'react';
import styled from 'styled-components';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  row-gap: 8px;
  column-gap: 20px;
  padding: 16px 16px 16px 32px;

  color: var(--white-color);

  font-size: 16px;
  font-weight: 300;
`;

const ContactButtonArray = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContactButtonWrapper = styled.div`
  padding: 0 10px;

  &:not(:last-of-type) {
    border-right: 1px solid var(--white-color);
  }
`;

export function SidebarFooter() {
  return (
    <Root>
      <div>YSO as kuman514</div>
      <ContactButtonArray>
        <ContactButtonWrapper>
          <Button
            type={ButtonType.CLEAR}
            isDisabled={false}
            onClick={() => {
              window.open(
                'https://open.kakao.com/me/YSOShmupRecords',
                '_blank'
              );
            }}
          >
            소통창구 (카카오 오픈채팅방)
          </Button>
        </ContactButtonWrapper>
      </ContactButtonArray>
    </Root>
  );
}
