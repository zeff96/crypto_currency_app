import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/navbar/Header";

describe("Header components", () => {
  test("render correctly on button click", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(getByTestId(/header/i)).toBeInTheDocument();
  });
});
