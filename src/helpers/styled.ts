import { IGlobalStyle } from "../interfaces";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
  ${props =>
    props.darkTheme
      ? `
    body {
      background: rgb(56, 29, 123);
      background: linear-gradient(180deg, rgba(56, 29, 123, 1) 0%, rgba(50, 21, 96, 1) 40%, rgba(42, 12, 66, 1) 100%);
      background-repeat: no-repeat;
    }
  `
      : `
    body {
      background: #dde8f2;
    }
  `}
`;
