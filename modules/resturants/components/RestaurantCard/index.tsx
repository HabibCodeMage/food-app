import Card from "@/modules/common/components/Card";
import Restaurant from "@/modules/common/interfaces/restaurants.interface";
import React, { FC } from "react";
import styles from "./styles.module.css";
import StartTag from "../StarTag";
import TimeTag from "../TimeTag";
import NewTag from "../NewTag";
import PromotionTag from "../PromotionTag";

const randomImgUrl = "https://picsum.photos/500";

const RestaurantCard: FC<{ restaurant: Restaurant }> = ({ restaurant }) => {
  return (
    <Card rootSx={styles.root}>
      {/* using picsum img as unsplash links are giving 404  */}
      <div className={styles.imgBox}>
        <img
          src={randomImgUrl || restaurant.imageUrl}
          alt={`restaurant ${restaurant.name}`}
          className={styles.imgContainer}
        />
      </div>
      <PromotionTag promotion={restaurant.promotion} />
      <div className={styles.contentBox}>
        <h3 className={styles.className}>{restaurant.name}</h3>
        <div className={styles.tagsBox}>
          <StartTag count={restaurant.rating} />
          <TimeTag
            minCookTime={restaurant.minCookTime}
            maxCookTime={restaurant.maxCookTime}
          />
          {restaurant.isNew && <NewTag />}
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
