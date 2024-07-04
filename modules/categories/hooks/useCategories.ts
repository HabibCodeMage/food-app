"use client";
import { getCategories } from "@/modules/categories/state/categories-actions";
import { AppThunkDispatch, RootState } from "@/modules/common/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategoryId } from "../state/categories-slice";
import { filterByLabelWithDelay } from "@/modules/resturants/state/restaurants-actions";

const useCategories = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { categories, status, error, selectedCategoryId } = useSelector(
    (state: RootState) => state.categories
  );

  const handleCategoryChange = (categoryId: string) => {
    dispatch(setSelectedCategoryId(categoryId));
    dispatch(filterByLabelWithDelay({ id: categoryId, delayMs: 1000 }));
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
