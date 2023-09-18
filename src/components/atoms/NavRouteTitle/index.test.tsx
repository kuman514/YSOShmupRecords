import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { NavRouteTitle } from '^/components/atoms/NavRouteTitle';

describe('NavRouteTitle', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show separatedly for each route', () => {
    render(<NavRouteTitle navNodeIds={['kuman514', 'koishi', 'hoshino']} />);

    const renderResult1 = screen.getByText(/kuman514/i);
    const renderResult2 = screen.getByText(/koishi/i);
    const renderResult3 = screen.getByText(/hoshino/i);

    expect(renderResult1).not.toStrictEqual(renderResult2);
    expect(renderResult1).not.toStrictEqual(renderResult3);
    expect(renderResult2).not.toStrictEqual(renderResult3);
  });
});
