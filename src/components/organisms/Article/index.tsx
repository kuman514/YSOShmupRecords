import React from 'react';
import styled from 'styled-components';

import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ArticleExtra } from '^/components/molecules/ArticleExtra';
import { useShmupRecordStore } from '^/stores/shmup-record';

const Root = styled.article``;

export function Article() {
  /**
   * @todo
   * Add record selection dropdown
   */
  const recordArticle = useShmupRecordStore((state) => state.recordArticle);

  return recordArticle !== null ? (
    <Root>
      <ArticleSummary record={recordArticle} />
      <ArticleExtra
        comment={recordArticle.comment}
        youtubeUrl={recordArticle.youtubeUrl}
      />
    </Root>
  ) : null;
}
