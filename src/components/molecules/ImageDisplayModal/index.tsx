import React, { useState } from 'react';
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
  imageUrls: string[];
  onExit(): void;
}

export function ImageDisplayModal({ imageUrls, onExit }: Props) {
  /**
   * @todo
   * Make going to prev/next image
   */
  const [index] = useState<number>(0);

  return (
    <Overlay>
      <ImageZoomAndMoveController imageUrl={imageUrls[index]} />
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
