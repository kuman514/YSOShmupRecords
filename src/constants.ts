import { NavNodeInfo } from '^/types';

/**
 * Temporary nav node info
 */
export const navNodeInfo: Record<string, NavNodeInfo> = {
  test: {
    id: 'test',
    label: 'kuman514',
    childNavNodeIds: ['test-sub1', 'test-sub2', 'test-sub3'],
  },
  'test-sub1': {
    id: 'test-sub1',
    label: 'subitem1',
    childNavNodeIds: [],
  },
  'test-sub2': {
    id: 'test-sub2',
    label: 'subitem2',
    childNavNodeIds: ['test-sub4'],
  },
  'test-sub3': {
    id: 'test-sub3',
    label: 'subitem3',
    childNavNodeIds: [],
  },
  'test-sub4': {
    id: 'test-sub4',
    label: 'subitem4',
    childNavNodeIds: [],
  },
};
