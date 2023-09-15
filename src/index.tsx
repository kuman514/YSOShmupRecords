import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Main from './Main';

(() => {
  const root = document.querySelector('#root');
  if (root) {
    ReactDOM.createRoot(root).render(
      <BrowserRouter>
        <React.StrictMode>
          <Main />
        </React.StrictMode>
      </BrowserRouter>
    );
  }
})();
