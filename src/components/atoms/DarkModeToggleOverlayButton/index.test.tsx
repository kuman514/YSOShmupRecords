import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import 'jest-styled-components';

import { DarkModeToggleOverlayButton } from '^/components/atoms/DarkModeToggleOverlayButton';

describe('DarkModeToggleOverlayButton', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match', () => {
    const { container } = render(
      <DarkModeToggleOverlayButton onClick={() => {}} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a clickable button and an unclickable overlay', async () => {
    const mockFn = vi.fn();
    render(<DarkModeToggleOverlayButton onClick={mockFn} />);

    fireEvent.click(await screen.findByTestId('toggle-button'));
    expect(mockFn).toBeCalledTimes(1);
  });
});
