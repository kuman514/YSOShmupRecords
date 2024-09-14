import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Tabbar } from '.';

describe('Tabbar', () => {
  beforeEach(() => {
    cleanup();
  });

  it('should show tabs just as provided', async () => {
    render(
      <Tabbar
        tabNames={['Koishi Komeiji', 'Hoshino Takanashi', 'Yasuo']}
        currentTabIndex={0}
        onClick={() => {}}
      />
    );

    expect(await screen.findByText(/Koishi Komeiji/i)).not.toBeNull();
    expect(await screen.findByText(/Hoshino Takanashi/i)).not.toBeNull();
    expect(await screen.findByText(/Yasuo/i)).not.toBeNull();
  });

  it('should have tabs that are all clickable', async () => {
    const mockFn = vi.fn();

    render(
      <Tabbar
        tabNames={['Koishi Komeiji', 'Hoshino Takanashi', 'Yasuo']}
        currentTabIndex={0}
        onClick={mockFn}
      />
    );

    fireEvent.click(await screen.findByText(/Koishi Komeiji/i));
    expect(mockFn).toHaveBeenCalledTimes(1);
    fireEvent.click(await screen.findByText(/Hoshino Takanashi/i));
    expect(mockFn).toHaveBeenCalledTimes(2);
    fireEvent.click(await screen.findByText(/Yasuo/i));
    expect(mockFn).toHaveBeenCalledTimes(3);
  });

  it('should highlight tab button corresponding to current tab index', async () => {
    const { container } = render(
      <Tabbar
        tabNames={['Koishi Komeiji', 'Hoshino Takanashi', 'Yasuo']}
        currentTabIndex={1}
        onClick={() => {}}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call on-click function with its index as a parameter', async () => {
    const mockFn = vi.fn();

    render(
      <Tabbar
        tabNames={['Koishi Komeiji', 'Hoshino Takanashi', 'Yasuo']}
        currentTabIndex={0}
        onClick={mockFn}
      />
    );

    fireEvent.click(await screen.findByText(/Koishi Komeiji/i));
    expect(mockFn).toHaveBeenLastCalledWith(0);
    fireEvent.click(await screen.findByText(/Hoshino Takanashi/i));
    expect(mockFn).toHaveBeenLastCalledWith(1);
    fireEvent.click(await screen.findByText(/Yasuo/i));
    expect(mockFn).toHaveBeenLastCalledWith(2);
  });
});
