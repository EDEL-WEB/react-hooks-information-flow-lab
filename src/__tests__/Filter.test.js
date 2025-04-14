import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element", () => {
  const dummyFn = jest.fn();
  render(<Filter onCategoryChange={dummyFn} />); // added prop here
  expect(screen.getByRole("combobox")).toBeInTheDocument();
});

test("calls the onCategoryChange callback prop when the <select> is changed", () => {
  const onCategoryChange = jest.fn();
  render(<Filter onCategoryChange={onCategoryChange} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "category2" }, // use a value from your actual <option> list
  });

  expect(onCategoryChange).toHaveBeenCalled();
  expect(onCategoryChange).toHaveBeenCalledWith("category2");
});
