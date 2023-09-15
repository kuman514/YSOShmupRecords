import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { NavSidebar } from '.';
import { navNodeInfoForTest } from '^/constants';

describe('NavSidebar', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show nav nodes', () => {
    render(
      <NavSidebar
        navNodeInfo={navNodeInfoForTest}
        rootNavNodeIds={['test-sub1', 'test-sub2', 'test-sub4']}
      />
    );

    expect(screen.getByText(/subitem1/i)).not.toBeNull();
    expect(screen.getByText(/subitem2/i)).not.toBeNull();
    expect(screen.getByText(/subitem4/i)).not.toBeNull();
  });
});
