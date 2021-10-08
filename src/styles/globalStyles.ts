import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
  ${reset}
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.basic};
    font-weight: 600;
  }
  a {
    text-decoration: none;
    outline: none;
  }
  a:hover,
  a:active,
  a:visited {
    color: initial;
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
