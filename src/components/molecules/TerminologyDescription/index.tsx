import styled from 'styled-components';

import { Terminology } from '^/types';

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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ListItemTerm = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const LsitItemDescription = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

interface Props {
  title: string;
  descriptionListItems: Terminology[];
}

export function TerminologyDescription({ title, descriptionListItems }: Props) {
  const renderDescriptionListItems = descriptionListItems.map(
    ({ id, term, description }) => (
      <li key={id}>
        <ListItemContainer>
          <ListItemTerm>{term}</ListItemTerm>
          <LsitItemDescription>{description}</LsitItemDescription>
        </ListItemContainer>
      </li>
    )
  );

  return (
    <Root>
      <Title>{title}</Title>
      <List>{renderDescriptionListItems}</List>
    </Root>
  );
}
