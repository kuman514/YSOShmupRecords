import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import '^/global.css';
import { router } from '^/route';

(() => {
  const root = document.querySelector('#root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
  }
})();
