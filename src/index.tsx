import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from '^/Main';
import { GatePage } from '^/pages/GatePage';
import { IntroPage } from '^/pages/IntroPage';
import { CriteriaPage } from '^/pages/CriteriaPage';
import { RecordPage } from '^/pages/RecordPage';
import { ErrorPage } from '^/pages/ErrorPage';

import '^/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <GatePage />,
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
        path: 'records/:typeId',
        element: <RecordPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

(() => {
  const root = document.querySelector('#root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
})();
