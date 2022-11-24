import { test, expect } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import AddItem from "./index.js";

test("it Renders", () => {
  render(<AddItem buttonText={"Add To List"} />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Add To List");
  screen.debug();
});
