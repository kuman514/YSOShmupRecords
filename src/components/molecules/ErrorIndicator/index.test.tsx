import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ErrorIndicator } from '.';

describe('ErrorIndicator', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for its appearance', () => {
    const routes = [
      {
        path: '/',
        element: <ErrorIndicator title="오류가 발생했습니다." />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
