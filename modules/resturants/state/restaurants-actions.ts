import api from "@/api";
import Restaurant from "@/modules/common/interfaces/restaurants.interface";
import { RootState } from "@/modules/common/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface NextPageThunkArgs {
  delayMs: number; // Delay in milliseconds
}

interface SearchThunkArgs {
  searchTerm: string;
  delayMs: number;
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
  const searchTerm = state.searchValue;
  let restaurantsToFetch: Restaurant[] = [];

  await new Promise((resolve) => setTimeout(resolve, delayMs));
  if (searchTerm) {
    const existingRestaurantIds = state.restaurants.map(
      (restaurant) => restaurant.id
    );
    // Logic when a search term exists
    const filteredRestaurants = state._restaurants.filter(
      (restaurant) =>
        !existingRestaurantIds.includes(restaurant.id) &&
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    restaurantsToFetch = filteredRestaurants.slice(0, state.pageSize); // Limit to page size
    // Remove already fetched restaurants from restaurantsToFetch
  } else {
    // Default logic when no search term
    const totalPages = Math.ceil(state._restaurants.length / state.pageSize);

    if (state.page < totalPages) {
      const start = (state.page - 1) * state.pageSize;
      const end = start + state.pageSize;
      restaurantsToFetch = state._restaurants.slice(start, end);
    }
  }

  return restaurantsToFetch;
});

export const searchWithDelay = createAsyncThunk<
  Restaurant[],
  SearchThunkArgs,
  { state: RootState }
>(
  "restaurants/searchWithDelay",
  async ({ searchTerm, delayMs }, { getState }) => {
    const state = getState().restaurants;
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    // Example logic to filter data based on search term
    const filteredRestaurants = state._restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredRestaurants.slice(0, state.pageSize);
  }
);
