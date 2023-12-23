import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, it, beforeEach, expect } from 'vitest';
import 'jest-styled-components';

import { ShmupRecordPreview } from '^/types';
import { RecordSelection } from '.';
import { convertDateToString } from '^/utils/date-to-string';

const recordIdsForTest: string[] = ['2023-10-28', '2023-05-14', '2022-11-21'];

const recordPreviewForTest = recordIdsForTest.map(
  (recordId): ShmupRecordPreview => ({
    id: recordId,
    title: convertDateToString(new Date(recordId)),
    imageUrl: `${recordId}.jpg`,
  })
);

describe('RecordSelection', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should match snapshot while loading regardless of savedTypeId, recordIds, and isError', () => {
    const routes = [
      {
        path: '/',
        element: (
          <>
            <RecordSelection recordPreviews={[]} isLoading isError={false} />
            <RecordSelection
              recordPreviews={recordPreviewForTest}
              isLoading
              isError={false}
            />
            <RecordSelection recordPreviews={[]} isLoading isError />
          </>
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot on not-loading error regardless of savedTypeId and recordIds', () => {
    const routes = [
      {
        path: '/',
        element: (
          <>
            <RecordSelection recordPreviews={[]} isLoading={false} isError />
            <RecordSelection
              recordPreviews={recordPreviewForTest}
              isLoading={false}
              isError
            />
          </>
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with empty recordIds on not-loading and not-error', () => {
    const { container } = render(
      <RecordSelection recordPreviews={[]} isLoading={false} isError={false} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with non-empty recordIds on not-loading and not-error', () => {
    const routes = [
      {
        path: '/',
        element: (
          <RecordSelection
            recordPreviews={recordPreviewForTest}
            isLoading={false}
            isError={false}
          />
        ),
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
        element: (
          <RecordSelection
            recordPreviews={recordPreviewForTest}
            isLoading={false}
            isError={false}
          />
        ),
      },
      {
        path: '/2023-05-14',
        element: <div>Correct!</div>,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/2023-05-14'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);
    fireEvent.click(await screen.findByText(/2023년 5월 14일/i));
    expect(await screen.findByText(/Correct!/i)).not.toBeNull();
  });
});
