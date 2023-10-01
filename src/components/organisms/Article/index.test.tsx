import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { Article } from '.';
import { ShmupRecord } from '^/types';
import { convertDateToString } from '^/utils';

const testData: ShmupRecord = {
  id: '20230514',
  when: new Date('May 14 2023'),
  subjectId: 'dodonpachi-cshot',
  stage: '2-4',
  score: '80000000',
  byWhat: 'Arcade in Akatronics',
  comment: '야스오 2-4 진출',
  thumbnailUrl: 'Thumbnail URL',
  originalImageUrl: 'Original Image URL',
  tweetUrl: 'Tweet URL',
  specialTags: ['science', 'no miss'],
  youtubeUrl: 'Youtube URL',
};

describe('Article', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have thumbnail, date title, stage, score, method, tweet link, special tag area, commentary, and youtube', () => {
    render(<Article record={testData} />);

    const thumbnail = screen.getByAltText(
      `${testData.subjectId} ${convertDateToString(testData.when)} ${
        testData.stage
      }스테이지 ${testData.score}점`
    );
    expect(thumbnail).not.toBeNull();

    const dateTitle = screen.getByText(convertDateToString(testData.when));
    expect(dateTitle).not.toBeNull();

    const stage = screen.getByText(testData.stage);
    expect(stage).not.toBeNull();

    const score = screen.getByText(`${testData.score}점`);
    expect(score).not.toBeNull();

    const byWhat = screen.getByText(testData.byWhat);
    expect(byWhat).not.toBeNull();

    const tweetUrl = screen.getByText(testData.tweetUrl);
    expect(tweetUrl).not.toBeNull();

    const specialTagTitle = screen.getByText(/특이사항/i);
    expect(specialTagTitle).not.toBeNull();

    testData.specialTags?.forEach((specialTag) => {
      const specialTagName = screen.getByText(specialTag);
      expect(specialTagName).not.toBeNull();
    });

    const commentary = screen.getByText(testData.comment);
    expect(commentary).not.toBeNull();

    const youtube = screen.getByText(/유튜브 링크/i);
    expect(youtube).not.toBeNull();
  });
});
