import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { ImageDisplayModal } from '.';

describe('ImageDisplayModal', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should not bubble events from children', () => {
    const mockFn = vi.fn();
    const { container } = render(
      <ImageDisplayModal imageUrl="" onExit={mockFn} />
    );

    fireEvent.click(screen.getByText(/닫기/i));
    expect(mockFn).toBeCalledTimes(1);

    fireEvent.click(
      screen.getByAltText(/Record image in expanded contain size/i)
    );
    expect(mockFn).toBeCalledTimes(1);

    if (container.firstChild !== null) {
      fireEvent.click(container.firstChild);
      expect(mockFn).toBeCalledTimes(2);
    }
  });
});
