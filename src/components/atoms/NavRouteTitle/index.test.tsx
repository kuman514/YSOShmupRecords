import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { NavRouteTitle } from '.';

describe('NavRouteTitle', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show separatedly for each route', () => {
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

    render(<RouterProvider router={router} />);

    const renderResult1 = screen.getByText(/kuman514/i);
    const renderResult2 = screen.getByText(/koishi/i);
    const renderResult3 = screen.getByText(/hoshino/i);

    expect(renderResult1).not.toStrictEqual(renderResult2);
    expect(renderResult1).not.toStrictEqual(renderResult3);
    expect(renderResult2).not.toStrictEqual(renderResult3);
  });

  it('should show text label or node id', () => {
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

  it('should show intro text when it is index route', () => {
    const routes = [
      {
        path: '/',
        element: <NavRouteTitle />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    const renderResult = screen.getByText(/개요/i);
    expect(renderResult).not.toBeNull();
  });

  it('should not show unnecessary intro text when it has path', () => {
    const routes = [
      {
        path: '/yasuo/maverick/',
        element: <NavRouteTitle />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/yasuo/maverick/'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    expect(screen.queryByText(/개요/i)).toBeNull();
  });
});
