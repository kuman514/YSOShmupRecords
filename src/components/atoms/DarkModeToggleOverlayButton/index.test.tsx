import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Simulate } from 'react-dom/test-utils';
import 'jest-styled-components';

import { DarkModeToggleOverlayButton } from '^/components/atoms/DarkModeToggleOverlayButton';

describe('DarkModeToggleOverlayButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match', () => {
    const { container } = render(<DarkModeToggleOverlayButton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a clickable button', async () => {
    const { container } = render(<DarkModeToggleOverlayButton />);

    act(() => {
      if (
        !container.firstChild ||
        !(container.firstChild instanceof HTMLElement)
      ) {
        throw Error('The container returned nullish');
      }

      Simulate.click(container.firstChild);
    });

    expect(document.documentElement.getAttribute('color-theme')).toStrictEqual(
      'dark'
    );

    act(() => {
      if (
        !container.firstChild ||
        !(container.firstChild instanceof HTMLElement)
      ) {
        throw Error('The container returned nullish');
      }

      Simulate.click(container.firstChild);
    });

    expect(document.documentElement.getAttribute('color-theme')).toStrictEqual(
      'light'
    );
  });
});
