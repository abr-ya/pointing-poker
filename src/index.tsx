import * as React from "react";
import "regenerator-runtime/runtime";
import ReduxProvider from "./redux/ReduxProvider";
import { render } from "react-dom";
import App from "./App";

const rootEl = document.getElementById("root");

render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
  rootEl,
);
