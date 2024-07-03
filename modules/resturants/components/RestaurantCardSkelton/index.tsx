import Card from "@/modules/common/components/Card";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import PromotionTag from "../PromotionTag";
import Skeleton from "@/modules/common/components/Skelton";

interface RestaurantCardSkeletonProps {
  promotion: "gift" | "1+1" | "discount" | null;
  isNew: boolean;
}
const RestaurantCardSkeleton: FC<RestaurantCardSkeletonProps> = ({
  isNew,
  promotion,
}) => {
  return (
    <Card rootSx={styles.root}>
      <div className={styles.imgBox}>
        <Skeleton width="100%" height="100%" />
      </div>
      {promotion && <PromotionTag promotion={promotion} />}
      <div className={styles.contentBox}>
        <Skeleton
          sx={styles.className}
          type="text"
          width="80px"
          height="30px"
        />
        <div className={styles.tagsBox}>
          <Skeleton
            sx={styles.className}
            type="text"
            width="80px"
            height="30px"
          />
          <Skeleton
            sx={styles.className}
            type="text"
            width="80px"
            height="30px"
          />
          {isNew && (
            <Skeleton
              sx={styles.className}
              type="text"
              width="80px"
              height="30px"
            />
          )}
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCardSkeleton;
