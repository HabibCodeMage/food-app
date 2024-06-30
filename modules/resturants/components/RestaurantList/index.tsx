"use client";
import { FC } from "react";
import useRestaurants from "../../hooks/useRestaurants";
import RestaurantCard from "../RestaurantCard";
import styles from "./styles.module.css";

const RestaurantList: FC = () => {
  const { restaurants, status } = useRestaurants();
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
