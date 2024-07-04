import categoriesReducer, {
  CategoriesState,
  setSelectedCategoryId,
} from "@/modules/categories/state/categories-slice";

describe("categories reducer", () => {
  const initialState: CategoriesState = {
    categories: [],
    status: "idle",
    error: undefined,
    selectedCategoryId: "all",
  };

  it("should handle setSelectedCategoryId", () => {
    const newState = categoriesReducer(
      initialState,
      setSelectedCategoryId("newCategoryId")
    );
    expect(newState.selectedCategoryId).toEqual("newCategoryId");
  });

  it("should handle getCategories.pending", () => {
    const newState = categoriesReducer(initialState, {
      type: "categories/get/pending",
    });
    expect(newState.status).toEqual("loading");
  });

  it("should handle getCategories.fulfilled", () => {
    const mockCategories = [{ id: "1", name: "Category 1" }];
    const newState = categoriesReducer(initialState, {
      type: "categories/get/fulfilled",
      payload: mockCategories,
    });
    expect(newState.categories).toEqual([
      { id: "all", name: "All" },
      ...mockCategories,
    ]);
    expect(newState.status).toEqual("succeeded");
    expect(newState.error).toBeUndefined();
  });

  it("should handle getCategories.rejected", () => {
    const errorMessage = "Failed to fetch categories";
    const newState = categoriesReducer(initialState, {
      type: "categories/get/rejected",
      error: { message: errorMessage },
    });
    expect(newState.status).toEqual("failed");
    expect(newState.error).toEqual(errorMessage);
  });
});
