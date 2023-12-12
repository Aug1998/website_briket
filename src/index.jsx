import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'
import App from './App';
import { Global, css } from '@emotion/react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = css`
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@100;300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: 'Roboto';
  }
`

root.render(
  <React.StrictMode>
    <HashRouter>
      <Global styles={GlobalStyle}/>
      <App />
    </HashRouter>
  </React.StrictMode>
);
