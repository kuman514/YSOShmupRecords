import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { NavSidebar } from '.';
import { rootNavNodes } from '^/constants';
import { useNavNodeStore } from '^/stores/nav-node';

describe('NavSidebar', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show root nav nodes', () => {
    useNavNodeStore.getState().setRootNodes(rootNavNodes);
    render(<NavSidebar />);

    rootNavNodes.forEach((rootNavNode) => {
      expect(screen.getByText(rootNavNode.label)).not.toBeNull();
    });
  });
});
