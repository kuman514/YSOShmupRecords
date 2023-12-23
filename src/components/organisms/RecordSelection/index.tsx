import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { RecordListCard } from '^/components/molecules/RecordListCard';
import { ShmupRecordPreview } from '^/types';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
`;

const RecordSelectionList = styled.div`
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
  const renderRecordSelectionArea = (() => {
    if (recordPreviews.length === 0) {
      return '현재 등록된 기록이 없습니다.';
    }

    return (
      <RecordSelectionList>
        {recordPreviews.map(({ id, title, imageUrl }) => (
          <RecordSelectionLink key={id} to={id}>
            <RecordListCard imageUrl={imageUrl} title={title} />
          </RecordSelectionLink>
        ))}
      </RecordSelectionList>
    );
  })();

  return <Root>{renderRecordSelectionArea}</Root>;
}
