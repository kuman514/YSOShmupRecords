import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { navNodeInfoForTest } from '^/constants/nav-node';
import { NavigationTree } from '.';

describe('NavigationNode', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have padding equaling to depth * 16px', () => {
    const routes = [
      {
        path: '/',
        element: <NavigationTree depth={2} nodeInfo={navNodeInfoForTest} />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    const div = container.querySelector('div');
    if (!div) {
      throw Error('The container returned nullish');
    }
    expect(div.style.paddingLeft).toEqual('32px');
  });
});
