import { GiftBoxIcon } from "@/modules/common/icons";
import React, { FC } from "react";
import styles from "./styles.module.css";

interface PromotionTagInterface {
  promotion: "gift" | "1+1" | "discount" | null;
}

const PromotionTag: FC<PromotionTagInterface> = ({ promotion }) => {
  if (!promotion) return <></>;

  const promotionClass = `${styles.root} ${
    promotion !== "1+1" ? styles[promotion] : styles.onePlusOne
  }`;

  return (
    <div className={promotionClass}>
      {
        {
          gift: <GiftBoxIcon width={"20px"} height={"20px"} />,
          "1+1": <p>1+1</p>,
          discount: <p>%</p>,
        }[promotion]
      }
    </div>
  );
};

export default PromotionTag;
