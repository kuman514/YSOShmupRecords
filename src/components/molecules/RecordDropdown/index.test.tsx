import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { RecordDropdown } from '.';

describe('RecordDropdown', () => {
  beforeEach(() => {
    cleanup();
  });

  it('if we have a selected option in the list, it should show the date in the label', () => {
    const options = [
      {
        id: '20230926',
        when: new Date('Sep 26 2023'),
      },
      {
        id: '20230816',
        when: new Date('Aug 16 2023'),
      },
      {
        id: '20230710',
        when: new Date('Jul 10 2023'),
      },
    ];

    render(
      <RecordDropdown
        selectedOption={options[0]}
        options={options}
        onSelect={() => {}}
      />
    );

    expect(screen.getByText(/2023년 9월 26일/i)).not.toBeNull();
  });
});
