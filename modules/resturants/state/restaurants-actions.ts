import api from "@/api";
import Restaurant from "@/modules/common/interfaces/restaurants.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getRestaurants = createAsyncThunk("restaurants/get", async () => {
  try {
    const restaurants = await api.restaurants.get();
    return restaurants.data?.food as Restaurant[];
  } catch (error) {
    toast.error("Failed to load Restaurants");
    throw error; // Rethrow the error to mark the thunk as rejected
  }
});
