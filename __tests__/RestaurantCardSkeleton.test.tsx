import React from "react";
import { render } from "@testing-library/react";
import RestaurantCardSkeleton from "@/modules/resturants/components/RestaurantCardSkelton";

describe("RestaurantCardSkeleton component", () => {
  it("renders PromotionTag component when promotion prop is present", () => {
    const { getByText } = render(
      <RestaurantCardSkeleton isNew={true} promotion={"1+1"} />
    );

    const promotionTag = getByText("1+1");
    expect(promotionTag).toBeInTheDocument();
  });

  it("does not render PromotionTag component when promotion prop is null", () => {
    const props = {
      isNew: false,
      promotion: null,
    };

    const { queryByText } = render(<RestaurantCardSkeleton {...props} />);

    const promotionTag = queryByText(/gift/i);
    expect(promotionTag).toBeNull();
  });
});
