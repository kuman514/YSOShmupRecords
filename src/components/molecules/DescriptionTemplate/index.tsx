import React from 'react';
import styled from 'styled-components';

import { DescriptionListItem } from '^/types';

const Root = styled.ul``;

const ListItem = styled.li``;

interface Props {
  descriptionListItems: DescriptionListItem[];
}

export function DescriptionTemplate({ descriptionListItems }: Props) {
  const renderDescriptionListItems = descriptionListItems.map(
    ({ id, description, subItems }) => (
      <ListItem key={id}>
        <span>{description}</span>
        {subItems ? (
          <DescriptionTemplate descriptionListItems={subItems} />
        ) : null}
      </ListItem>
    )
  );

  return <Root>{renderDescriptionListItems}</Root>;
}
