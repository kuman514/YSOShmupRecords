import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import { rootNavNodes } from '^/constants/nav-node';
import { textsForNavigation } from '^/constants/texts';

import { NavigationSidebar } from '.';

describe('NavigationSidebar', () => {
  const routes = [
    {
      path: '/',
      element: (
        <NavigationSidebar
          rootNavNodes={rootNavNodes}
          isNavigationOpen
          onClickCloseNavigationButton={() => {}}
        />
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

  it('should show navigation nodes, close button, and footer', () => {
    render(<RouterProvider router={router} />);

    rootNavNodes.forEach((rootNavNode) => {
      expect(
        screen.getByText(textsForNavigation[rootNavNode.id] ?? rootNavNode.id)
      ).not.toBeNull();
    });
  });

  it('should show a cross icon when open', () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container.querySelector('#Click-to-close-icon')).not.toBeNull();
  });

  it('should renders footer', async () => {
    render(<RouterProvider router={router} />);
    expect(await screen.findByText('YSO as kuman514')).not.toBeNull();
  });
});
