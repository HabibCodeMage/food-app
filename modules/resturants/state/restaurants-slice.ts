import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./restaurants-actions";
import Restaurant from "@/modules/common/interfaces/restaurants.interface";

interface RestaurantsState {
  restaurants: Restaurant[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: RestaurantsState = {
  restaurants: [],
  status: "idle",
  error: undefined,
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
        state.restaurants = action.payload;
        state.status = "succeeded";
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions
export const {} = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
