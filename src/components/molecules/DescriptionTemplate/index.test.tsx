import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { DescriptionListItem } from '^/types';

import { DescriptionTemplate } from '.';

const rootDescriptionListItems: DescriptionListItem[] = [
  {
    id: 'test-1',
    description: 'Root Test 1',
  },
  {
    id: 'test-1-1',
    description: 'Root Test Sub 1',
  },
  {
    id: 'test-1-2',
    description: 'Root Test Sub 2',
  },
  {
    id: 'test-1-2-1',
    description: 'Root Test Sub Sub 1',
  },
  {
    id: 'test-1-2-2',
    description: 'Root Test Sub Sub 2',
  },
  {
    id: 'test-1-2-3',
    description: 'Root Test Sub Sub 3',
  },
  {
    id: 'test-1-3',
    description: 'Root Test Sub 3',
  },
  {
    id: 'test-2',
    description: 'Root Test 2',
  },
  {
    id: 'test-3',
    description: 'Root Test 3',
  },
  {
    id: 'test-3-1',
    description: 'Root Test Sub 5',
  },
];

describe('DescriptionTemplate', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have all root list items and their sub-items', async () => {
    render(
      <DescriptionTemplate
        title="Test 1 kuman514"
        descriptionListItems={rootDescriptionListItems}
      />
    );

    expect(await screen.findByText(/Test 1 kuman514/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test 1/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test Sub 1/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test Sub 2/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test Sub Sub 1/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test Sub Sub 2/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test Sub Sub 3/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test Sub 3/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test 2/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test 3/i)).not.toBeNull();
    expect(await screen.findByText(/Root Test Sub 5/i)).not.toBeNull();
  });
});
