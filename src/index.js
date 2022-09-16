import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './scss/index.scss';
import ApplicationRoutes from './Routes';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApplicationRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
