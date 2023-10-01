import React from 'react';
import styled from 'styled-components';

import { ShmupRecord } from '^/types';
import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ArticleExtra } from '^/components/molecules/ArticleExtra';

const Root = styled.article``;

interface Props {
  record: ShmupRecord;
}

export function Article({ record }: Props) {
  /**
   * @todo
   * Replace record prop into reading one from store
   */
  return (
    <Root>
      <ArticleSummary record={record} />
      <ArticleExtra comment={record.comment} youtubeUrl={record.youtubeUrl} />
    </Root>
  );
}
