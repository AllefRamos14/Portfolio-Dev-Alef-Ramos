import React from 'react';
import ReactDom from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import Router from './routes.jsx';
import GlobalStyles from './globalStyles.js';





ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={Router} />
  </React.StrictMode>,
);
