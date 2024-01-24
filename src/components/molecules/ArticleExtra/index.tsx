import React from 'react';
import styled from 'styled-components';

import { ShmupRecord } from '^/types';

const Root = styled.ul`
  width: 100%;
  padding-left: 15px;
`;

const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ListItemTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const ListItemContent = styled.span`
  font-size: 16px;
  font-weight: 400;
`;

interface Props {
  comment: ShmupRecord['comment'];
  youtubeUrl?: ShmupRecord['youtubeUrl'];
}

export function ArticleExtra({ comment, youtubeUrl }: Props) {
  const renderYoutube = youtubeUrl ? (
    <ListItem>
      <ListItemWrapper>
        <ListItemTitle>유튜브 영상</ListItemTitle>
        <ListItemContent>
          <iframe
            width="100%"
            height="480px"
            src={youtubeUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              borderWidth: 0,
            }}
          />
        </ListItemContent>
      </ListItemWrapper>
    </ListItem>
  ) : null;

  return (
    <Root>
      <ListItem>
        <ListItemWrapper>
          <ListItemTitle>코멘터리</ListItemTitle>
          <ListItemContent>{comment}</ListItemContent>
        </ListItemWrapper>
      </ListItem>
      {renderYoutube}
    </Root>
  );
}
