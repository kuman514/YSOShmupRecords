import { cleanup, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { beforeEach, describe, expect, it } from 'vitest';

import AvatarJpgUrl from '^/assets/avatar/avatar.jpeg';
import { ShmupRecordPreview } from '^/types';

import { RecordListCard } from '.';

const previewForTest: ShmupRecordPreview = {
  title: 'kuman514',
  recordId: 'test-test',
  when: new Date('2024-01-01'),
  typeId: 'test',
  stage: '2-5',
  score: '12345679',
  byWhat: 'test',
  comment: 'test',
  thumbnailUrl: AvatarJpgUrl,
  originalImageUrls: [],
};

describe('RecordListCard', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for its appearance', () => {
    const { container } = render(
      <RecordListCard recordPreview={previewForTest} />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText(/kuman514/i)).not.toBeNull();
  });

  it('should have a snapshot match showing youtube mark and special tags', () => {
    const { container } = render(
      <RecordListCard
        recordPreview={{
          ...previewForTest,
          youtubeUrl: 'youtube url',
          specialTags: ['yasuo', 'koishi', 'no-miss-all'],
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
