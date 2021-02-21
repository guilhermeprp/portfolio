import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/styles/globalStyles";
import theme from "../assets/styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
