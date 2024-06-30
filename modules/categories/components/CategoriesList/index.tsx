"use client";
import { FC } from "react";
import useCategories from "../../hooks/useCategories";

const CategoriesList: FC = () => {
  const { categories, status } = useCategories();
  return <div>CategoriesList</div>;
};

export default CategoriesList;
