"use client";
import { FC } from "react";
import useRestaurants from "../../hooks/useRestaurants";
import RestaurantCard from "../RestaurantCard";
import styles from "./styles.module.css";
import OutlineButton from "@/modules/common/components/OutlineButton";
import { useDispatch } from "react-redux";
import { nextPageWithDelay } from "../../state/restaurants-actions";
import { AppDispatch } from "@/modules/common/store";
import { ClipLoader } from "react-spinners";

const RestaurantList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { restaurants, status, hasMore } = useRestaurants();

  const onShowMoreClick = () => {
    dispatch(nextPageWithDelay({ delayMs: 1000 }));
  };

  return (
    <div>
      <div className={styles.root}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      <button onClick={(e) => {}}></button>
      <div className={styles.showMoreBtnBox}>
        {hasMore && (
          <OutlineButton
            onClick={onShowMoreClick}
            disabled={status === "loading"}
            sx={styles.showBox}
          >
            {status === "loading" && <ClipLoader color="#ffc700" size={10} />}
            <p>+Show More</p>
          </OutlineButton>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
