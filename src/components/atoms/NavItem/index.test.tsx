import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { NavItem } from '.';

describe('NavItem', () => {
  it('should be clickable when it is NOT disabled', () => {
    const mockFn = vi.fn();
    render(
      <NavItem isActive isDisabled={false} onClick={mockFn}>
        kuman514
      </NavItem>
    );
    fireEvent.click(screen.getByText(/kuman514/g));
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should be NOT clickable when it is disabled', () => {
    const mockFn = vi.fn();
    render(
      <NavItem isActive isDisabled onClick={mockFn}>
        kuman514
      </NavItem>
    );
    fireEvent.click(screen.getByText(/kuman514/g));
    expect(mockFn).toBeCalledTimes(0);
  });
});
