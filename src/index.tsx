import * as React from "react";
import "regenerator-runtime/runtime";
import ReduxProvider from "./redux/ReduxProvider";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./themes/mainTheme";

const rootEl = document.getElementById("root");

render(
  <ThemeProvider theme={theme}>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </ThemeProvider>,
  rootEl,
);
