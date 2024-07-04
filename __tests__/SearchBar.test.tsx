import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "@/modules/common/components/SearchBar";

describe("SearchBar component", () => {
  it("renders with default placeholder and handles onChange", () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar onChange={handleChange} />
    );

    const inputElement = getByPlaceholderText("Search");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "test" }),
      })
    );
  });

  it("renders with custom placeholder", () => {
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="custom search" onChange={() => {}} />
    );

    const inputElement = getByPlaceholderText("Custom search");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders with initial value", () => {
    const { getByDisplayValue } = render(
      <SearchBar value="initial value" onChange={() => {}} />
    );

    const inputElement = getByDisplayValue("initial value");
    expect(inputElement).toBeInTheDocument();
  });
});
