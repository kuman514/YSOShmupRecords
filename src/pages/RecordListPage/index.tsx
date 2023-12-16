import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { textsForArticle } from '^/constants/texts';
import { useShmupRecordList } from '^/hooks/useShmupRecordList';
import { RecordSelection } from '^/components/organisms/RecordSelection';

const Root = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Title = styled.h1`
  color: var(--light-font-color);

  font-size: 36px;
  font-weight: 700;
`;

export function RecordListPage() {
  const { typeId } = useParams();

  if (!typeId) {
    return null;
  }

  return (
    <Root>
      <Title>{textsForArticle[typeId] ?? typeId} 기록 목록</Title>
      <RecordSelection {...useShmupRecordList(typeId)} />
    </Root>
  );
}
