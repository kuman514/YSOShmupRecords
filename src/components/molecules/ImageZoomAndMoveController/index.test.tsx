import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { act, cleanup, render } from '@testing-library/react';

import { Simulate, SyntheticEventData } from 'react-dom/test-utils';
import { ImageZoomAndMoveController } from '.';

describe('ImageZoomAndMoveController', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be draggable', () => {
    const { container } = render(<ImageZoomAndMoveController imageUrl="" />);
    if (
      !container.firstChild ||
      !(container.firstChild instanceof HTMLElement)
    ) {
      throw Error('The container returned nullish');
    }

    act(() => {
      if (
        !container.firstChild ||
        !(container.firstChild instanceof HTMLElement)
      ) {
        throw Error('The container returned nullish');
      }

      Simulate.mouseMove(container.firstChild, {
        movementX: 514,
        movementY: 123,
        buttons: 1,
      } as unknown as SyntheticEventData);
    });

    const img = container.firstChild.querySelector('img');
    if (!img) {
      throw Error('The container returned nullish');
    }

    expect(img.style.transform).toStrictEqual(
      'scale(1) translate(514px, 123px)'
    );
  });

  it('should be zoomable', () => {
    const { container } = render(<ImageZoomAndMoveController imageUrl="" />);
    if (
      !container.firstChild ||
      !(container.firstChild instanceof HTMLElement)
    ) {
      throw Error('The container returned nullish');
    }

    act(() => {
      if (
        !container.firstChild ||
        !(container.firstChild instanceof HTMLElement)
      ) {
        throw Error('The container returned nullish');
      }

      Simulate.wheel(container.firstChild, { deltaY: 50 });
    });

    const img = container.firstChild.querySelector('img');
    if (!img) {
      throw Error('The container returned nullish');
    }

    expect(img.style.transform).toStrictEqual('scale(0.5) translate(0px, 0px)');
  });
});
