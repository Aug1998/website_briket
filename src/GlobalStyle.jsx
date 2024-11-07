import { css } from '@emotion/react';

const GlobalStyle = css`
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@100;300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
  body, .root, html{
    width: 100vw;
    overflow-x: hidden;
  }
  img {
    -webkit-user-drag: none;
  }
`

export default GlobalStyle;