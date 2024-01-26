import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import 'jest-styled-components';

import { SpecialTag } from '.';

describe('SpecialTag', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match', () => {
    const { container } = render(<SpecialTag>kuman514</SpecialTag>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
