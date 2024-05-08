import styled from 'styled-components';

interface RootProps {
  $pxSize: number;
}

const Root = styled.div<RootProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: calc(${({ $pxSize }) => $pxSize}px / 2);
  width: ${({ $pxSize }) => $pxSize}px;
  height: ${({ $pxSize }) => $pxSize}px;
  background-color: var(--gray-color);
`;

const Image = styled.img`
  color: var(--black-color);

  font-size: 16px;
  font-weight: 500;

  border-radius: inherit;
  width: inherit;
  height: inherit;
`;

interface Props {
  pxSize: number;
  imageUrl: string;
}

export function Avatar({ pxSize, imageUrl }: Props) {
  return (
    <Root $pxSize={pxSize}>
      <Image src={imageUrl} alt="YSOShmupRecords avatar" />
    </Root>
  );
}
