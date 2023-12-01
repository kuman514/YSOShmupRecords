import React from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from '.';
import { ButtonType } from '^/types';

describe('Sample test', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should have a snapshot match for solid button', () => {
    const { container } = render(
      <Button type={ButtonType.SOLID} isDisabled={false} onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for line button', () => {
    const { container } = render(
      <Button type={ButtonType.LINE} isDisabled={false} onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for round solid button', () => {
    const { container } = render(
      <Button
        type={ButtonType.ROUND_SOLID}
        isDisabled={false}
        onClick={() => {}}
      >
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for round line button', () => {
    const { container } = render(
      <Button
        type={ButtonType.ROUND_LINE}
        isDisabled={false}
        onClick={() => {}}
      >
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for clear button', () => {
    const { container } = render(
      <Button type={ButtonType.CLEAR} isDisabled={false} onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for disabled solid button', () => {
    const { container } = render(
      <Button type={ButtonType.SOLID} isDisabled onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for disabled line button', () => {
    const { container } = render(
      <Button type={ButtonType.LINE} isDisabled onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for disabled round solid button', () => {
    const { container } = render(
      <Button type={ButtonType.ROUND_SOLID} isDisabled onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for disabled round line button', () => {
    const { container } = render(
      <Button type={ButtonType.ROUND_LINE} isDisabled onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a snapshot match for disabled clear button', () => {
    const { container } = render(
      <Button type={ButtonType.CLEAR} isDisabled onClick={() => {}}>
        kuman514
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be clickable', () => {
    const mockFn = vi.fn();
    render(
      <Button type={ButtonType.CLEAR} isDisabled={false} onClick={mockFn}>
        kuman514
      </Button>
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should not be clickable on disabled', () => {
    const mockFn = vi.fn();
    render(
      <Button type={ButtonType.CLEAR} isDisabled onClick={mockFn}>
        kuman514
      </Button>
    );

    fireEvent.click(screen.getByText(/kuman514/i));
    expect(mockFn).toBeCalledTimes(0);
  });
});
