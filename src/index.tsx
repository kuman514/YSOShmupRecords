import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from '^/Main';
import { IntroPage } from '^/pages/IntroPage';
import { CriteriaPage } from '^/pages/CriteriaPage';
import { RecordPage } from '^/pages/RecordPage';

import '^/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <IntroPage />,
      },
      {
        path: 'intro',
        element: <IntroPage />,
      },
      {
        path: 'criteria',
        element: <CriteriaPage />,
      },
      // For games with single type
      {
        path: 'records/:typeId',
        element: <RecordPage />,
      },
      // For games with various types
      {
        path: 'records/:gameId/:typeId',
        element: <RecordPage />,
      },
    ],
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
