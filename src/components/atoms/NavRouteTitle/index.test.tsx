import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

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

  it('should not show when it is index route', () => {
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

    const { container } = render(<RouterProvider router={router} />);

    const nav = container.querySelector('nav');
    expect(nav).toBeNull();
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

    expect(screen.queryByText(/인삿말/i)).toBeNull();
  });

  it('should have each text label or node id clickable', async () => {
    const routes = [
      {
        path: '/test-sub1',
        element: (
          <div>
            <NavRouteTitle />
            <div>꼭대기 전설</div>
          </div>
        ),
      },
      {
        path: '/test-sub1/test',
        element: (
          <div>
            <NavRouteTitle />
            <div>야스오</div>
          </div>
        ),
      },
      {
        path: '/test-sub1/test/koishi',
        element: (
          <div>
            <NavRouteTitle />
            <div>애기코이시</div>
          </div>
        ),
      },
      {
        path: '/test-sub1/test/koishi/hoshino',
        element: (
          <div>
            <NavRouteTitle />
            <div>애기호시노</div>
          </div>
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/test-sub1/test/koishi/hoshino'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    expect(await screen.findByText(/애기호시노/i)).not.toBeNull();
    fireEvent.click(await screen.findByText(/koishi/i));

    expect(await screen.findByText(/애기코이시/i)).not.toBeNull();
    fireEvent.click(await screen.findByText(/kuman514/i));

    expect(await screen.findByText(/야스오/i)).not.toBeNull();
    fireEvent.click(await screen.findByText(/subitem1/i));

    expect(await screen.findByText(/꼭대기 전설/i)).not.toBeNull();
  });
});
