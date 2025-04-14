import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header"; // correct path to the component

test("calls the onToggleDarkMode callback prop when the button is clicked", () => {
  const onToggleDarkMode = jest.fn();
  render(<Header onToggleDarkMode={onToggleDarkMode} />);
  const button = screen.getByRole("button", { name: /togg/i });
  fireEvent.click(button);
  expect(onToggleDarkMode).toHaveBeenCalled();
});
