import { NavNodeInfo } from '^/types';

export const navNodeInfoForTest: NavNodeInfo = {
  id: 'test',
  label: 'kuman514',
  childNavNodes: [
    {
      id: 'test-sub1',
      label: 'subitem1',
      childNavNodes: [],
    },
    {
      id: 'test-sub2',
      label: 'subitem2',
      childNavNodes: [
        {
          id: 'test-sub4',
          label: 'subitem4',
          childNavNodes: [],
        },
      ],
    },
    {
      id: 'test-sub3',
      label: 'subitem3',
      childNavNodes: [],
    },
  ],
};

export const rootNavNodes: NavNodeInfo[] = [
  {
    id: 'intro',
    label: '개요',
    childNavNodes: [],
  },
  {
    id: 'criteria',
    label: '등록 기준',
    childNavNodes: [],
  },
  {
    id: 'records',
    label: '기록',
    childNavNodes: [
      {
        id: 'dodonpachi',
        label: '도돈파치 (1997)',
        childNavNodes: [
          {
            id: 'dodonpachi-ashot',
            label: 'A-Shot',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-alaser',
            label: 'A-Laser',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-bshot',
            label: 'B-Shot',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-blaser',
            label: 'B-Laser',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-cshot',
            label: 'C-Shot',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-claser',
            label: 'C-Laser',
            childNavNodes: [],
          },
        ],
      },
      {
        id: 'galagaarrangement',
        label: '갤러그 어레인지먼트',
        childNavNodes: [],
      },
      {
        id: 'dariusgaiden',
        label: '다라이어스 외전',
        childNavNodes: [
          {
            id: 'dariusgaiden-zprime',
            // prettier-ignore
            label: 'Z\'존',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-v',
            label: 'V존',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-w',
            label: 'W존',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-x',
            label: 'X존',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-y',
            label: 'Y존',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-z',
            label: 'Z존',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-vprime',
            // prettier-ignore
            label: 'V\'존',
            childNavNodes: [],
          },
        ],
      },
    ],
  },
];

export const monthTitle = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];
