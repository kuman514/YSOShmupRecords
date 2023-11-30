import React from 'react';
import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import styled from 'styled-components';
import 'jest-styled-components';

const SampleButton = styled.button`
  background-color: red;
`;

describe('Sample test', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match', () => {
    const { container } = render(<SampleButton />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
