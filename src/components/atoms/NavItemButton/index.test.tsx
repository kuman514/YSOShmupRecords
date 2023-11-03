import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { navNodeInfoForTest } from '^/constants';

import { NavItemButton } from '.';

describe('NavItemButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show chevron when it has subnodes', () => {
    const routes = [
      {
        path: '/',
        element: (
          <NavItemButton
            depth={0}
            nodeInfo={navNodeInfoForTest}
            onClick={() => {}}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-open chevron');
  });

  it('should NOT show chevron when it has NO subnode', () => {
    const routes = [
      {
        path: '/',
        element: (
          <NavItemButton
            depth={0}
            nodeInfo={navNodeInfoForTest.childNavNodes![0]}
            onClick={() => {}}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    const vectorG = container.querySelector('svg > g');
    expect(vectorG).toBeNull();
  });

  it('should be clickable', () => {
    const mockFn = vi.fn();

    const routes = [
      {
        path: '/',
        element: (
          <NavItemButton
            depth={0}
            nodeInfo={navNodeInfoForTest}
            onClick={mockFn}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });
});
