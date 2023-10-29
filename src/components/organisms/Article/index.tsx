import React from 'react';

import { ArticleSummary } from '^/components/molecules/ArticleSummary';
import { ArticleExtra } from '^/components/molecules/ArticleExtra';
import { ShmupRecord } from '^/types';

interface Props {
  recordArticle: ShmupRecord;
}

export function Article({ recordArticle }: Props) {
  return (
    <article>
      <ArticleSummary record={recordArticle} />
      <ArticleExtra
        comment={recordArticle.comment}
        youtubeUrl={recordArticle.youtubeUrl}
      />
    </article>
  );
}
