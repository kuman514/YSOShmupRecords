import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { describe, it, beforeEach, expect } from 'vitest';
import 'jest-styled-components';

import { RecordSelection } from '.';

describe('RecordSelection', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should match snapshot while loading regardless of savedTypeId, recordIds, and isError', () => {
    const { container } = render(
      <>
        <RecordSelection
          savedTypeId="yasuo"
          recordIds={['']}
          isLoading
          isError={false}
        />
        <RecordSelection
          savedTypeId="yasuo"
          recordIds={['2023-01-23', '2022-11-14']}
          isLoading
          isError={false}
        />
        <RecordSelection savedTypeId="" recordIds={[]} isLoading isError />
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot on not-loading error regardless of savedTypeId and recordIds', () => {
    const { container } = render(
      <>
        <RecordSelection
          savedTypeId="kuman514"
          recordIds={[]}
          isLoading={false}
          isError
        />
        <RecordSelection
          savedTypeId="yasuo"
          recordIds={['2023-01-23', '2022-11-14']}
          isLoading={false}
          isError
        />
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with empty recordIds on not-loading and not-error', () => {
    const { container } = render(
      <RecordSelection
        savedTypeId="kuman514"
        recordIds={[]}
        isLoading={false}
        isError={false}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should match snapshot with non-empty recordIds on not-loading and not-error', () => {
    const routes = [
      {
        path: '/',
        element: (
          <RecordSelection
            savedTypeId="kuman514"
            recordIds={['2023-10-28', '2023-05-14', '2022-11-21']}
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
            savedTypeId="kuman514"
            recordIds={['2023-05-14']}
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
