import { cleanup, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { ArticleExtra } from '.';

const comment = '야스오 2-4 진출';
const youtubeUrl = 'Youtube URL';

describe('ArticleExtra', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show commentary', () => {
    render(<ArticleExtra comment={comment} />);

    const commentary = screen.getByText(comment);
    expect(commentary).not.toBeNull();
  });

  it('should show youtube when the record contains youtube link', () => {
    render(<ArticleExtra comment={comment} youtubeUrl={youtubeUrl} />);

    const youtube = screen.getByText(/유튜브 영상/i);
    expect(youtube).not.toBeNull();
  });
});
