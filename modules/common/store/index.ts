import categoriesSlice from "@/modules/categories/state/categories-slice";
import restaurantsSlice from "@/modules/resturants/state/restaurants-slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    restaurants: restaurantsSlice,
  },
});
export default store;

// Define the RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Define the AppDispatch type based on the store's dispatch
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
