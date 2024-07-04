import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  filterByLabelWithDelay,
  getRestaurants,
  nextPageWithDelay,
  searchWithDelay,
} from "./restaurants-actions";
import Restaurant from "@/modules/common/interfaces/restaurants.interface";

export interface RestaurantsState {
  restaurants: Restaurant[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  page: number;
  pageSize: number;
  hasMore: boolean;
  _restaurants: Restaurant[];
  searchValue: string;
}

const initialState: RestaurantsState = {
  restaurants: [],
  _restaurants: [],
  status: "idle",
  error: undefined,
  pageSize: 8,
  hasMore: true,
  page: 1,
  searchValue: "",
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.page = 1;
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(getRestaurants.fulfilled, (state, action) => {
        state._restaurants = action.payload;
        state.status = "succeeded";
        state.hasMore = action.payload.length >= state.pageSize;
        state.restaurants = action.payload.slice(0, state.pageSize);
        state.page += 1;
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(nextPageWithDelay.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(nextPageWithDelay.fulfilled, (state, action) => {
        const nextPageRestaurants = action.payload;
        state.restaurants = [...state.restaurants, ...nextPageRestaurants];
        state.page += 1;
        state.hasMore = nextPageRestaurants.length >= state.pageSize;
        state.status = "succeeded";
      })
      .addCase(nextPageWithDelay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load next page";
      })
      .addCase(searchWithDelay.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
        state.restaurants = [];
      })
      .addCase(searchWithDelay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants = action.payload;
        state.page += 1;
        state.hasMore = action.payload.length >= state.pageSize;
      })
      .addCase(searchWithDelay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Error occurred";
      })
      .addCase(filterByLabelWithDelay.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
        state.page = 1;
        state.restaurants = [];
      })
      .addCase(filterByLabelWithDelay.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurants = action.payload;
        state.page += 1;
        state.hasMore = action.payload.length >= state.pageSize;
      })
      .addCase(filterByLabelWithDelay.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Error occurred";
      });
  },
});

// Export actions
export const { setSearchTerm } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
