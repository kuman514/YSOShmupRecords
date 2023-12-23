import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { textsForArticle } from '^/constants/texts';
import { useShmupRecordPreviewList } from '^/hooks/useShmupRecordPreviewList';
import { RecordSelection } from '^/components/organisms/RecordSelection';
import { ErrorIndicator } from '^/components/molecules/ErrorIndicator';
import { Skeleton } from '^/components/atoms/Skeleton';

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

const RecordListCardSkeletonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
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

export function RecordListPage() {
  const { typeId } = useParams();

  if (!typeId) {
    return null;
  }

  const { recordPreviews, isLoading, isError } =
    useShmupRecordPreviewList(typeId);

  const renderRecordSelectionArea = (() => {
    if (isLoading) {
      return (
        <RecordListCardSkeletonListWrapper>
          <RecordListCardSkeleton />
          <RecordListCardSkeleton />
          <RecordListCardSkeleton />
          <RecordListCardSkeleton />
        </RecordListCardSkeletonListWrapper>
      );
    }

    if (isError) {
      return <ErrorIndicator title="목록을 불러오는 중 오류가 발생했습니다." />;
    }

    return <RecordSelection recordPreviews={recordPreviews} />;
  })();

  return (
    <Root>
      <Title>{textsForArticle[typeId] ?? typeId} 기록 목록</Title>
      {renderRecordSelectionArea}
    </Root>
  );
}
