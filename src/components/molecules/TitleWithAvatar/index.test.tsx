import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { beforeEach, describe, expect, it } from 'vitest';

import { TitleWithAvatar } from '.';

describe('TitleWithAvatar', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for its appearance', () => {
    const { container } = render(<TitleWithAvatar />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
