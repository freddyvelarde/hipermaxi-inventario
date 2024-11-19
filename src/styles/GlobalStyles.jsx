import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
list-style:none;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme.textHeading};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: bold;
  }

  a {
color: inherit;
    text-decoration: none;
  }
`;
export default GlobalStyle;
