import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ShmupRecord } from '^/types';
import { convertDateToString } from '^/utils/date-to-string';

import { Article } from '.';

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
  specialTags: ['science', 'no miss'],
  youtubeUrl: 'Youtube URL',
};

describe('Article', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have nav route title, thumbnail, date title, stage, score, method, special tag area, commentary, and youtube', () => {
    const routes = [
      {
        path: '/test-sub1/test/koishi/hoshino',
        element: <Article recordArticle={testData} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/test-sub1/test/koishi/hoshino'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    const renderResult1 = screen.getByText(/kuman514/i);
    const renderResult2 = screen.getByText(/koishi/i);
    const renderResult3 = screen.getByText(/hoshino/i);

    expect(renderResult1).not.toStrictEqual(renderResult2);
    expect(renderResult1).not.toStrictEqual(renderResult3);
    expect(renderResult2).not.toStrictEqual(renderResult3);

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

    const specialTagTitle = screen.getByText(/특이사항/i);
    expect(specialTagTitle).not.toBeNull();

    testData.specialTags?.forEach((specialTag) => {
      const specialTagName = screen.getByText(specialTag);
      expect(specialTagName).not.toBeNull();
    });

    const commentary = screen.getByText(testData.comment);
    expect(commentary).not.toBeNull();

    const youtube = screen.getByText(/유튜브 영상/i);
    expect(youtube).not.toBeNull();
  });
});
