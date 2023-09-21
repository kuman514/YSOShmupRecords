import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { DropdownMainButton } from '.';

describe('DropdownMainButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be clickable no matter if it is open or not', () => {
    const mockFn = vi.fn();

    render(
      <DropdownMainButton label="kuman514" isOpen={false} onClick={mockFn} />
    );
    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);

    cleanup();

    render(<DropdownMainButton label="kuman514" isOpen onClick={mockFn} />);
    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(2);
  });

  it('should show click-to-open chevron when on close', () => {
    const { container } = render(
      <DropdownMainButton label="kuman514" isOpen={false} onClick={() => {}} />
    );
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-open chevron');
  });

  it('should show click-to-close chevron when on open', () => {
    const { container } = render(
      <DropdownMainButton label="kuman514" isOpen onClick={() => {}} />
    );
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-close chevron');
  });
});
