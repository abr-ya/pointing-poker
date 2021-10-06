import { render } from "@testing-library/react";
import ReduxProvider from "../src/redux/ReduxProvider";

const renderWithRedux = (ui, options) =>
  render(ui, { wrapper: ReduxProvider, ...options });

export { renderWithRedux };
