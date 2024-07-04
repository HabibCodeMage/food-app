import React from "react";
import { render } from "@testing-library/react";
import { GiftBoxIcon } from "@/modules/common/icons";

describe("GiftBoxIcon component", () => {
  it("renders the SVG icon with default props", () => {
    const { container } = render(<GiftBoxIcon />);

    const svgElement = container.querySelector("svg");

    expect(svgElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute("width", "64px");
    expect(svgElement).toHaveAttribute("height", "64px");
    expect(svgElement).toHaveAttribute("fill", "#fff");
  });

  it("renders the SVG icon with custom props", () => {
    const { container } = render(
      <GiftBoxIcon width="32px" height="32px" fill="#ff0000" />
    );

    const svgElement = container.querySelector("svg");

    expect(svgElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute("width", "32px");
    expect(svgElement).toHaveAttribute("height", "32px");
    expect(svgElement).toHaveAttribute("fill", "#ff0000");
  });
});
