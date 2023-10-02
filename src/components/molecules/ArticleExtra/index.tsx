import React from 'react';
import styled from 'styled-components';

import { ShmupRecord } from '^/types';

const Root = styled.div`
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 15px;
`;

const ColumnTitle = styled.div`
  width: 180px;
  font-weight: 600;
  font-size: 16px;
`;

const ColumnContent = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

interface Props {
  comment: ShmupRecord['comment'];
  youtubeUrl?: ShmupRecord['youtubeUrl'];
}

export function ArticleExtra({ comment, youtubeUrl }: Props) {
  /**
   * @todo
   * Replace 유튜브 영상 칸 into the real youtube embed
   */
  const renderYoutube =
    youtubeUrl !== undefined ? (
      <Column>
        <ColumnTitle>유튜브 링크</ColumnTitle>
        <ColumnContent>유튜브 영상 칸</ColumnContent>
      </Column>
    ) : null;

  return (
    <Root>
      <Column>
        <ColumnTitle>코멘터리</ColumnTitle>
        <ColumnContent>{comment}</ColumnContent>
      </Column>
      {renderYoutube}
    </Root>
  );
}
