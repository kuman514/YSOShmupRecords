import { createBrowserRouter } from 'react-router-dom';

import Main from '^/Main';
import { CriteriaPage } from '^/pages/CriteriaPage';
import { ErrorPage } from '^/pages/ErrorPage';
import { IntroPage } from '^/pages/IntroPage';
import { LandingPage } from '^/pages/LandingPage';
import { RecordListPage } from '^/pages/RecordListPage';
import { RecordPage } from '^/pages/RecordPage';
import { TerminologyPage } from '^/pages/TerminologyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'intro',
        element: <IntroPage />,
      },
      {
        path: 'criteria',
        element: <CriteriaPage />,
      },
      {
        path: 'terminology',
        element: <TerminologyPage />,
      },
      {
        path: 'records',
        children: [
          {
            path: '',
            element: <RecordListPage />,
          },
          {
            path: ':typeId',
            children: [
              {
                path: '',
                element: <RecordListPage />,
              },
              {
                path: ':recordDateId',
                element: <RecordPage />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
