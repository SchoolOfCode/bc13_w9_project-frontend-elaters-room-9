/* import { test, expect } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import QuizApp from "./QuizApp";

test("it Renders", () => {
  render(<QuizApp buttonText={"Add Event"} />);

  const eventButton = screen.getByText("Add Event");
  expect(eventButton).toBeInTheDocument();
  expect(eventButton).toHaveTextContent("Add Event");

  const detailInput = screen.getByPlaceholderText("Enter details here");
  expect(detailInput).toBeInTheDocument();

  const startInput = screen.getByPlaceholderText("Enter Start Date");
  expect(startInput).toBeInTheDocument();

  const endInput = screen.getByPlaceholderText("Enter End Date");
  expect(endInput).toBeInTheDocument();

  screen.debug();
}); */
