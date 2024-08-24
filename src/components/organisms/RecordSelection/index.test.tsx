import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import { ShmupRecordPreview } from '^/types';

import { RecordSelection } from '.';

const recordPreviewForTest: ShmupRecordPreview[] = [
  {
    recordId: 'dodonpachi-cshot--2023-10-28',
    when: new Date('Oct 28 2023'),
    typeId: 'dodonpachi-cshot',
    stage: '2-4',
    score: '80000000',
    byWhat: 'Arcade in Akatronics',
    comment: '야스오 2-4 진출',
    thumbnailUrl: 'Thumbnail URL',
    originalImageUrls: ['Original Image URL'],
    title: '2023년 10월 28일',
  },
  {
    recordId: 'dodonpachi-cshot--2023-05-14',
    when: new Date('May 14 2023'),
    typeId: 'dodonpachi-cshot',
    stage: '2-4',
    score: '80000000',
    byWhat: 'Arcade in Akatronics',
    comment: '야스오 2-4 진출',
    thumbnailUrl: 'Thumbnail URL',
    originalImageUrls: ['Original Image URL'],
    title: '2023년 5월 14일',
  },
  {
    recordId: 'dodonpachi-cshot--2022-11-21',
    when: new Date('Nov 21 2023'),
    typeId: 'dodonpachi-cshot',
    stage: '2-4',
    score: '80000000',
    byWhat: 'Arcade in Akatronics',
    comment: '김두한',
    thumbnailUrl: 'Thumbnail URL',
    originalImageUrls: ['Original Image URL'],
    title: '2022년 11월 21일',
  },
];

describe('RecordSelection', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should match snapshot with empty recordIds', () => {
    const routes = [
      {
        path: '/',
        element: <RecordSelection recordPreviews={[]} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with non-empty recordIds', () => {
    const routes = [
      {
        path: '/',
        element: <RecordSelection recordPreviews={recordPreviewForTest} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should route on click record selection item', async () => {
    const routes = [
      {
        path: '/',
        element: <RecordSelection recordPreviews={recordPreviewForTest} />,
      },
      {
        path: '/records/dodonpachi-cshot/2023-05-14',
        element: <div>Correct!</div>,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/records/dodonpachi-cshot/2023-05-14'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);
    fireEvent.click(await screen.findByText(/2023년 5월 14일/i));
    expect(await screen.findByText(/Correct!/i)).not.toBeNull();
  });
});
