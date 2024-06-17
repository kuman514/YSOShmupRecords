import { act, cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { Simulate } from 'react-dom/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ContactButton } from '.';

describe('ContactButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match', () => {
    const { container } = render(<ContactButton onClick={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be clickable', async () => {
    const mockFn = vi.fn();
    const { container } = render(<ContactButton onClick={mockFn} />);

    act(() => {
      if (
        !container.firstChild ||
        !(container.firstChild instanceof HTMLElement)
      ) {
        throw Error('The container returned nullish');
      }

      Simulate.click(container.firstChild);
    });

    expect(mockFn).toBeCalledTimes(1);
  });
});
