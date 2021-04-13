import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/styles/globalStyle";
import theme from "../assets/styles/theme";
import "../assets/icons/index";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
