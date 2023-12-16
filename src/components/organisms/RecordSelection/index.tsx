import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { Skeleton } from '^/components/atoms/Skeleton';
import { RecordListCard } from '^/components/molecules/RecordListCard';
import { getAPIURL } from '^/utils/api-url';
import { convertDateToString } from '^/utils/date-to-string';

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

const RecordListCardSkeletonRoot = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

function RecordListCardSkeleton() {
  return (
    <RecordListCardSkeletonRoot>
      <Skeleton width="300px" height="200px" borderRadius="16px" />
      <Skeleton width="300px" height="20px" borderRadius="10px" />
    </RecordListCardSkeletonRoot>
  );
}

interface Props {
  savedTypeId: string;
  recordIds: string[];
  isLoading: boolean;
  isError: boolean;
}

export function RecordSelection({
  savedTypeId,
  recordIds,
  isLoading,
  isError,
}: Props) {
  const renderRecordSelectionArea = (() => {
    if (isLoading) {
      return (
        <>
          <RecordListCardSkeleton />
          <RecordListCardSkeleton />
          <RecordListCardSkeleton />
        </>
      );
    }

    if (isError) {
      return '목록을 불러오는 중 오류가 발생했습니다.';
    }

    if (recordIds.length === 0) {
      return '현재 등록된 기록이 없습니다.';
    }

    return (
      <RecordSelectionList>
        {recordIds.map((recordId) => (
          <RecordSelectionLink key={recordId} to={`${recordId}`}>
            <RecordListCard
              imageUrl={getAPIURL(
                'records',
                savedTypeId,
                'images',
                `${recordId}_thumbnail.jpg`
              )}
              title={`${convertDateToString(new Date(recordId))} 기록`}
            />
          </RecordSelectionLink>
        ))}
      </RecordSelectionList>
    );
  })();

  return <Root>{renderRecordSelectionArea}</Root>;
}
