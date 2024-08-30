import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import { beforeEach, describe, expect, it } from 'vitest';

import { Terminology } from '^/types';

import { TerminologyDescription } from '.';

const rootDescriptionListItems: Terminology[] = [
  {
    id: 'test-1',
    term: 'term 1',
    description: 'Root Test 1',
  },
  {
    id: 'test-1-1',
    term: 'term 1-1',
    description: 'Root Test Sub 1',
  },
  {
    id: 'test-1-2',
    term: 'term 1-2',
    description: 'Root Test Sub 2',
  },
  {
    id: 'test-1-2-1',
    term: 'term 1-2-1',
    description: 'Root Test Sub Sub 1',
  },
  {
    id: 'test-1-2-2',
    term: 'term 1-2-2',
    description: 'Root Test Sub Sub 2',
  },
  {
    id: 'test-1-2-3',
    term: 'term 1-2-3',
    description: 'Root Test Sub Sub 3',
  },
  {
    id: 'test-1-3',
    term: 'term 1-3',
    description: 'Root Test Sub 3',
  },
  {
    id: 'test-2',
    term: 'term 2',
    description: 'Root Test 2',
  },
  {
    id: 'test-3',
    term: 'term 3',
    description: 'Root Test 3',
  },
  {
    id: 'test-3-1',
    term: 'term 3-1',
    description: 'Root Test Sub 5',
  },
];

describe('TerminologyDescription', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have all root list items and their sub-items (match snapshot)', async () => {
    const { container } = render(
      <TerminologyDescription
        title="Test 1 kuman514"
        descriptionListItems={rootDescriptionListItems}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
