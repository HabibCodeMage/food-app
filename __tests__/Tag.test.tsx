import React from "react";
import { render } from "@testing-library/react";
import Tag from "@/modules/common/components/tag";

describe("Tag component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Tag>
        <p>Some text</p>
      </Tag>
    );

    expect(getByText("Some text")).toBeInTheDocument();
  });
});
