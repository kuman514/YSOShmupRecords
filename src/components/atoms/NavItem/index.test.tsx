import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { NavItem } from '.';
import { navNodeInfo } from '^/constants';

describe('NavItem', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be clickable when it is NOT disabled', () => {
    const mockFn = vi.fn();
    render(
      <NavItem
        depth={0}
        nodeInfo={navNodeInfo.test}
        isDisabled={false}
        onClick={mockFn}
      />
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should be NOT clickable when it is disabled', () => {
    const mockFn = vi.fn();
    render(
      <NavItem
        depth={0}
        nodeInfo={navNodeInfo.test}
        isDisabled
        onClick={mockFn}
      />
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(0);
  });
});
