import React, { useState } from 'react';
import styled from 'styled-components';

import { ButtonType, ShmupRecord } from '^/types';
import { Thumbnail } from '^/components/atoms/Thumbnail';
import { convertDateToString } from '^/utils/date-to-string';
import { textsForArticle } from '^/constants/texts';
import { ImageDisplayModal } from '^/components/molecules/ImageDisplayModal';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { Button } from '^/components/atoms/Button';
import { ReactComponent as TwitterSvg } from '^/assets/icons/twitter.svg';
import { ReactComponent as LinkSvg } from '^/assets/icons/link.svg';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 16px;
`;

const SummaryArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const SummaryDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const List = styled.ul`
  padding-left: 15px;

  & > li:not(:last-of-type) {
    margin-bottom: 8px;
  }
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

const ShareButtonList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
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
          {textsForArticle[record.byWhat] ?? record.byWhat}
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
      <Title>{convertDateToString(record.when)}</Title>
      <NavRouteTitle />
      <SummaryArea>
        <Thumbnail
          imageSrc={record.thumbnailUrl}
          altText={`${record.subjectId} ${convertDateToString(record.when)} ${
            record.stage
          }스테이지 ${record.score}점`}
          onClick={() => {
            setIsImageModalShow(true);
          }}
        />
        <SummaryDescription>
          {renderList}
          <ShareButtonList>
            <Button
              type={ButtonType.ROUND_LINE}
              isDisabled={false}
              onClick={() => {}}
              customStyle={{
                display: 'flex',
                padding: '10px',
                borderRadius: '50%',
              }}
            >
              <LinkSvg
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </Button>
            <Button
              type={ButtonType.ROUND_LINE}
              isDisabled={false}
              onClick={() => {}}
              customStyle={{
                display: 'flex',
                padding: '10px',
                borderRadius: '50%',
              }}
            >
              <TwitterSvg
                style={{
                  width: '24px',
                  height: '24px',
                }}
              />
            </Button>
          </ShareButtonList>
        </SummaryDescription>
      </SummaryArea>
      {renderImageModal}
    </Root>
  );
}
