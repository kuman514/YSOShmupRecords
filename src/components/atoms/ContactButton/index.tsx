import { styled } from 'styled-components';

import { Button } from '^/components/atoms/Button';
import { ButtonType } from '^/types';
import { ReactComponent as RawChatCircleDotsSvgrepoSvg } from '^/assets/icons/chat-circle-dots-svgrepo-com.svg';

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
        bottom: '32px',
        right: '32px',
        zIndex: 21,
        width: '48px',
        height: '48px',
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
