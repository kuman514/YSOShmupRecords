import React from 'react';
import styled from 'styled-components';

import { ImageZoomAndMoveController } from '^/components/molecules/ImageZoomAndMoveController';
import { Overlay } from '^/components/atoms/Overlay';
import { Button } from '^/components/atoms/Button';
import { MenuOpenCloseIcon } from '^/components/atoms/MenuOpenCloseIcon';
import { ButtonType } from '^/types';

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
`;

interface Props {
  imageUrl: string;
  onExit(): void;
}

export function ImageDisplayModal({ imageUrl, onExit }: Props) {
  return (
    <Overlay>
      <ImageZoomAndMoveController imageUrl={imageUrl} />
      <CloseButtonWrapper>
        <Button
          type={ButtonType.CLEAR}
          customStyle={{
            padding: '4px',
            borderRadius: '50%',
          }}
          isDisabled={false}
          onClick={onExit}
        >
          <MenuOpenCloseIcon isOpen />
        </Button>
      </CloseButtonWrapper>
    </Overlay>
  );
}
