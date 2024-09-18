import { styled } from 'styled-components';

import RawChatCircleDotsSvgrepoSvg from '^/assets/icons/chat-circle-dots-svgrepo-com.svg?react';
import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';

const ChatCircleDotsSvgrepoSvg = styled(RawChatCircleDotsSvgrepoSvg)`
  width: 36px;
  height: 36px;
  stroke: var(--white-color);
`;

interface Props {
  onClick(): void;
}

export function ContactButton({ onClick }: Props) {
  return (
    <Button
      type={ButtonType.ROUND_SOLID}
      customStyle={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 21,
        width: '64px',
        height: '64px',
        padding: 0,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      isDisabled={false}
      onClick={onClick}
    >
      <ChatCircleDotsSvgrepoSvg />
    </Button>
  );
}
