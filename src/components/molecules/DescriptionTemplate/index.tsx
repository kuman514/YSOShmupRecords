import styled from 'styled-components';

import { DescriptionListItem } from '^/types';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

interface Props {
  title: string;
  descriptionListItems: DescriptionListItem[];
}

export function DescriptionTemplate({ title, descriptionListItems }: Props) {
  const renderDescriptionListItems = descriptionListItems.map(
    ({ id, description }) => <ListItem key={id}>{description}</ListItem>
  );

  return (
    <Root>
      <Title>{title}</Title>
      <ul>{renderDescriptionListItems}</ul>
    </Root>
  );
}
