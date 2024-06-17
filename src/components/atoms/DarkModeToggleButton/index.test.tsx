import { act, cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { Simulate } from 'react-dom/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';

import { DarkModeToggleButton } from '^/components/atoms/DarkModeToggleButton';

describe('DarkModeToggleButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match', () => {
    const { container } = render(<DarkModeToggleButton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a clickable button', async () => {
    const { container } = render(<DarkModeToggleButton />);

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
