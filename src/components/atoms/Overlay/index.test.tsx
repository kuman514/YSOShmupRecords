import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Overlay } from '.';

describe('Overlay', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show its children as contents', () => {
    render(<Overlay onClick={() => {}}>kuman514</Overlay>);

    expect(screen.getByText(/kuman514/i)).not.toBeNull();
  });

  it('should be clickable', () => {
    const mockFn = vi.fn();

    render(<Overlay onClick={mockFn}>kuman514</Overlay>);
    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });
});
