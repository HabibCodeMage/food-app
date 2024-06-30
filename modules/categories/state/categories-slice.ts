import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categories-actions";
import Category from "@/modules/common/interfaces/category.interface";

interface CartState {
  categories: Category[]; // Adjust the type according to your actual data structure
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  selectedCategoryId: string;
}

const initialState: CartState = {
  categories: [],
  status: "idle",
  error: undefined,
  selectedCategoryId: "all",
};

const catagoriesSlice = createSlice({
  name: "catagories",
  initialState,
  reducers: {
    setSelectedCategoryId: (state, action: PayloadAction<string>) => {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = [{ id: "all", name: "All" }, ...action.payload];
        state.status = "succeeded";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { setSelectedCategoryId } = catagoriesSlice.actions;

export default catagoriesSlice.reducer;
