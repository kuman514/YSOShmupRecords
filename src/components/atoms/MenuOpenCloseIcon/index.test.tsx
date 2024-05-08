import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { beforeEach, describe, expect, it } from 'vitest';

import { MenuOpenCloseIcon } from '.';

describe('MenuOpenCloseIcon', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be a stack icon when closed', () => {
    const { container } = render(<MenuOpenCloseIcon isOpen={false} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstElementChild?.id).toStrictEqual('Click-to-open-icon');
  });

  it('should be a cross icon when open', () => {
    const { container } = render(<MenuOpenCloseIcon isOpen />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstElementChild?.id).toStrictEqual(
      'Click-to-close-icon'
    );
  });
});
