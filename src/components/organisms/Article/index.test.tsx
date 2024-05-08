import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import { ShmupRecord } from '^/types';
import { convertDateToString } from '^/utils/date-to-string';

import { Article } from '.';

const testData: ShmupRecord = {
  recordId: '20230514',
  when: new Date('May 14 2023'),
  typeId: 'dodonpachi-cshot',
  stage: '2-4',
  score: '80000000',
  byWhat: 'Arcade in Akatronics',
  comment: '야스오 2-4 진출',
  thumbnailUrl: 'Thumbnail URL',
  originalImageUrls: ['Original Image URL'],
  specialTags: ['science', 'no miss'],
  youtubeUrl: 'Youtube URL',
};

describe('Article', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have thumbnail, date title, stage, score, method, special tag area, commentary, and youtube', () => {
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

    const thumbnail = screen.getByAltText(
      `${testData.typeId} ${convertDateToString(testData.when)} ${
        testData.stage
      }스테이지 ${testData.score}점`
    );
    expect(thumbnail).not.toBeNull();

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
