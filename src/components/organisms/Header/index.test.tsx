import { cleanup, render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';
import 'jest-styled-components';

import { Header } from '.';

describe('Header', () => {
  const routes = [
    {
      path: '/',
      element: <Header onClickOpenOrCloseNavigationButton={() => {}} />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
    initialIndex: 0,
  });

  beforeEach(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
