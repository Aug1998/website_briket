import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { Global, css } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = css`
  *{
    box-sizing: border-box;
    margin: 0;
  }
`

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Global styles={GlobalStyle}/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
