import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from '^/Main';
import { IntroPage } from '^/pages/IntroPage';
import { CriteriaPage } from '^/pages/CriteriaPage';

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
        path: 'criteria',
        element: <CriteriaPage />,
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
