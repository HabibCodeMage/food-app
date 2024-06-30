"use client";
import { FC } from "react";
import useCategories from "../../hooks/useCategories";
import CategoryLabel from "../CategoryLabel";
import styles from "./styles.module.css";
import Skeleton from "@/modules/common/components/Skelton";

const CategoriesList: FC = () => {
  const { categories, status, selectedCategoryId, handleCategoryChange } =
    useCategories();

  if (status === "idle" || status === "loading")
    return (
      <div className={styles.skeltonRoot}>
        <Skeleton width="60px" height="42px" sx={styles.leftBorder} />
        <Skeleton width="60px" height="42px" />
        <Skeleton width="60px" height="42px" />
        <Skeleton width="60px" height="42px" />
        <Skeleton width="60px" height="42px" />
        <Skeleton width="60px" height="42px" sx={styles.rightBorder} />
      </div>
    );

  return (
    <section>
      <div className={styles.root}>
        {categories.map(({ name, id }, index) => (
          <CategoryLabel
            key={id}
            label={name}
            id={id}
            isSelected={id === selectedCategoryId}
            isLast={index + 1 === categories.length}
            isFirst={index == 0}
            handleCategoryChange={handleCategoryChange}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
