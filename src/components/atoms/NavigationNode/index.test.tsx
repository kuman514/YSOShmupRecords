import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { navNodeInfoForTest } from '^/constants/nav-node';
import { NavigationNode } from '.';

describe('NavigationNode', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show h2 for root node', () => {
    const routes = [
      {
        path: '/',
        element: <NavigationNode depth={0} nodeInfo={navNodeInfoForTest} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    const h2 = container.querySelector('h2');
    expect(h2).not.toBeNull();
  });

  it('should show h3 for non-leaf child node', () => {
    const routes = [
      {
        path: '/',
        element: (
          <NavigationNode
            depth={1}
            nodeInfo={navNodeInfoForTest.childNavNodes![1]}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    const h3 = container.querySelector('h3');
    expect(h3).not.toBeNull();
  });

  it('should show span for leaf node', () => {
    const routes = [
      {
        path: '/',
        element: (
          <NavigationNode
            depth={2}
            nodeInfo={navNodeInfoForTest.childNavNodes![0]}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    const span = container.querySelector('span');
    expect(span).not.toBeNull();
  });

  it('should have an anchor the node has a link', () => {
    const routes = [
      {
        path: '/',
        element: (
          <NavigationNode
            depth={2}
            nodeInfo={navNodeInfoForTest.childNavNodes![1].childNavNodes![0]}
          />
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    const a = container.querySelector('a');
    if (!a) {
      throw Error('The container returned nullish');
    }
    expect(a).not.toBeNull();
    expect(a.href).toStrictEqual(`${a.protocol}//${a.host}/kuman514`);
  });
});
