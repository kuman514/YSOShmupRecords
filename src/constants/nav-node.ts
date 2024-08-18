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
    ],
  },
  {
    id: 'records',
    linkTo: '/records',
    childNavNodes: [
      {
        id: 'dodonpachi',
        childNavNodes: [
          {
            id: 'dodonpachi-ashot',
            linkTo: '/records/dodonpachi-ashot',
          },
          {
            id: 'dodonpachi-alaser',
            linkTo: '/records/dodonpachi-alaser',
          },
          {
            id: 'dodonpachi-bshot',
            linkTo: '/records/dodonpachi-bshot',
          },
          {
            id: 'dodonpachi-blaser',
            linkTo: '/records/dodonpachi-blaser',
          },
          {
            id: 'dodonpachi-cshot',
            linkTo: '/records/dodonpachi-cshot',
          },
          {
            id: 'dodonpachi-claser',
            linkTo: '/records/dodonpachi-claser',
          },
        ],
      },
      {
        id: 'galagaarrangement',
        linkTo: '/records/galagaarrangement',
      },
      {
        id: 'dariusgaiden',
        childNavNodes: [
          {
            id: 'dariusgaiden-zprime',
            linkTo: '/records/dariusgaiden-zprime',
          },
          {
            id: 'dariusgaiden-v',
            linkTo: '/records/dariusgaiden-v',
          },
          {
            id: 'dariusgaiden-w',
            linkTo: '/records/dariusgaiden-w',
          },
          {
            id: 'dariusgaiden-x',
            linkTo: '/records/dariusgaiden-x',
          },
          {
            id: 'dariusgaiden-y',
            linkTo: '/records/dariusgaiden-y',
          },
          {
            id: 'dariusgaiden-z',
            linkTo: '/records/dariusgaiden-z',
          },
          {
            id: 'dariusgaiden-vprime',
            linkTo: '/records/dariusgaiden-vprime',
          },
        ],
      },
      {
        id: 'ketsui',
        childNavNodes: [
          {
            id: 'ketsui-a',
            linkTo: '/records/ketsui-a',
          },
          {
            id: 'ketsui-b',
            linkTo: '/records/ketsui-b',
          },
        ],
      },
    ],
  },
];
