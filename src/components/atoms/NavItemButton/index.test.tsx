import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { navNodeInfoForTest } from '^/constants/nav-node';

import { NavItemButton } from '.';

describe('NavItemButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be clickable', () => {
    const mockFn = vi.fn();

    render(
      <NavItemButton depth={0} nodeInfo={navNodeInfoForTest} onClick={mockFn} />
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should have padding equaling to depth * 15px', () => {
    const { container } = render(
      <NavItemButton
        depth={2}
        nodeInfo={navNodeInfoForTest}
        onClick={() => {}}
      />
    );

    const span = container.querySelector('span');
    if (!span) {
      throw Error('The container returned nullish');
    }

    expect(span.style.paddingLeft).toEqual('30px');
  });
});
