import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { RecordListCard } from '^/components/molecules/RecordListCard';
import { ShmupRecordPreview } from '^/types';
import { EmptyIndicator } from '^/components/molecules/EmptyIndicator';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const RecordCount = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

const RecordSelectionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const RecordSelectionLink = styled(Link)`
  color: unset;
  text-decoration: none;
`;

interface Props {
  recordPreviews: ShmupRecordPreview[];
}

export function RecordSelection({ recordPreviews }: Props) {
  const renderRecordCount =
    recordPreviews.length > 0 ? (
      <RecordCount>총 {recordPreviews.length}건의 기록이 있습니다.</RecordCount>
    ) : null;

  const renderRecordSelectionArea =
    recordPreviews.length > 0 ? (
      <RecordSelectionList>
        {recordPreviews.map(({ id, title, imageUrl }) => (
          <RecordSelectionLink key={id} to={id}>
            <RecordListCard imageUrl={imageUrl} title={title} />
          </RecordSelectionLink>
        ))}
      </RecordSelectionList>
    ) : (
      <EmptyIndicator />
    );

  return (
    <Root>
      {renderRecordCount}
      {renderRecordSelectionArea}
    </Root>
  );
}
