"use client";
import { FC } from "react";
import useRestaurants from "../../hooks/useRestaurants";
import RestaurantCard from "../RestaurantCard";
import styles from "./styles.module.css";
import OutlineButton from "@/modules/common/components/OutlineButton";
import { useDispatch } from "react-redux";
import { nextPageWithDelay } from "../../state/restaurants-actions";
import { AppThunkDispatch } from "@/modules/common/store";
import { ClipLoader } from "react-spinners";
import RestaurantCardSkelton from "../RestaurantCardSkelton";

const RestaurantList: FC = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { restaurants, status, hasMore } = useRestaurants();

  const onShowMoreClick = () => {
    dispatch(nextPageWithDelay({ delayMs: 1000 }));
  };

  return (
    <div>
      <div className={`${styles.root} col-sm-1 col-md-2 col-lg-3 col-xl-4`}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
        {(status === "idle" || status == "loading") && (
          <>
            <RestaurantCardSkelton promotion={"gift"} isNew={true} />
            <RestaurantCardSkelton promotion={null} isNew={false} />
            <RestaurantCardSkelton promotion={"discount"} isNew={true} />
            <RestaurantCardSkelton promotion={null} isNew={false} />
            <RestaurantCardSkelton promotion={"gift"} isNew={false} />
            <RestaurantCardSkelton promotion={"discount"} isNew={true} />
            <RestaurantCardSkelton promotion={"1+1"} isNew={false} />
            <RestaurantCardSkelton promotion={null} isNew={true} />
          </>
        )}
        {status !== "idle" &&
          status !== "loading" &&
          restaurants.length === 0 && (
            <p className={styles.textCenter}>No results found 🕵</p>
          )}
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
