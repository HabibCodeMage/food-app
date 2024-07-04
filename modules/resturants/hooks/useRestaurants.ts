"use client";
import { AppThunkDispatch, RootState } from "@/modules/common/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../state/restaurants-actions";

const useRestaurants = () => {
  const dispatch = useDispatch<AppThunkDispatch>();
  const { restaurants, status, error, hasMore } = useSelector(
    (state: RootState) => state.restaurants
  );

  useEffect(() => {
    if (status === "idle" || status === "failed") dispatch(getRestaurants());
  }, []);

  return { restaurants, status, error, hasMore };
};
export default useRestaurants;
