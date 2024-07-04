import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CategoryLabel from "@/modules/categories/components/CategoryLabel";

describe("CategoryLabel component", () => {
  const mockHandleCategoryChange = jest.fn();

  beforeEach(() => {
    mockHandleCategoryChange.mockClear();
  });

  it("renders label text correctly", () => {
    const { getByText } = render(
      <CategoryLabel
        label="Test Label"
        id="1"
        isSelected={false}
        isFirst={false}
        isLast={false}
        handleCategoryChange={mockHandleCategoryChange}
      />
    );

    const labelElement = getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("calls handleCategoryChange with correct id when clicked", () => {
    const { getByText } = render(
      <CategoryLabel
        label="Test Label"
        id="1"
        isSelected={false}
        isFirst={true}
        isLast={false}
        handleCategoryChange={mockHandleCategoryChange}
      />
    );

    fireEvent.click(getByText("Test Label"));
    expect(mockHandleCategoryChange).toHaveBeenCalledWith("1");
  });

  it("applies correct styles based on props", () => {
    const { container, rerender } = render(
      <CategoryLabel
        label="Test Label"
        id="1"
        isSelected={true}
        isFirst={true}
        isLast={false}
        handleCategoryChange={mockHandleCategoryChange}
      />
    );

    expect(container.firstChild).toHaveClass("root bgYellow leftBorder");

    rerender(
      <CategoryLabel
        label="Test Label"
        id="1"
        isSelected={false}
        isFirst={false}
        isLast={true}
        handleCategoryChange={mockHandleCategoryChange}
      />
    );

    expect(container.firstChild).toHaveClass("root rightBorder labelHover");
  });
});
