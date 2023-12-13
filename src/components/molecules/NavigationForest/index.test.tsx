import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { navNodeInfoForTest, rootNavNodes } from '^/constants/nav-node';
import { textsForNavigation } from '^/constants/texts';

import { NavigationForest } from '.';

describe('NavSidebar', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show root nav nodes on init', () => {
    const routes = [
      {
        path: '/',
        element: (
          <NavigationForest
            onClickNavigationNode={() => {}}
            rootNavNodes={rootNavNodes}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    rootNavNodes.forEach((rootNavNode) => {
      expect(
        screen.getByText(textsForNavigation[rootNavNode.id] ?? rootNavNode.id)
      ).not.toBeNull();
    });
  });

  it('should invoke onClickNavigationNode on click anchor', async () => {
    const mockFn = vi.fn();
    const routes = [
      {
        path: '/',
        element: (
          <NavigationForest
            onClickNavigationNode={mockFn}
            rootNavNodes={[navNodeInfoForTest]}
          />
        ),
      },
      {
        path: '/kuman514',
        element: (
          <NavigationForest
            onClickNavigationNode={mockFn}
            rootNavNodes={[navNodeInfoForTest]}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/kuman514'],
      initialIndex: 0,
    });

    render(<RouterProvider router={router} />);

    fireEvent.click(await screen.findByText(/subitem4/i));
    expect(mockFn).toBeCalledTimes(1);

    fireEvent.click(await screen.findByText(/subitem3/i));
    expect(mockFn).toBeCalledTimes(1);
  });
});
