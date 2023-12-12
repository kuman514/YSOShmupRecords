import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import 'jest-styled-components';

import AvatarJpgUrl from '^/assets/avatar/avatar.jpeg';
import { RecordListCard } from '.';

describe('RecordListCard', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for its appearance', () => {
    const { container } = render(
      <RecordListCard imageUrl={AvatarJpgUrl} title="kuman514" />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText(/kuman514/i)).not.toBeNull();
  });
});
