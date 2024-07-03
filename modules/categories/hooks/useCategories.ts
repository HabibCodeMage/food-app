"use client";
import { getCategories } from "@/modules/categories/state/categories-actions";
import { AppDispatch, RootState } from "@/modules/common/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategoryId } from "../state/categories-slice";
import { filterByLabelWithDelay } from "@/modules/resturants/state/restaurants-actions";

const useCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, status, error, selectedCategoryId } = useSelector(
    (state: RootState) => state.categories
  );

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setSelectedCategoryId(categoryId));
    dispatch(filterByLabelWithDelay({ id: categoryId, delayMs: 100 }));
  };

  useEffect(() => {
    if (status === "idle" || status === "failed") dispatch(getCategories());
  }, []);

  return {
    categories,
    status,
    error,
    selectedCategoryId,
    handleCategoryChange,
  };
};
export default useCategories;
