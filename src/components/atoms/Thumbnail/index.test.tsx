import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Thumbnail } from '.';

describe('Thumbnail', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should be clickable', () => {
    const mockFn = vi.fn();
    render(<Thumbnail imageSrc="" altText="kuman514" onClick={mockFn} />);

    fireEvent.click(screen.getByAltText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });
});
