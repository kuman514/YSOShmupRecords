import React, { useState } from 'react';
import styled from 'styled-components';
import { useToast } from '@chakra-ui/react';

import { ButtonType, ShmupRecord } from '^/types';
import { Thumbnail } from '^/components/atoms/Thumbnail';
import { convertDateToString } from '^/utils/date-to-string';
import { textsForArticle } from '^/constants/texts';
import { ImageDisplayModal } from '^/components/molecules/ImageDisplayModal';
import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';
import { Button } from '^/components/atoms/Button';
import { ReactComponent as RawLinkSvg } from '^/assets/icons/link.svg';
import { ReactComponent as RawTwitterSvg } from '^/assets/icons/twitter.svg';

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

const LinkSvg = styled(RawLinkSvg)`
  width: 24px;
  height: 24px;
`;

const TwitterSvg = styled(RawTwitterSvg)`
  width: 24px;
  height: 24px;
`;

interface Props {
  record: ShmupRecord;
}

export function ArticleSummary({ record }: Props) {
  const toast = useToast();
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
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast({
                  duration: 2000,
                  title: '링크 복사 완료.',
                  description: '공유하기 원하시는 곳에 붙여넣으십시오.',
                  status: 'success',
                  isClosable: true,
                });
              }}
              customStyle={{
                position: 'relative',
                display: 'flex',
                padding: '10px',
                borderRadius: '50%',
              }}
            >
              <LinkSvg />
            </Button>
            <Button
              type={ButtonType.ROUND_LINE}
              isDisabled={false}
              onClick={() => {
                const urlToUri = encodeURI(window.location.href);
                const textToUri = encodeURI(
                  `${convertDateToString(record.when)}, ${
                    textsForArticle[record.byWhat]
                  }에서 플레이한 ${textsForArticle[record.subjectId]}에서, ${
                    record.score
                  }점으로 ${record.stage} 달성!`
                );

                const tweet = `https://twitter.com/intent/tweet?url=${urlToUri}&text=${textToUri}`;
                window.open(tweet, '_blank');
              }}
              customStyle={{
                display: 'flex',
                padding: '10px',
                borderRadius: '50%',
              }}
            >
              <TwitterSvg />
            </Button>
          </ShareButtonList>
        </SummaryDescription>
      </SummaryArea>
      {renderImageModal}
    </Root>
  );
}
