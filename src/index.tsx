import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from './Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '',
        element: <>test outlet</>,
      },
      {
        path: 'kuman514',
        element: <>kuman514</>,
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
