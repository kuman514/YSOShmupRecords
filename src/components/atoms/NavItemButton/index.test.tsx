import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { NavItemButton } from '.';
import { navNodeInfoForTest } from '^/constants';

describe('NavItemButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show chevron when it has subnodes', () => {
    const { container } = render(
      <NavItemButton
        depth={0}
        nodeInfo={navNodeInfoForTest}
        onClick={() => {}}
      />
    );
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-open chevron');
  });

  it('should NOT show chevron when it has NO subnode', () => {
    const { container } = render(
      <NavItemButton
        depth={0}
        nodeInfo={navNodeInfoForTest.childNavNodes[0]}
        onClick={() => {}}
      />
    );
    const vectorG = container.querySelector('svg > g');
    expect(vectorG).toBeNull();
  });

  it('should be clickable', () => {
    const mockFn = vi.fn();
    render(
      <NavItemButton depth={0} nodeInfo={navNodeInfoForTest} onClick={mockFn} />
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });
});
