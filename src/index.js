import React from 'react';
import ReactDOM from 'react-dom/client';
import { WindowProvider } from "./contexts/window.context";
import { App } from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </React.StrictMode>
);
