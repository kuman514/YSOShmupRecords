import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { RecordDropdown } from '.';

describe('RecordDropdown', () => {
  beforeEach(() => {
    cleanup();
  });

  it('if we have a selected option in the list, it should show the date in the label', () => {
    const options = ['2023-09-26', '2023-08-16', '2023-07-10'];

    render(
      <RecordDropdown
        selectedOption={options[0]}
        placeholder="선택된 기록이 없습니다."
        options={options}
        onSelect={() => {}}
      />
    );

    expect(screen.getByText(/2023년 9월 26일/i)).not.toBeNull();
  });

  it('if we do NOT have a selected option in the list, it should show placeholder', () => {
    const options = ['2023-09-26', '2023-08-16', '2023-07-10'];

    render(
      <RecordDropdown
        placeholder="선택된 기록이 없습니다."
        options={options}
        onSelect={() => {}}
      />
    );

    expect(screen.getByText(/선택된 기록이 없습니다./i)).not.toBeNull();
  });
});
