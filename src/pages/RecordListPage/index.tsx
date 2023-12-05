import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { texts } from '^/constants/texts';
import { useShmupRecordIds } from '^/hooks/useShmupRecordIds';
import { Skeleton } from '^/components/atoms/Skeleton';

const Title = styled.h1`
  color: var(--light-font-color);
  font-family: Inter;
  font-size: 36px;
  font-weight: 700;
`;

const RecordSelectionArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
`;

export function RecordListPage() {
  const { typeId } = useParams();

  if (!typeId) {
    return null;
  }

  const {
    recordIds,
    isLoading: isRecordIdsLoading,
    isError: isRecordIdsError,
  } = useShmupRecordIds(typeId);

  const renderRecordIdSelection =
    recordIds.length > 0 && !isRecordIdsLoading ? (
      <RecordSelectionArea>
        <ul>
          {recordIds.map((recordId) => (
            <li>
              <Link to={`${recordId}`}>{recordId}</Link>
            </li>
          ))}
        </ul>
      </RecordSelectionArea>
    ) : (
      <RecordSelectionArea>
        {!isRecordIdsError ? (
          <Skeleton width="300px" height="50px" />
        ) : (
          '목록을 불러오는 중 오류가 발생했습니다.'
        )}
      </RecordSelectionArea>
    );

  return (
    <div>
      <Title>{texts[typeId] ?? typeId} 기록 목록</Title>
      {renderRecordIdSelection}
    </div>
  );
}
