import React from "react";
import { render } from "@testing-library/react";
import OutlineButton from "@/modules/common/components/OutlineButton";

describe("OutlineButton component", () => {
  it("renders children correctly with specified border radius", () => {
    const { getByText } = render(
      <OutlineButton borderRadius="18px">
        <p>Child text</p>
      </OutlineButton>
    );

    expect(getByText("Child text")).toBeInTheDocument();

    const button = getByText("Child text").parentElement; // Get the parent element of <p>, which should be the <button>
    expect(button).toHaveStyle("border-radius: 18px");
  });
});
