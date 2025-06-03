import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router'; // Asegúrate de importar Router, no App
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);