import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Chevron } from '.';

describe('Chevron', () => {
  it('should show click-to-close chevron on open', () => {
    const { container } = render(
      <Chevron isOpen fillColor="var(--main-color)" />
    );
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-close chevron');
  });

  it('should show click-to-open chevron on close', () => {
    const { container } = render(
      <Chevron isOpen={false} fillColor="var(--main-color)" />
    );
    const vectorG = container.querySelector('svg > g');
    if (!vectorG) {
      throw Error('The container returned nullish');
    }
    expect(vectorG.id).toStrictEqual('Click-to-open chevron');
  });
});
