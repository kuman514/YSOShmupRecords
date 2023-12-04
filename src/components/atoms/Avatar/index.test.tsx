import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import 'jest-styled-components';

import { Avatar } from '.';

describe('TitleWithAvatar', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for its appearance', () => {
    const { container } = render(
      <Avatar pxSize={150} imageUrl="Temp Image Url" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
