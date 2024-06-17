import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { Skeleton } from '^/components/atoms/Skeleton';
import { ErrorIndicator } from '^/components/molecules/ErrorIndicator';
import { Article } from '^/components/organisms/Article';
import { useShmupArticle } from '^/hooks/useShmupArticle';
import { convertDateToString } from '^/utils/date-to-string';
import { GoBackButton } from '^/components/atoms/GoBackButton';

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

    if (!recordArticle || isError) {
      return <ErrorIndicator title="본문을 불러오는 중 오류가 발생했습니다." />;
    }

    return <Article recordArticle={recordArticle} />;
  })();

  return (
    <Root>
      <GoBackButton />
      <TitleArea>
        <Title>{convertDateToString(new Date(recordDateId))}</Title>
        <NavRouteTitle />
      </TitleArea>
      {renderMainPart}
    </Root>
  );
}
