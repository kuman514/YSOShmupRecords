import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';

import { NavItemTree } from '.';
import { navNodeInfoForTest } from '^/constants';

describe('NavItemTree', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have padding equaling to depth * 15px', () => {
    const { container } = render(
      <NavItemTree depth={3} nodeInfo={navNodeInfoForTest} />
    );
    const span = container.querySelector('span');
    if (!span) {
      throw Error('The container returned nullish');
    }
    expect(span.style.paddingLeft).toEqual('45px');
  });
});
