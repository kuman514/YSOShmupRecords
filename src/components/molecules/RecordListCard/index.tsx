import React from 'react';
import styled from 'styled-components';

import { SpecialTag } from '^/components/atoms/SpecialTag';
import { textsForArticle } from '^/constants/texts';
import { ReactComponent as RawYoutubeMarkSvg } from '^/assets/icons/youtube-mark.svg';

const Root = styled.div`
  position: relative;
  width: 300px;
  min-height: 240px;

  display: grid;
  grid-template-rows: 200px 1fr;

  background-color: var(--primary-color);

  border-radius: 16px;

  &:hover {
    background-color: var(--hovering-color);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;
`;

const StageAndScore = styled.span`
  color: #ffffff;

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
  imageUrl: string;
  title: string;
  stageAndScore: string;
  youtubeUrl?: string;
  specialTags?: string[];
}

export function RecordListCard({
  imageUrl,
  title,
  stageAndScore,
  youtubeUrl,
  specialTags,
}: Props) {
  const renderSpecialTags =
    specialTags && specialTags.length > 0 ? (
      <SpecialTagsArea>
        {specialTags.map((specialTag) => (
          <SpecialTag key={`special-tag-${specialTag}`}>
            {textsForArticle[specialTag] ?? specialTag}
          </SpecialTag>
        ))}
      </SpecialTagsArea>
    ) : null;

  const renderYoutubeMarkSvg = youtubeUrl ? <YoutubeMarkSvg /> : null;

  return (
    <Root>
      <Image src={imageUrl} alt={title} />
      <Summary>
        <Title>{title}</Title>
        <StageAndScore>{stageAndScore}</StageAndScore>
        {renderSpecialTags}
      </Summary>
      {renderYoutubeMarkSvg}
    </Root>
  );
}
