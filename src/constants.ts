import { NavNodeInfo } from '^/types';

export const navNodeInfoForTest: Record<string, NavNodeInfo> = {
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

export const navNodeInfo: Record<string, NavNodeInfo> = {
  intro: {
    id: 'intro',
    label: '개요',
    childNavNodeIds: [],
  },
  criteria: {
    id: 'criteria',
    label: '등록 기준',
    childNavNodeIds: [],
  },
  records: {
    id: 'records',
    label: '기록',
    childNavNodeIds: ['dodonpachi', 'galagaarrangement', 'dariusgaiden'],
  },
  dodonpachi: {
    id: 'dodonpachi',
    label: '도돈파치 (1997)',
    childNavNodeIds: [
      'dodonpachi-ashot',
      'dodonpachi-alaser',
      'dodonpachi-bshot',
      'dodonpachi-blaser',
      'dodonpachi-cshot',
      'dodonpachi-claser',
    ],
  },
  galagaarrangement: {
    id: 'galagaarrangement',
    label: '갤러그 어레인지먼트',
    childNavNodeIds: [],
  },
  dariusgaiden: {
    id: 'dariusgaiden',
    label: '다라이어스 외전',
    childNavNodeIds: [
      'dariusgaiden-zprime',
      'dariusgaiden-v',
      'dariusgaiden-w',
      'dariusgaiden-x',
      'dariusgaiden-y',
      'dariusgaiden-z',
      'dariusgaiden-vprime',
    ],
  },
  'dodonpachi-ashot': {
    id: 'dodonpachi-ashot',
    label: 'A-Shot',
    childNavNodeIds: [],
  },
  'dodonpachi-alaser': {
    id: 'dodonpachi-alaser',
    label: 'A-Laser',
    childNavNodeIds: [],
  },
  'dodonpachi-bshot': {
    id: 'dodonpachi-bshot',
    label: 'B-Shot',
    childNavNodeIds: [],
  },
  'dodonpachi-blaser': {
    id: 'dodonpachi-blaser',
    label: 'B-Laser',
    childNavNodeIds: [],
  },
  'dodonpachi-cshot': {
    id: 'dodonpachi-cshot',
    label: 'C-Shot',
    childNavNodeIds: [],
  },
  'dodonpachi-claser': {
    id: 'dodonpachi-claser',
    label: 'C-Laser',
    childNavNodeIds: [],
  },
  'dariusgaiden-zprime': {
    id: 'dariusgaiden-zprime',
    // prettier-ignore
    label: 'Z\'존',
    childNavNodeIds: [],
  },
  'dariusgaiden-v': {
    id: 'dariusgaiden-v',
    label: 'V존',
    childNavNodeIds: [],
  },
  'dariusgaiden-w': {
    id: 'dariusgaiden-w',
    label: 'W존',
    childNavNodeIds: [],
  },
  'dariusgaiden-x': {
    id: 'dariusgaiden-x',
    label: 'X존',
    childNavNodeIds: [],
  },
  'dariusgaiden-y': {
    id: 'dariusgaiden-y',
    label: 'Y존',
    childNavNodeIds: [],
  },
  'dariusgaiden-z': {
    id: 'dariusgaiden-z',
    label: 'Z존',
    childNavNodeIds: [],
  },
  'dariusgaiden-vprime': {
    id: 'dariusgaiden-vprime',
    // prettier-ignore
    label: 'V\'존',
    childNavNodeIds: [],
  },
};
