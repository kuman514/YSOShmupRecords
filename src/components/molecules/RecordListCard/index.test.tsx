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
      <RecordListCard
        imageUrl={AvatarJpgUrl}
        title="kuman514"
        stageAndScore="2-5 / 12345679점"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText(/kuman514/i)).not.toBeNull();
  });

  it('should have a snapshot match showing youtube mark and special tags', () => {
    const { container } = render(
      <RecordListCard
        imageUrl={AvatarJpgUrl}
        title="kuman514"
        stageAndScore="2-5 / 12345679점"
        youtubeUrl="youtubeurl"
        specialTags={['yasuo', 'koishi', 'no-miss-all']}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
