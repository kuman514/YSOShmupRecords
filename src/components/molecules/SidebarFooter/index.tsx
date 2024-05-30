import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  row-gap: 8px;
  column-gap: 20px;
  padding: 16px 16px 16px 32px;

  color: var(--white-color);

  font-size: 16px;
  font-weight: 300;
`;

export function SidebarFooter() {
  return (
    <Root>
      <div>YSO as kuman514</div>
    </Root>
  );
}
