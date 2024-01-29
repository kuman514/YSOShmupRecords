import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import { Simulate } from 'react-dom/test-utils';
import { ImageDisplayModal } from '.';

describe('ImageDisplayModal', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should close modal only on-click close button', () => {
    const mockFn = vi.fn();
    const { container } = render(
      <ImageDisplayModal imageUrls={['']} onExit={mockFn} />
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

  it('should not show prev/next buttons while having only 1 image url', () => {
    const { container } = render(
      <ImageDisplayModal imageUrls={['']} onExit={() => {}} />
    );

    const prevImageButton = container.querySelector('#prev-image-button');
    expect(prevImageButton).toBeNull();
    const nextImageButton = container.querySelector('#next-image-button');
    expect(nextImageButton).toBeNull();
  });

  it('should show prev/next buttons while having at least 2 image urls', () => {
    const { container } = render(
      <ImageDisplayModal imageUrls={['yasuo', 'koishi']} onExit={() => {}} />
    );

    const prevImageButton = container.querySelector('#prev-image-button');
    expect(prevImageButton).not.toBeNull();
    const nextImageButton = container.querySelector('#next-image-button');
    expect(nextImageButton).not.toBeNull();
  });

  it('should have prev/next buttons operational', () => {
    const { container } = render(
      <ImageDisplayModal
        imageUrls={['yasuo', 'koishi', 'maverick']}
        onExit={() => {}}
      />
    );

    act(() => {
      const prevButton = container.querySelector('#prev-image-button');
      if (!prevButton || !(prevButton instanceof HTMLElement)) {
        throw Error('The prev button returned nullish');
      }

      Simulate.click(prevButton);
    });

    act(() => {
      const prevButton = container.querySelector('#prev-image-button');
      if (!prevButton || !(prevButton instanceof HTMLElement)) {
        throw Error('The prev button returned nullish');
      }

      Simulate.click(prevButton);
    });

    const imageContainer1 = container.querySelector('img');
    if (!imageContainer1 || !(imageContainer1 instanceof HTMLElement)) {
      throw Error('The image element returned nullish');
    }
    expect(imageContainer1.src).toMatch(/koishi/i);

    act(() => {
      const nextButton = container.querySelector('#next-image-button');
      if (!nextButton || !(nextButton instanceof HTMLElement)) {
        throw Error('The next button returned nullish');
      }

      Simulate.click(nextButton);
    });

    const imageContainer2 = container.querySelector('img');
    if (!imageContainer2 || !(imageContainer2 instanceof HTMLElement)) {
      throw Error('The image element returned nullish');
    }
    expect(imageContainer2.src).toMatch(/maverick/i);
  });
});
