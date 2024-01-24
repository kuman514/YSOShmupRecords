import React, { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ButtonType, ShmupRecord } from '^/types';
import { Thumbnail } from '^/components/atoms/Thumbnail';
import { convertDateToString } from '^/utils/date-to-string';
import { textsForArticle } from '^/constants/texts';
import { ImageDisplayModal } from '^/components/molecules/ImageDisplayModal';
import { Button } from '^/components/atoms/Button';
import { ReactComponent as RawLinkSvg } from '^/assets/icons/link.svg';
import { ReactComponent as RawTwitterSvg } from '^/assets/icons/twitter.svg';

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
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

interface CopyToClipboardTooltipProps {
  $isCopiedToClipboard: boolean;
}

const CopyToClipboardTooltip = styled.div<CopyToClipboardTooltipProps>`
  position: relative;

  &::after {
    content: ${({ $isCopiedToClipboard }) =>
      $isCopiedToClipboard ? '"복사 완료"' : '"복사하기"'};

    position: absolute;
    left: 50%; /* Based on the parent's width */
    top: -100%; /* Based on the parent's width */
    transform: translateX(-50%); /* Based on this width, 150px */

    width: 150px;
    padding: 12px 8px;
    border-radius: 8px;

    background-color: var(--primary-color);
    color: #ffffff;

    display: none;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    &::after {
      display: flex;
    }
  }
`;

const LinkSvg = styled(RawLinkSvg)`
  width: 24px;
  height: 24px;
`;

const TwitterSvg = styled(RawTwitterSvg)`
  width: 24px;
  height: 24px;
`;

const iconShareButtonStyle: CSSProperties = {
  display: 'flex',
  padding: '10px',
  borderRadius: '50%',
};

interface Props {
  record: ShmupRecord;
}

export function ArticleSummary({ record }: Props) {
  const [isCopiedToClipboard, setIsCopiedToClipboard] =
    useState<boolean>(false);
  const [isImageModalShow, setIsImageModalShow] = useState<boolean>(false);

  function handleOnClickCopyLink() {
    navigator.clipboard.writeText(window.location.href);
    setIsCopiedToClipboard(true);
  }

  function handleOnClickShareToTwitter() {
    const urlToUri = encodeURI(window.location.href);
    const textToUri = encodeURI(
      `${convertDateToString(record.when)}, ${
        textsForArticle[record.byWhat]
      }에서 플레이한 ${textsForArticle[record.typeId]}에서, ${
        record.score
      }점으로 ${record.stage} 달성!`
    );

    const tweet = `https://twitter.com/intent/tweet?url=${urlToUri}&text=${textToUri}`;
    window.open(tweet, '_blank');
  }

  const renderSpecialTags =
    record.specialTags !== undefined && record.specialTags.length > 0 ? (
      <li>
        <ListItemTitle>특이사항</ListItemTitle>
        <ListItemContent>
          {record.specialTags.map((specialTag) => (
            <SpecialTag key={specialTag}>
              {textsForArticle[specialTag] ?? specialTag}
            </SpecialTag>
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
      imageUrls={record.originalImageUrls}
      onExit={() => {
        setIsImageModalShow(false);
      }}
    />
  ) : null;

  useEffect(() => {
    if (isCopiedToClipboard) {
      setTimeout(() => {
        setIsCopiedToClipboard(false);
      }, 2500);
    }
  }, [isCopiedToClipboard]);

  return (
    <>
      <Root>
        <Thumbnail
          imageSrc={record.thumbnailUrl}
          altText={`${record.typeId} ${convertDateToString(record.when)} ${
            record.stage
          }스테이지 ${record.score}점`}
          onClick={() => {
            setIsImageModalShow(true);
          }}
        />
        <SummaryDescription>
          {renderList}
          <ShareButtonList>
            <CopyToClipboardTooltip $isCopiedToClipboard={isCopiedToClipboard}>
              <Button
                type={ButtonType.ROUND_LINE}
                isDisabled={false}
                onClick={handleOnClickCopyLink}
                customStyle={iconShareButtonStyle}
              >
                <LinkSvg />
              </Button>
            </CopyToClipboardTooltip>
            <Button
              type={ButtonType.ROUND_LINE}
              isDisabled={false}
              onClick={handleOnClickShareToTwitter}
              customStyle={iconShareButtonStyle}
            >
              <TwitterSvg />
            </Button>
          </ShareButtonList>
        </SummaryDescription>
      </Root>
      {renderImageModal}
    </>
  );
}
