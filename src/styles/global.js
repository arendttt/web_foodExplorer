import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 14px;
    }

  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: "Poppins", sans-serif;
    font-weight: normal;

    -webkit-font-smoothing: antialiased;
  }

  fieldset {
    border: none;
  }

  input, textarea, h1 {
    font-size: 1rem;
    outline: none;

    font-family: "Roboto", sans-serif;
  }

  button, h2 {
    font-family: "Poppins", sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

`;