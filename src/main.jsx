import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Links } from "./pages/Links";

import GlobalStyle from "./styles/global"
import  theme from "./styles/theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Links />
    </ThemeProvider>
  </React.StrictMode>
);
