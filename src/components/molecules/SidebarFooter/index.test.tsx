import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { beforeEach, describe, expect, it } from 'vitest';

import { SidebarFooter } from '^/components/molecules/SidebarFooter';

describe('SidebarFooter', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for its appearance', () => {
    const { container } = render(<SidebarFooter />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
