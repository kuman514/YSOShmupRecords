import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ShmupRecord } from '^/types';
import { convertDateToString } from '^/utils/date-to-string';

import { ArticleSummary } from '.';

const testDataWithoutSpecialTags: ShmupRecord = {
  id: '20230514',
  when: new Date('May 14 2023'),
  subjectId: 'dodonpachi-cshot',
  stage: '2-4',
  score: '80000000',
  byWhat: 'Arcade in Akatronics',
  comment: '야스오 2-4 진출',
  thumbnailUrl: 'Thumbnail URL',
  originalImageUrl: 'Original Image URL',
};

const testDataWithSpecialTags: ShmupRecord = {
  ...testDataWithoutSpecialTags,
  specialTags: ['science', 'no miss'],
};

describe('ArticleSummary', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have thumbnail, date title, stage, score, method', () => {
    const routes = [
      {
        path: '/test-sub1/test/koishi/hoshino',
        element: <ArticleSummary record={testDataWithoutSpecialTags} />,
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
      `${testDataWithoutSpecialTags.subjectId} ${convertDateToString(
        testDataWithoutSpecialTags.when
      )} ${testDataWithoutSpecialTags.stage}스테이지 ${
        testDataWithoutSpecialTags.score
      }점`
    );
    expect(thumbnail).not.toBeNull();

    const dateTitle = screen.getByText(
      convertDateToString(testDataWithoutSpecialTags.when)
    );
    expect(dateTitle).not.toBeNull();

    const stage = screen.getByText(testDataWithoutSpecialTags.stage);
    expect(stage).not.toBeNull();

    const score = screen.getByText(`${testDataWithoutSpecialTags.score}점`);
    expect(score).not.toBeNull();

    const byWhat = screen.getByText(testDataWithoutSpecialTags.byWhat);
    expect(byWhat).not.toBeNull();
  });

  it('should show special tag area when the record have tags', () => {
    const routes = [
      {
        path: '/',
        element: <ArticleSummary record={testDataWithSpecialTags} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const specialTagTitle = screen.getByText(/특이사항/i);
    expect(specialTagTitle).not.toBeNull();

    testDataWithSpecialTags.specialTags?.forEach((specialTag) => {
      const specialTagName = screen.getByText(specialTag);
      expect(specialTagName).not.toBeNull();
    });
  });
});
