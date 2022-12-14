import { fireEvent, test, expect } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import CalendarApp from "./index";

test("it Renders", () => {
  render(<CalendarApp buttonText={"Add Event"} />);

  const eventButton = screen.getByText("Add Event");
  expect(eventButton).toBeInTheDocument();
  expect(eventButton).toHaveTextContent("Add Event");

  fireEvent.click(eventButton);

  const detailInput = screen.getByPlaceholderText("Enter details here");
  expect(detailInput).toBeInTheDocument();

  const startInput = screen.getByPlaceholderText("Enter Start Date");
  expect(startInput).toBeInTheDocument();

  const endInput = screen.getByPlaceholderText("Enter End Date");
  expect(endInput).toBeInTheDocument();

  screen.debug();
});
