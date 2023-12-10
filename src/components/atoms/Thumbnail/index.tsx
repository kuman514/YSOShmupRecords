import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
  border: unset;
  background: unset;

  width: 240px;
  height: 240px;

  padding: 0;

  background-color: black;

  cursor: pointer;
`;

const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: contain;
`;

interface Props {
  imageSrc: string;
  altText: string;
  onClick(): void;
}

export function Thumbnail({ imageSrc, altText, onClick }: Props) {
  return (
    <Root onClick={onClick}>
      <Image src={imageSrc} alt={altText} />
    </Root>
  );
}
