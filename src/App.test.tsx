import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "../tests/testing-library-utils";
import App from "./App";

describe("App Component ...", () => {
  beforeEach(() => {
    renderWithRedux(<App />, {});
  });

  test("renders Title App and it has correct class", () => {
    const Header = screen.getByText("React App");
    expect(Header).toBeEnabled();
    expect(Header).toHaveClass("navbar-brand");
  });
});
