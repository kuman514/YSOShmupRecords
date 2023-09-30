import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
  border: unset;
  background: unset;

  width: 360px;
  height: 360px;

  padding: 0;

  cursor: pointer;
`;

const Image = styled.img`
  width: auto;
  height: auto;
  max-width: 360px;
  max-height: 360px;
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
