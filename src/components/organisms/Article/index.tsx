import React from 'react';
import styled from 'styled-components';

import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ArticleExtra } from '^/components/molecules/ArticleExtra';
import { useShmupRecordStore } from '^/stores/shmup-record';

const Root = styled.article``;

export function Article() {
  const record = useShmupRecordStore((state) => state.record);

  return record !== undefined ? (
    <Root>
      <ArticleSummary record={record} />
      <ArticleExtra comment={record.comment} youtubeUrl={record.youtubeUrl} />
    </Root>
  ) : null;
}
