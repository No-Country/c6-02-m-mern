import React from 'react';
import ReactDOM from 'react-dom/client';
import { Digitize } from './Digitize';
import './normalize/normalize.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Digitize />
  </React.StrictMode>
);
