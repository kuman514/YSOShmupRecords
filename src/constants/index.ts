import { NavNodeInfo } from '^/types';

export const navNodeInfoForTest: NavNodeInfo = {
  id: 'test',
  childNavNodes: [
    {
      id: 'test-sub1',
      childNavNodes: [],
    },
    {
      id: 'test-sub2',
      childNavNodes: [
        {
          id: 'test-sub4',
          childNavNodes: [],
        },
      ],
    },
    {
      id: 'test-sub3',
      childNavNodes: [],
    },
  ],
};

export const rootNavNodes: NavNodeInfo[] = [
  {
    id: 'intro',
    childNavNodes: [],
  },
  {
    id: 'criteria',
    childNavNodes: [],
  },
  {
    id: 'records',
    childNavNodes: [
      {
        id: 'dodonpachi',
        childNavNodes: [
          {
            id: 'dodonpachi-ashot',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-alaser',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-bshot',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-blaser',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-cshot',
            childNavNodes: [],
          },
          {
            id: 'dodonpachi-claser',
            childNavNodes: [],
          },
        ],
      },
      {
        id: 'galagaarrangement',
        childNavNodes: [],
      },
      {
        id: 'dariusgaiden',
        childNavNodes: [
          {
            id: 'dariusgaiden-zprime',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-v',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-w',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-x',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-y',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-z',
            childNavNodes: [],
          },
          {
            id: 'dariusgaiden-vprime',
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
