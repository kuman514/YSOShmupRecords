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
    linkTo: '/intro',
  },
  {
    id: 'criteria',
    linkTo: '/criteria',
  },
  {
    id: 'records',
    childNavNodes: [
      {
        id: 'dodonpachi',
        childNavNodes: [
          {
            id: 'dodonpachi-ashot',
            linkTo: '/records/dodonpachi-ashot',
          },
          {
            id: 'dodonpachi-blaser',
            linkTo: '/records/dodonpachi-blaser',
          },
          {
            id: 'dodonpachi-cshot',
            linkTo: '/records/dodonpachi-cshot',
          },
        ],
      },
    ],
  },
];
