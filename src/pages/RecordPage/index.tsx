import React from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';

import { Article } from '^/components/organisms/Article';
import { useShmupArticle } from '^/hooks/useShmupArticle';
import { Skeleton } from '^/components/atoms/Skeleton';
import { ErrorIndicator } from '^/components/molecules/ErrorIndicator';

const Root = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;

const ArticleSkeletonArea = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
  }
`;

export function RecordPage() {
  const { typeId, currentRecordId } = useParams();

  if (!typeId) {
    return null;
  }
  const { recordArticle, isLoading, isError } = useShmupArticle(
    typeId,
    currentRecordId
  );

  const renderMainPart = (() => {
    if (isLoading) {
      return (
        <ArticleSkeletonArea>
          <div>
            <Skeleton width="360px" height="360px" />
          </div>
          <div>
            <Skeleton width="500px" height="50px" />
            <Skeleton width="500px" height="50px" />
            <Skeleton width="500px" height="50px" />
            <Skeleton width="500px" height="50px" />
            <Skeleton width="500px" height="50px" />
          </div>
        </ArticleSkeletonArea>
      );
    }

    if (recordArticle === undefined || isError) {
      return <ErrorIndicator title="본문을 불러오는 중 오류가 발생했습니다." />;
    }

    return <Article recordArticle={recordArticle} />;
  })();

  return <Root>{renderMainPart}</Root>;
}
