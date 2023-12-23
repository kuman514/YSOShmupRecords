import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { Skeleton } from '^/components/atoms/Skeleton';
import { RecordListCard } from '^/components/molecules/RecordListCard';
import { ShmupRecordPreview } from '^/types';
import { ErrorIndicator } from '^/components/molecules/ErrorIndicator';

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
  recordPreviews: ShmupRecordPreview[];
  isLoading: boolean;
  isError: boolean;
}

export function RecordSelection({ recordPreviews, isLoading, isError }: Props) {
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
      return <ErrorIndicator title="목록을 불러오는 중 오류가 발생했습니다." />;
    }

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
