import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  aspect-ratio: auto;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

const CloseButtonWrapper = styled.button`
  all: unset;
  position: absolute;
  left: 0;
  top: 0;

  color: #ffffff;
  font-weight: 600;
  stroke-width: 2px;

  cursor: pointer;
`;

interface Props {
  imageUrl: string;
  onClickClose(): void;
}

export function ImageDisplay({ imageUrl, onClickClose }: Props) {
  return (
    <Root>
      <Image
        src={imageUrl}
        alt="Record image in expanded contain size"
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
      <CloseButtonWrapper
        onClick={(event) => {
          event.stopPropagation();
          onClickClose();
        }}
      >
        닫기
      </CloseButtonWrapper>
    </Root>
  );
}
