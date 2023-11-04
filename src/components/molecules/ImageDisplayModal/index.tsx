import React from 'react';

import { ImageDisplay } from '^/components/atoms/ImageDisplay';
import { Overlay } from '^/components/atoms/Overlay';

interface Props {
  imageUrl: string;
  onExit(): void;
}

export function ImageDisplayModal({ imageUrl, onExit }: Props) {
  return (
    <Overlay onClick={onExit}>
      <ImageDisplay imageUrl={imageUrl} onClickClose={onExit} />
    </Overlay>
  );
}
