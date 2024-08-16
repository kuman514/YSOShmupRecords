import styled from 'styled-components';

import RawYoutubeMarkSvg from '^/assets/icons/youtube-mark.svg?react';
import { SpecialTag } from '^/components/atoms/SpecialTag';
import { textsForArticle } from '^/constants/texts';
import { ShmupRecordPreview } from '^/types';

const Root = styled.div`
  position: relative;
  width: 300px;
  min-height: 240px;

  display: grid;
  grid-template-rows: 200px 1fr;

  background-color: var(--primary-color);

  border-radius: 16px;

  overflow: hidden;

  &:hover {
    background-color: var(--hovering-color);

    & > div > img {
      transform: scale(1.3);

      & + div {
        opacity: 1;
      }
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 100ms ease-in-out;
`;

const ImageContainerOverlay = styled.div`
  width: 100%;
  height: 200px;

  position: absolute;
  left: 0;
  top: 0;

  background-color: rgba(255, 255, 255, 0.3);
  opacity: 0;

  transition: opacity 100ms ease-in-out;
`;

const Summary = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 8px;

  padding: 8px 16px;

  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.span`
  color: var(--white-color);

  font-size: 16px;
  font-weight: 600;
`;

const StageAndScore = styled.span`
  color: var(--white-color);

  font-size: 16px;
  font-weight: 400;
`;

const SpecialTagsArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const YoutubeMarkSvg = styled(RawYoutubeMarkSvg)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

interface Props {
  recordPreview: ShmupRecordPreview;
}

export function RecordListCard({ recordPreview }: Props) {
  const renderSpecialTags =
    recordPreview.specialTags && recordPreview.specialTags.length > 0 ? (
      <SpecialTagsArea>
        {recordPreview.specialTags.map((specialTag) => (
          <SpecialTag key={`special-tag-${specialTag}`}>
            {textsForArticle[specialTag] ?? specialTag}
          </SpecialTag>
        ))}
      </SpecialTagsArea>
    ) : null;

  const renderYoutubeMarkSvg = recordPreview.youtubeUrl ? (
    <YoutubeMarkSvg />
  ) : null;

  return (
    <Root>
      <ImageContainer>
        <Image src={recordPreview.thumbnailUrl} alt={recordPreview.title} />
        <ImageContainerOverlay />
      </ImageContainer>
      <Summary>
        <Title>{recordPreview.title}</Title>
        <StageAndScore>{`${recordPreview.stage} / ${recordPreview.score}점`}</StageAndScore>
        {renderSpecialTags}
      </Summary>
      {renderYoutubeMarkSvg}
    </Root>
  );
}
