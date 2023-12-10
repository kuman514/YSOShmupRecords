import React from 'react';
import styled from 'styled-components';

import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ArticleExtra } from '^/components/molecules/ArticleExtra';
import { ShmupRecord } from '^/types';

const Root = styled.article`
  width: 100%;
  max-width: 720px;

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
