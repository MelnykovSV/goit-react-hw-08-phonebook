import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';

import { BrowserRouter } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
