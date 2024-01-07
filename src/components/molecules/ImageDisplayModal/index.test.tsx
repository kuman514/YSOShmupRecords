import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { ImageDisplayModal } from '.';

describe('ImageDisplayModal', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should close modal only on-click close button', () => {
    const mockFn = vi.fn();
    const { container } = render(
      <ImageDisplayModal imageUrl="" onExit={mockFn} />
    );

    const clickToCloseIcon = container.querySelector('#Click-to-close-icon');
    if (!clickToCloseIcon) {
      throw Error('The container returned nullish');
    }
    fireEvent.click(clickToCloseIcon);
    expect(mockFn).toBeCalledTimes(1);

    fireEvent.click(
      screen.getByAltText(/Record image in expanded contain size/i)
    );
    expect(mockFn).toBeCalledTimes(1);
  });
});
