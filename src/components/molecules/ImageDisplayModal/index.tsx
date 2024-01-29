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

const NextPrevButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;

  & * {
    pointer-events: fill;
  }
`;

const NextPrevButton = styled.div`
  width: 30%;
  max-width: 300px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white-color);

  font-size: 24px;
  font-weight: 700;
`;

interface Props {
  imageUrls: string[];
  onExit(): void;
}

export function ImageDisplayModal({ imageUrls, onExit }: Props) {
  const [index, setIndex] = useState<number>(0);

  const renderNextPrevButtonWrapper =
    imageUrls.length > 1 ? (
      <NextPrevButtonWrapper>
        <NextPrevButton
          id="prev-image-button"
          onClick={() => {
            const newIndex = (index - 1 + imageUrls.length) % imageUrls.length;
            setIndex(newIndex);
          }}
        >
          {'<'}
        </NextPrevButton>
        <NextPrevButton
          id="next-image-button"
          onClick={() => {
            const newIndex = (index + 1) % imageUrls.length;
            setIndex(newIndex);
          }}
        >
          {'>'}
        </NextPrevButton>
      </NextPrevButtonWrapper>
    ) : null;

  return (
    <Overlay>
      <ImageZoomAndMoveController imageUrl={imageUrls[index]} />
      {renderNextPrevButtonWrapper}
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
