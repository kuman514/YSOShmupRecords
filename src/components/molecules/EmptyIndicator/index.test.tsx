import { cleanup, render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import { EmptyIndicator } from '.';

describe('EmptyIndicator', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for its appearance', () => {
    const routes = [
      {
        path: '/',
        element: <EmptyIndicator />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
