import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { rootNavNodes } from '^/constants/nav-node';
import { textsForNavigation } from '^/constants/texts';

import { NavigationForest } from '.';

describe('NavSidebar', () => {
  const routes = [
    {
      path: '/',
      element: <NavigationForest rootNavNodes={rootNavNodes} />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
  });

  beforeEach(() => {
    cleanup();
  });

  it('should show root nav nodes on init', () => {
    render(<RouterProvider router={router} />);

    rootNavNodes.forEach((rootNavNode) => {
      expect(
        screen.getByText(textsForNavigation[rootNavNode.id] ?? rootNavNode.id)
      ).not.toBeNull();
    });
  });
});
