import { cleanup, render } from '@testing-library/react';
import 'jest-styled-components';
import styled from 'styled-components';
import { beforeEach, describe, expect, it } from 'vitest';

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
