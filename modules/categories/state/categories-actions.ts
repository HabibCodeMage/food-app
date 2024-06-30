import api from "@/api";
import Category from "@/modules/common/interfaces/category.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getCategories = createAsyncThunk("categories/get", async () => {
  try {
    const categories = await api.categories.get();
    return categories.data as Category[];
  } catch (error) {
    toast.error("Failed to load Categories");
    throw error; // Rethrow the error to mark the thunk as rejected
  }
});
