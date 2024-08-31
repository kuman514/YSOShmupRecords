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
          linkTo: '/kuman514',
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
    id: 'introduction',
    childNavNodes: [
      {
        id: 'intro',
        linkTo: '/intro',
      },
      {
        id: 'criteria',
        linkTo: '/criteria',
      },
      {
        id: 'terminology',
        linkTo: '/terminology',
      },
      {
        id: 'way-to-akatronics',
        linkTo: '/way-to-akatronics',
      },
    ],
  },
  {
    id: 'records',
    linkTo: '/records',
    childNavNodes: [
      {
        id: 'dodonpachi-cshot',
        linkTo: '/records/dodonpachi-cshot',
      },
      {
        id: 'galagaarrangement',
        linkTo: '/records/galagaarrangement',
      },
      {
        id: 'ketsui-b',
        linkTo: '/records/ketsui-b',
      },
      {
        id: 'inthehunt',
        linkTo: '/records/inthehunt',
      },
    ],
  },
];
