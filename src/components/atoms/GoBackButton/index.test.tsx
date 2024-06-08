import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { beforeEach, describe, expect, it } from 'vitest';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { GoBackButton } from '.';

describe('DarkModeToggleButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match', () => {
    const routes = [
      {
        path: '/',
        element: <GoBackButton />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      initialIndex: 0,
    });

    const { container } = render(<RouterProvider router={router} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should go back on click', async () => {
    const routes = [
      {
        path: '/koishi/hoshino',
        element: (
          <div>
            <GoBackButton />
            <div>애기코이시 애기호시노</div>
          </div>
        ),
      },
      {
        path: '/yasuo/science',
        element: (
          <div>
            <GoBackButton />
            <div>야스오는 과학이다</div>
          </div>
        ),
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/yasuo/science', '/koishi/hoshino'],
      initialIndex: 1,
    });

    render(<RouterProvider router={router} />);

    expect(await screen.findByText(/애기코이시 애기호시노/i)).not.toBeNull();

    fireEvent.click(await screen.findByText(/목록으로 돌아가기/i));

    expect(await screen.findByText(/야스오는 과학이다/i)).not.toBeNull();
  });
});
