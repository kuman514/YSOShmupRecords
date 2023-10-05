import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { NavItemTree } from '.';
import { navNodeInfoForTest } from '^/constants';

describe('NavItemTree', () => {
  const routes = [
    {
      path: '/',
      element: (
        <NavItemTree depth={3} nodeInfo={navNodeInfoForTest} linkTo="/" />
      ),
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
  });

  beforeEach(() => {
    cleanup();
  });

  it('should have padding equaling to depth * 15px', () => {
    const { container } = render(<RouterProvider router={router} />);
    const span = container.querySelector('span');
    if (!span) {
      throw Error('The container returned nullish');
    }
    expect(span.style.paddingLeft).toEqual('45px');
  });
});
