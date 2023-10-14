import React from 'react';
import styled from 'styled-components';

import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ArticleExtra } from '^/components/molecules/ArticleExtra';
import { useShmupRecordStore } from '^/stores/shmup-record';

/**
 * @todo
 * Style Root if necessary. Otherwise, changing it into just article looks better.
 */
const Root = styled.article``;

export function Article() {
  const recordArticle = useShmupRecordStore((state) => state.recordArticle);
  return recordArticle !== undefined ? (
    <Root>
      <ArticleSummary record={recordArticle} />
      <ArticleExtra
        comment={recordArticle.comment}
        youtubeUrl={recordArticle.youtubeUrl}
      />
    </Root>
  ) : null;
}
