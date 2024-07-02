import api from "@/api";
import Restaurant from "@/modules/common/interfaces/restaurants.interface";
import { RootState } from "@/modules/common/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface NextPageThunkArgs {
  delayMs: number; // Delay in milliseconds
}

export const getRestaurants = createAsyncThunk("restaurants/get", async () => {
  try {
    const restaurants = await api.restaurants.get();
    return restaurants.data?.foods as Restaurant[];
  } catch (error) {
    toast.error("Failed to load Restaurants");
    throw error; // Rethrow the error to mark the thunk as rejected
  }
});

export const nextPageWithDelay = createAsyncThunk<
  Restaurant[],
  NextPageThunkArgs,
  { state: RootState }
>("restaurants/nextPageWithDelay", async ({ delayMs }, { getState }) => {
  const state = getState().restaurants;
  const totalPages = Math.ceil(state._restaurants.length / state.pageSize);

  if (state.page < totalPages) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    const start = (state.page - 1) * state.pageSize;
    const end = start + state.pageSize;
    const nextPageRestaurants = state._restaurants.slice(start, end);

    return nextPageRestaurants;
  } else {
    return [];
  }
});
