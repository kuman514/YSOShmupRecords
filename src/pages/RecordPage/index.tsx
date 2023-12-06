import React from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';

import { Article } from '^/components/organisms/Article';
import { useShmupArticle } from '^/hooks/useShmupArticle';
import { Skeleton } from '^/components/atoms/Skeleton';

const Root = styled.div`
  padding: 15px;
`;

const ArticleSkeletonArea = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 10px;

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
  const {
    recordArticle,
    isLoading: isRecordArticleLoading,
    isError: isRecordArticleError,
  } = useShmupArticle(typeId, currentRecordId);

  const renderArticle =
    recordArticle !== undefined && !isRecordArticleLoading ? (
      <Article recordArticle={recordArticle} />
    ) : (
      <ArticleSkeletonArea>
        {!isRecordArticleError ? (
          <>
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
          </>
        ) : (
          '본문을 불러오는 중 오류가 발생했습니다.'
        )}
      </ArticleSkeletonArea>
    );

  return <Root>{renderArticle}</Root>;
}
