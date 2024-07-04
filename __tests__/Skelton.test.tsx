import React from "react";
import { render } from "@testing-library/react";
import Skeleton from "@/modules/common/components/Skelton";

describe("Skeleton component", () => {
  it('renders with default "text" type', () => {
    const { container } = render(<Skeleton />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement).toHaveClass("skeleton");
    expect(skeletonElement).toHaveClass("text");
  });

  it('renders with "avatar" type', () => {
    const { container } = render(<Skeleton type="avatar" />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement).toHaveClass("skeleton");
    expect(skeletonElement).toHaveClass("avatar");
  });

  it("renders with custom width, height, and borderRadius", () => {
    const { container } = render(
      <Skeleton width="100px" height="50px" borderRadius="10px" />
    );
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement.style.width).toBe("100px");
    expect(skeletonElement.style.height).toBe("50px");
    expect(skeletonElement.style.borderRadius).toBe("10px");
  });

  it("renders with additional class name", () => {
    const { container } = render(<Skeleton sx="custom-class" />);
    const skeletonElement = container.firstChild as HTMLElement;

    expect(skeletonElement).toHaveClass("custom-class");
  });
});
