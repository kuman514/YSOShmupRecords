import React, { useState } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;
  cursor: grab;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  touch-action: pan-x pan-y pinch-zoom;
`;

interface Props {
  imageUrl: string;
}

export function ImageZoomAndMoveController({ imageUrl }: Props) {
  const [position, setPosition] = useState<number[]>([0, 0]);
  const [scale, setScale] = useState<number>(1);

  function moveImage(dx: number, dy: number) {
    setPosition([
      position[0] + dx * (1 / scale),
      position[1] + dy * (1 / scale),
    ]);
  }

  return (
    <Root
      onClick={(event) => {
        event.stopPropagation();
        event.nativeEvent.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
      }}
      onWheel={(event) => {
        const newScale = scale - event.deltaY * 0.01;
        const finalScale = Math.min(Math.max(0.3, newScale), 10);
        setScale(finalScale);
      }}
      onMouseMove={(event) => {
        if (event.buttons !== 1) {
          return;
        }
        moveImage(event.movementX, event.movementY);
      }}
    >
      <Image
        src={imageUrl}
        alt="Record image in expanded contain size"
        style={{
          transform: `scale(${scale}) translate(${position[0]}px, ${position[1]}px)`,
        }}
      />
    </Root>
  );
}
