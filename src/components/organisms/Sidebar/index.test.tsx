import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { rootNavNodes } from '^/constants/nav-node';

import { Sidebar } from '.';

describe('Sidebar', () => {
  const routes = [
    {
      path: '/',
      element: <Sidebar rootNavNodes={rootNavNodes} />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
  });

  beforeEach(() => {
    cleanup();
  });

  it('should show title on init', () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByText(/YSOShmupRecords/i)).not.toBeNull();
  });
});
