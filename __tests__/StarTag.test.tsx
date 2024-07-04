import React from "react";
import { render } from "@testing-library/react";
import StartTag from "@/modules/resturants/components/StarTag";

describe("StartTag component", () => {
  it("renders StarIcon and count with one decimal place", () => {
    const count = 3.5;

    const { getByText } = render(<StartTag count={count} />);

    const starIconSvg = document.querySelector("svg"); // Adjust selector based on your StarIcon implementation
    expect(starIconSvg).toBeInTheDocument();

    const countText = getByText(count.toFixed(1));
    expect(countText).toBeInTheDocument();
  });
});
