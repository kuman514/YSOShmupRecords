import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 300px;
  height: 240px;

  display: grid;
  grid-template-rows: 200px 40px;

  background-color: var(--primary-color);

  border-radius: 16px;

  &:hover {
    background-color: var(--hovering-color);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Summary = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 8px;

  padding: 0px 16px;

  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.span`
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;
`;

interface Props {
  imageUrl: string;
  title: string;
}

export function RecordListCard({ imageUrl, title }: Props) {
  return (
    <Root>
      <Image src={imageUrl} alt={title} />
      <Summary>
        <Title>{title}</Title>
      </Summary>
    </Root>
  );
}
