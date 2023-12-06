import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { texts } from '^/constants/texts';
import { useShmupRecordIds } from '^/hooks/useShmupRecordIds';
import { Skeleton } from '^/components/atoms/Skeleton';

const Root = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

const Title = styled.h1`
  color: var(--light-font-color);
  font-family: Inter;
  font-size: 36px;
  font-weight: 700;
`;

const RecordSelectionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
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
        {recordIds.length > 0 ? (
          <ul>
            {recordIds.map((recordId) => (
              <li>
                <Link to={`${recordId}`}>{recordId}</Link>
              </li>
            ))}
          </ul>
        ) : (
          '현재 등록된 기록이 없습니다.'
        )}
      </RecordSelectionArea>
    ) : (
      <RecordSelectionArea>
        {!isRecordIdsError ? (
          <>
            <Skeleton width="300px" height="20px" />
            <Skeleton width="300px" height="20px" />
            <Skeleton width="300px" height="20px" />
            <Skeleton width="300px" height="20px" />
            <Skeleton width="300px" height="20px" />
          </>
        ) : (
          '목록을 불러오는 중 오류가 발생했습니다.'
        )}
      </RecordSelectionArea>
    );

  return (
    <Root>
      <Title>{texts[typeId] ?? typeId} 기록 목록</Title>
      {renderRecordIdSelection}
    </Root>
  );
}
