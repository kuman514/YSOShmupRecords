import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
  border: unset;
  background: unset;

  width: 300px;
  height: 300px;

  padding: 0;

  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
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
