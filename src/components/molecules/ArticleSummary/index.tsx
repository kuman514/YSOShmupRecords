import React, { useState } from 'react';
import styled from 'styled-components';

import { ShmupRecord } from '^/types';
import { Thumbnail } from '^/components/atoms/Thumbnail';
import { convertDateToString } from '^/utils/date-to-string';
import { texts } from '^/constants/texts';
import { ImageDisplayModal } from '^/components/molecules/ImageDisplayModal';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 15px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

const List = styled.ul`
  padding-left: 15px;
`;

const ListItemTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const ListItemContent = styled.span`
  font-size: 16px;
  font-weight: 400;

  &::before {
    content: ' ';
    white-space: pre;
  }
`;

const SpecialTag = styled.span`
  & + &::before {
    content: ', ';
    white-space: pre;
  }
`;

interface Props {
  record: ShmupRecord;
}

export function ArticleSummary({ record }: Props) {
  const [isImageModalShow, setIsImageModalShow] = useState<boolean>(false);

  const renderSpecialTags =
    record.specialTags !== undefined && record.specialTags.length > 0 ? (
      <li>
        <ListItemTitle>특이사항</ListItemTitle>
        <ListItemContent>
          {record.specialTags.map((specialTag) => (
            <SpecialTag key={specialTag}>{specialTag}</SpecialTag>
          ))}
        </ListItemContent>
      </li>
    ) : null;

  const renderList = (
    <List>
      <li>
        <ListItemTitle>최종 스테이지</ListItemTitle>
        <ListItemContent>{record.stage}</ListItemContent>
      </li>
      <li>
        <ListItemTitle>최종 점수</ListItemTitle>
        <ListItemContent>{record.score}점</ListItemContent>
      </li>
      <li>
        <ListItemTitle>수단/장소</ListItemTitle>
        <ListItemContent>
          {texts[record.byWhat] ?? record.byWhat}
        </ListItemContent>
      </li>
      <li>
        <ListItemTitle>트위터 링크</ListItemTitle>
        <ListItemContent>
          <a href={record.tweetUrl}>{record.tweetUrl}</a>
        </ListItemContent>
      </li>
      {renderSpecialTags}
    </List>
  );

  const renderImageModal = isImageModalShow ? (
    <ImageDisplayModal
      imageUrl={record.originalImageUrl}
      onExit={() => {
        setIsImageModalShow(false);
      }}
    />
  ) : null;

  return (
    <Root>
      <Thumbnail
        imageSrc={record.thumbnailUrl}
        altText={`${record.subjectId} ${convertDateToString(record.when)} ${
          record.stage
        }스테이지 ${record.score}점`}
        onClick={() => {
          setIsImageModalShow(true);
        }}
      />
      <div>
        <Title>{convertDateToString(record.when)}</Title>
        {renderList}
      </div>
      {renderImageModal}
    </Root>
  );
}
