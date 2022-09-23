import React from 'react';
import { createRoot } from 'react-dom/client';

import './scss/index.scss';
import Providers from './Providers';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
