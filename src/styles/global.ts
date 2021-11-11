import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #D9DBD4;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Baloo Da 2', cursive;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
