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
`;

interface Props {
  imageUrl: string;
}

export function ImageZoomAndMoveController({ imageUrl }: Props) {
  const [recentTouchDist, setRecentTouchDist] = useState<number>(-1);
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
        const newScale = scale - event.deltaY * 0.001;
        const finalScale = Math.min(Math.max(0.3, newScale), 10);
        setScale(finalScale);
      }}
      onMouseMove={(event) => {
        if (event.buttons !== 1) {
          return;
        }
        moveImage(event.movementX, event.movementY);
      }}
      onTouchStart={(touchStartEvent) => {
        function handleOnTouchMove(touchMoveEvent: TouchEvent) {
          if (touchMoveEvent.cancelable) {
            touchMoveEvent.preventDefault();
          }

          const deltaX =
            touchMoveEvent.touches[0].pageX - touchStartEvent.touches[0].pageX;
          const deltaY =
            touchMoveEvent.touches[0].pageY - touchStartEvent.touches[0].pageY;
          moveImage(deltaX, deltaY);

          if (touchMoveEvent.touches.length === 2) {
            const firstPageX = touchMoveEvent.touches[0].pageX;
            const firstPageY = touchMoveEvent.touches[0].pageY;
            const secondPageX = touchMoveEvent.touches[1].pageX;
            const secondPageY = touchMoveEvent.touches[1].pageY;

            const left = Math.min(firstPageX, secondPageX);
            const right = Math.max(firstPageX, secondPageX);
            const top = Math.min(firstPageY, secondPageY);
            const bottom = Math.max(firstPageY, secondPageY);

            const horizontalDist = right - left;
            const verticalDist = bottom - top;

            const dist = Math.sqrt(
              horizontalDist * horizontalDist + verticalDist * verticalDist
            );

            if (recentTouchDist > 0) {
              const newScale = scale - (recentTouchDist - dist) / 100;
              const finalScale = Math.min(Math.max(0.3, newScale), 10);
              setScale(finalScale);
            }
          } else {
            setRecentTouchDist(-1);
          }
        }

        function handleOnTouchEnd() {
          document.removeEventListener('touchmove', handleOnTouchMove);
        }

        document.addEventListener('touchmove', handleOnTouchMove);
        document.addEventListener('touchend', handleOnTouchEnd, { once: true });
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
