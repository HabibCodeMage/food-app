"use client";
import { FC } from "react";
import useRestaurants from "../../hooks/useRestaurants";

const RestaurantList: FC = () => {
  const { restaurants, status } = useRestaurants();
  return <div>RestaurantList</div>;
};

export default RestaurantList;
