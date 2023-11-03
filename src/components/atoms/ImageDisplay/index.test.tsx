import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { ImageDisplay } from '.';

describe('ImageDisplay', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a clickable close button', () => {
    const mockFn = vi.fn();
    render(<ImageDisplay imageUrl="" onClickClose={mockFn} />);

    fireEvent.click(screen.getByText(/닫기/i));

    expect(mockFn).toBeCalledTimes(1);
  });

  it('should not bubble events from children', () => {
    const mockFn = vi.fn();
    render(
      <div onClick={mockFn}>
        <ImageDisplay imageUrl="" onClickClose={() => {}} />
      </div>
    );

    fireEvent.click(screen.getByText(/닫기/i));
    fireEvent.click(
      screen.getByAltText(/Record image in expanded contain size/i)
    );

    expect(mockFn).toBeCalledTimes(0);
  });
});
