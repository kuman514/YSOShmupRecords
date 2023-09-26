import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { NavItem } from '.';
import { navNodeInfoForTest } from '^/constants';

describe('NavItem', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be clickable when it is NOT disabled', () => {
    const mockFn = vi.fn();
    render(
      <NavItem
        navNodeInfo={navNodeInfoForTest}
        depth={0}
        nodeInfo={navNodeInfoForTest.test}
        onClick={mockFn}
      />
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });
});
