"use client";
import { getCategories } from "@/modules/categories/state/categories-actions";
import { AppDispatch, RootState } from "@/modules/common/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useCategories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, status, error } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    if (status === "idle" || status === "failed") dispatch(getCategories());
  }, []);

  return { categories, status, error };
};
export default useCategories;
