import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { Skeleton } from '^/components/atoms/Skeleton';
import { ErrorIndicator } from '^/components/molecules/ErrorIndicator';
import { RecordSelection } from '^/components/organisms/RecordSelection';
import { textsForArticle } from '^/constants/texts';
import { useShmupRecordList } from '^/hooks/useShmupRecordList';

const Root = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const RecordListCardSkeletonListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RecordListCardSkeletonRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

function RecordListCardSkeleton() {
  return (
    <RecordListCardSkeletonRoot>
      <Skeleton width="100%" height="250px" borderRadius="16px" />
      <Skeleton width="240px" height="20px" borderRadius="10px" />
      <Skeleton width="160px" height="20px" borderRadius="10px" />
    </RecordListCardSkeletonRoot>
  );
}

export function RecordListPage() {
  const { typeId } = useParams();

  const { recordPreviews, isLoading, isError } = useShmupRecordList(typeId);

  const renderRecordSelectionArea = (() => {
    if (isLoading) {
      return (
        <RecordListCardSkeletonListWrapper>
          <Skeleton width="160px" height="20px" borderRadius="10px" />
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

  const renderRecordTypeTitle = typeId
    ? (textsForArticle[typeId] ?? typeId)
    : '모든 슈팅게임';

  return (
    <Root>
      <Title>{renderRecordTypeTitle} 기록 목록</Title>
      {renderRecordSelectionArea}
    </Root>
  );
}
