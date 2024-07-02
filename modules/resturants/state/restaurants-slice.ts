import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants, nextPageWithDelay } from "./restaurants-actions";
import Restaurant from "@/modules/common/interfaces/restaurants.interface";

interface RestaurantsState {
  restaurants: Restaurant[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  page: number;
  pageSize: number;
  hasMore: boolean;
  _restaurants: Restaurant[];
}

const initialState: RestaurantsState = {
  restaurants: [],
  _restaurants: [],
  status: "idle",
  error: undefined,
  pageSize: 8,
  hasMore: true,
  page: 1,
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = "loading";
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
      });
  },
});

// Export actions
export const {} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
