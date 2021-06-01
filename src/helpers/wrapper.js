/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../styles/tailwind.css';

const wrapper = (component, padding = true) => (
  <BrowserRouter>
    {padding ? (
      <div style={{ padding: '30px', height: '100%' }}>{component}</div>
    ) : (
      component
    )}
  </BrowserRouter>
);

export default wrapper;
