import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';

describe('NavRouteTitle', () => {
  const routes = [
    {
      path: '/kuman514/koishi/hoshino',
      element: <NavRouteTitle />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/kuman514/koishi/hoshino'],
    initialIndex: 1,
  });

  beforeEach(() => {
    cleanup();
  });

  it('should show separatedly for each route', () => {
    render(<RouterProvider router={router} />);

    const renderResult1 = screen.getByText(/kuman514/i);
    const renderResult2 = screen.getByText(/koishi/i);
    const renderResult3 = screen.getByText(/hoshino/i);

    expect(renderResult1).not.toStrictEqual(renderResult2);
    expect(renderResult1).not.toStrictEqual(renderResult3);
    expect(renderResult2).not.toStrictEqual(renderResult3);
  });
});
