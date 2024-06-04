import styled from 'styled-components';

const commonStickStyle = `
  width: 24px;
  height: 2px;
  background-color: var(--white-color);

  transition-property: left, top, transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
`;

interface StickProps {
  $isOpen: boolean;
}

const FirstStick = styled.div<StickProps>`
  ${commonStickStyle}

  position: absolute;
  left: ${({ $isOpen }) => ($isOpen ? 6 : 6)}px;
  top: ${({ $isOpen }) => ($isOpen ? 17 : 9)}px;
  transform: rotate(${({ $isOpen }) => ($isOpen ? 45 : 0)}deg);
`;

const SecondStick = styled.div<StickProps>`
  ${commonStickStyle}

  position: absolute;
  left: ${({ $isOpen }) => ($isOpen ? 6 : 6)}px;
  top: ${({ $isOpen }) => ($isOpen ? 17 : 17)}px;
  transform: rotate(${({ $isOpen }) => ($isOpen ? -45 : 0)}deg);
`;

const ThirdStick = styled.div<StickProps>`
  ${commonStickStyle}

  position: absolute;
  left: ${({ $isOpen }) => ($isOpen ? 6 : 6)}px;
  top: ${({ $isOpen }) => ($isOpen ? 17 : 25)}px;
  transform: rotate(${({ $isOpen }) => ($isOpen ? -45 : 0)}deg);
`;

const Root = styled.div`
  width: 36px;
  height: 36px;
  position: relative;
`;

interface Props {
  isOpen: boolean;
}

export function MenuOpenCloseIcon({ isOpen }: Props) {
  return (
    <Root id={isOpen ? 'Click-to-close-icon' : 'Click-to-open-icon'}>
      <FirstStick $isOpen={isOpen} />
      <SecondStick $isOpen={isOpen} />
      <ThirdStick $isOpen={isOpen} />
    </Root>
  );
}
