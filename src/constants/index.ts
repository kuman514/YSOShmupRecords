import { NavNodeInfo } from '^/types';

export const navNodeInfoForTest: NavNodeInfo = {
  id: 'test',
  childNavNodes: [
    {
      id: 'test-sub1',
    },
    {
      id: 'test-sub2',
      childNavNodes: [
        {
          id: 'test-sub4',
        },
      ],
    },
    {
      id: 'test-sub3',
    },
  ],
};

export const rootNavNodes: NavNodeInfo[] = [
  {
    id: 'intro',
  },
  {
    id: 'criteria',
  },
  {
    id: 'records',
    childNavNodes: [
      {
        id: 'dodonpachi',
        childNavNodes: [
          {
            id: 'dodonpachi-ashot',
          },
          {
            id: 'dodonpachi-blaser',
          },
          {
            id: 'dodonpachi-cshot',
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
