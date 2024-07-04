import { RootState } from "@/modules/common/store";

const mockRootState: RootState = {
  restaurants: {
    restaurants: [],
    _restaurants: [],
    status: "idle",
    error: undefined,
    pageSize: 8,
    hasMore: true,
    page: 1,
    searchValue: "",
  },
  categories: {
    categories: [],
    status: "idle",
    selectedCategoryId: "all",
  },
};

export default mockRootState;
