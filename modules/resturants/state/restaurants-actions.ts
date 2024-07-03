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

interface LabelThunkArgs {
  id: string;
  delayMs: number;
}

interface FilterOptions {
  id: string;
  searchValue: string;
  existingRestaurantIds: string[];
}

// Helper function to filter restaurants
const filterRestaurants = (
  restaurants: Restaurant[],
  options: FilterOptions
): Restaurant[] => {
  const { id, searchValue, existingRestaurantIds } = options;
  const searchTerm = searchValue.toLowerCase();
  let filteredRestaurants = restaurants;

  if (id !== "all" && searchValue) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) =>
        !existingRestaurantIds.includes(restaurant.id) &&
        restaurant.name.toLowerCase().includes(searchTerm) &&
        restaurant.categoryId === id
    );
  } else if (id !== "all") {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) =>
        !existingRestaurantIds.includes(restaurant.id) &&
        restaurant.categoryId === id
    );
  } else if (searchValue) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) =>
        !existingRestaurantIds.includes(restaurant.id) &&
        restaurant.name.toLowerCase().includes(searchTerm)
    );
  }

  return filteredRestaurants;
};

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
  const categoryId = getState().categories.selectedCategoryId;

  const searchTerm = state.searchValue;
  let restaurantsToFetch: Restaurant[] = [];

  await new Promise((resolve) => setTimeout(resolve, delayMs));
  if (searchTerm || categoryId) {
    const existingRestaurantIds = state.restaurants.map(
      (restaurant) => restaurant.id
    );
    const filteredRestaurants = filterRestaurants(state._restaurants, {
      id: categoryId,
      searchValue: searchTerm,
      existingRestaurantIds,
    });
    restaurantsToFetch = filteredRestaurants.slice(0, state.pageSize); // Limit to page size
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
    const categoryId = getState().categories.selectedCategoryId;

    await new Promise((resolve) => setTimeout(resolve, delayMs));

    // Example logic to filter data based on search term
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    const filteredRestaurants = filterRestaurants(state._restaurants, {
      id: categoryId,
      searchValue: searchTerm,
      existingRestaurantIds: [],
    });

    return filteredRestaurants.slice(0, state.pageSize);
  }
);

export const filterByLabelWithDelay = createAsyncThunk<
  Restaurant[],
  LabelThunkArgs,
  { state: RootState }
>(
  "restaurants/filterByLabelWithDelay",
  async ({ id, delayMs }, { getState }) => {
    const state = getState().restaurants;
    const searchValue = state.searchValue;

    await new Promise((resolve) => setTimeout(resolve, delayMs));

    const filteredRestaurants = filterRestaurants(state._restaurants, {
      id,
      searchValue,
      existingRestaurantIds: [],
    });

    return filteredRestaurants.slice(0, state.pageSize);
  }
);
