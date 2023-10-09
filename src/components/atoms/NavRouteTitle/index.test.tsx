import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';

describe('NavRouteTitle', () => {
  const routes = [
    {
      path: '/test-sub1/test/koishi/hoshino',
      element: <NavRouteTitle />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/', '/test-sub1/test/koishi/hoshino'],
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

  it('should show text label or node id', () => {
    render(<RouterProvider router={router} />);

    const renderResult1 = screen.getByText(/subitem1/i);
    const renderResult2 = screen.getByText(/kuman514/i);
    const renderResult3 = screen.getByText(/koishi/i);
    const renderResult4 = screen.getByText(/hoshino/i);

    expect(renderResult1).not.toBeNull();
    expect(renderResult2).not.toBeNull();
    expect(renderResult3).not.toBeNull();
    expect(renderResult4).not.toBeNull();
  });
});
