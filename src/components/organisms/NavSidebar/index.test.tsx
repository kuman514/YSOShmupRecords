import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { NavSidebar } from '.';
import { rootNavNodes } from '^/constants';
import { useNavNodeStore } from '^/stores/nav-node';
import { texts } from '^/constants/texts';

describe('NavSidebar', () => {
  const routes = [
    {
      path: '/',
      element: <NavSidebar />,
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
    useNavNodeStore.getState().setRootNodes(rootNavNodes);
    render(<RouterProvider router={router} />);

    rootNavNodes.forEach((rootNavNode) => {
      expect(
        screen.getByText(texts[rootNavNode.id] ?? rootNavNode.id)
      ).not.toBeNull();
    });
  });
});
