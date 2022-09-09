import React from 'react';
import { createRoot } from 'react-dom/client';

import Application from './Application';
import './scss/index.scss';

createRoot(document.querySelector('.root')).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
