import React from "react";
import { render } from "@testing-library/react";
import PromotionTag from "@/modules/resturants/components/PromotionTag";

describe("PromotionTag component", () => {
  it('renders "1+1" text for promotion="1+1"', () => {
    const { getByText } = render(<PromotionTag promotion="1+1" />);
    const textElement = getByText("1+1");

    expect(textElement).toBeInTheDocument();
  });

  it('renders "%" symbol for promotion="discount"', () => {
    const { getByText } = render(<PromotionTag promotion="discount" />);
    const percentElement = getByText("%");

    expect(percentElement).toBeInTheDocument();
  });

  it("does not render anything for null promotion", () => {
    const { container } = render(<PromotionTag promotion={null} />);

    expect(container.firstChild).toBeNull();
  });
});
