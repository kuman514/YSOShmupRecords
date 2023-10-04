import React from 'react';
import styled from 'styled-components';

import { DescriptionListItem } from '^/types';

const ListItem = styled.li`
  font-size: 16px;
  font-weight: 400;
`;

const ListItemBody = styled.div`
  margin-bottom: 10px;
`;

interface Props {
  descriptionListItems: DescriptionListItem[];
}

export function DescriptionTemplate({ descriptionListItems }: Props) {
  const renderDescriptionListItems = descriptionListItems.map(
    ({ id, description, subItems }) => (
      <ListItem key={id}>
        <ListItemBody>{description}</ListItemBody>
        {subItems ? (
          <DescriptionTemplate descriptionListItems={subItems} />
        ) : null}
      </ListItem>
    )
  );

  return <ul>{renderDescriptionListItems}</ul>;
}
