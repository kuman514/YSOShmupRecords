import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import 'jest-styled-components';

import { SidebarHeader } from '.';

describe('SidebarHeader', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be a stack icon when closed', () => {
    const { container } = render(
      <SidebarHeader
        isNavigationOpen={false}
        onClickOpenOrCloseNavigationButton={() => {}}
      />
    );
    const div = container.querySelector('#Click-to-open-icon');
    if (!div) {
      throw Error('The container returned nullish');
    }
    expect(div.id).toStrictEqual('Click-to-open-icon');
  });

  it('should be a cross icon when open', () => {
    const { container } = render(
      <SidebarHeader
        isNavigationOpen
        onClickOpenOrCloseNavigationButton={() => {}}
      />
    );
    const div = container.querySelector('#Click-to-close-icon');
    if (!div) {
      throw Error('The container returned nullish');
    }
    expect(div.id).toStrictEqual('Click-to-close-icon');
  });

  it('should have a clickable button', () => {
    const mockFn = vi.fn();
    const { container } = render(
      <SidebarHeader
        isNavigationOpen
        onClickOpenOrCloseNavigationButton={mockFn}
      />
    );
    const div = container.querySelector('#Click-to-close-icon');
    if (!div) {
      throw Error('The container returned nullish');
    }
    fireEvent.click(div);
    expect(mockFn).toBeCalledTimes(1);
  });
});
