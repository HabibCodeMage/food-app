import React, { FC } from "react";
import styles from "./styles.module.css";

interface CategoryLabel {
  label: string;
  id: string;
  isSelected: boolean;
  isLast: boolean;
  isFirst: boolean;
  handleCategoryChange: (categoryId: string) => void;
}

const CategoryLabel: FC<CategoryLabel> = ({
  label,
  id,
  isSelected,
  isLast,
  isFirst,
  handleCategoryChange,
}) => {
  return (
    <div
      className={`${styles.root} ${isSelected && styles.bgYellow} ${
        isFirst && styles.leftBorder
      } ${isLast && styles.rightBorder} ${!isSelected && styles.labelHover}`}
      onClick={() => handleCategoryChange(id)}
    >
      <p>{label}</p>
    </div>
  );
};

export default CategoryLabel;
