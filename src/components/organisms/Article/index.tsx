import React from 'react';
import styled from 'styled-components';

import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ArticleExtra } from '^/components/molecules/ArticleExtra';
import { ShmupRecord } from '^/types';

/**
 * @todo
 * Style Root if necessary. Otherwise, changing it into just article looks better.
 */
const Root = styled.article``;

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
