import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { Skeleton } from '^/components/atoms/Skeleton';
import { ErrorIndicator } from '^/components/molecules/ErrorIndicator';
import { Article } from '^/components/organisms/Article';
import { useShmupArticle } from '^/hooks/useShmupArticle';
import { convertDateToString } from '^/utils/date-to-string';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  row-gap: 16px;
`;

const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const ArticleSkeletonArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;

  @media (max-width: 599px) {
    flex-wrap: wrap;
  }
`;

const ArticleSkeletonThumbnailArea = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
`;

const ArticleSkeletonSummaryArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  flex-shrink: 1;
`;

export function RecordPage() {
  const { typeId, recordDateId } = useParams();

  if (!typeId || !recordDateId) {
    return null;
  }
  const { recordArticle, isLoading, isError } = useShmupArticle(
    typeId,
    recordDateId
  );

  const renderMainPart = (() => {
    if (isLoading) {
      return (
        <ArticleSkeletonArea>
          <ArticleSkeletonThumbnailArea>
            <Skeleton width="100%" height="100%" borderRadius="16px" />
          </ArticleSkeletonThumbnailArea>
          <ArticleSkeletonSummaryArea>
            <Skeleton width="100%" height="20px" borderRadius="10px" />
            <Skeleton width="100%" height="20px" borderRadius="10px" />
            <Skeleton width="100%" height="20px" borderRadius="10px" />
            <Skeleton width="100%" height="20px" borderRadius="10px" />
          </ArticleSkeletonSummaryArea>
        </ArticleSkeletonArea>
      );
    }

    if (!recordArticle || isError) {
      return <ErrorIndicator title="본문을 불러오는 중 오류가 발생했습니다." />;
    }

    return <Article recordArticle={recordArticle} />;
  })();

  return (
    <Root>
      <TitleArea>
        <Title>{convertDateToString(new Date(recordDateId))}</Title>
        <NavRouteTitle />
      </TitleArea>
      {renderMainPart}
    </Root>
  );
}
