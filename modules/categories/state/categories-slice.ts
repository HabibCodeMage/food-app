import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categories-actions";
import Category from "@/modules/common/interfaces/category.interface";

interface CartState {
  categories: Category[]; // Adjust the type according to your actual data structure
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
}

const initialState: CartState = {
  categories: [],
  status: "idle",
  error: undefined,
};

const catagoriesSlice = createSlice({
  name: "catagories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.status = "succeeded";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions
export const {} = catagoriesSlice.actions;

export default catagoriesSlice.reducer;
