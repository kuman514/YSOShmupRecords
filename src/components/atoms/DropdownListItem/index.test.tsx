import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { DropdownListItem } from '.';

describe('DropdownListItem', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be clickable when it is NOT selected', () => {
    const mockFn = vi.fn();
    render(
      <DropdownListItem label="kuman514" isSelected={false} onClick={mockFn} />
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should be disabled when it is selected', () => {
    const mockFn = vi.fn();
    render(<DropdownListItem label="kuman514" isSelected onClick={mockFn} />);

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(0);
  });
});
