import styled from 'styled-components';

import { ArticleExtra } from '^/components/molecules/ArticleExtra';
import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ShmupRecord } from '^/types';

const Root = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

interface Props {
  recordArticle: ShmupRecord;
}

export function Article({ recordArticle }: Props) {
  return (
    <Root>
      <ArticleSummary record={recordArticle} />
      <ArticleExtra
        comment={recordArticle.comment}
        youtubeUrl={recordArticle.youtubeUrl}
      />
    </Root>
  );
}
