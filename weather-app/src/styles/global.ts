import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, span, p, strong {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    color: white;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  span, p, strong {
    font-weight: 400;
  }

  button, input {
    border: 0;
  }

  button {
    cursor: pointer;
  }

  li, a {
    text-decoration: none;
    list-style: none;
  }

  .container {
    display: flex;
    height: 100vh;
    .time {
      background-color: #1E213A;
      display: inline-block;
      min-width: 459px;
      text-align: center;
    }

    .time-info {
      background-color: #100E1D;
      display: inline-block;
      min-width: 981px;
    }
  }

`;