import React from "react";
import { render } from "@testing-library/react";
import Card from "@/modules/common/components/Card";

describe("Card component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Card>
        <p>Child text</p>
      </Card>
    );

    expect(getByText("Child text")).toBeInTheDocument();
  });

  it("applies rootSx prop as additional class", () => {
    const { container } = render(
      <Card rootSx="custom-root-class">
        <p>Child text</p>
      </Card>
    );

    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass("custom-root-class");
  });

  it("applies styles.card class", () => {
    const { container } = render(
      <Card>
        <p>Child text</p>
      </Card>
    );

    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass("card");
  });

  it("renders multiple children correctly", () => {
    const { getByText } = render(
      <Card>
        <p>Child 1</p>
        <p>Child 2</p>
      </Card>
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });
});
