import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import ClickableChevron from '.';

describe('ClickableChevron', () => {
  it('should show click-to-close chevron on open', () => {
    const { container } = render(
      <ClickableChevron isOpen fillColor="var(--main-color)" />
    );
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-close chevron');
  });

  it('should show click-to-open chevron on close', () => {
    const { container } = render(
      <ClickableChevron isOpen={false} fillColor="var(--main-color)" />
    );
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-open chevron');
  });
});
