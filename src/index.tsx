import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const CARDS_COUNTER:number = 6;

root.render(
  <React.StrictMode>
    <App counter={CARDS_COUNTER} />
  </React.StrictMode>
);
