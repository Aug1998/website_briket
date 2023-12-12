import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import App from './App';
import { Global } from '@emotion/react'
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Global styles={GlobalStyle}/>
      <App />
    </HashRouter>
  </React.StrictMode>
);
