import restaurantsReducer, {
  RestaurantsState,
  setSearchTerm,
} from "@/modules/resturants/state/restaurants-slice";

import {
  getRestaurants,
  nextPageWithDelay,
  searchWithDelay,
  filterByLabelWithDelay,
} from "@/modules/resturants/state/restaurants-actions";
import { Dispatch } from "@reduxjs/toolkit";

import mockRootState from "@/__mocks__/mockRootState";
import mockData from "@/__mocks__/resturant.mock.data";

jest.mock("../api", () => ({
  restaurants: {
    get: jest.fn(() =>
      Promise.resolve({ data: [{ id: "1", name: "Restaurant 1" }] })
    ),
  },
}));

describe("restaurants reducer", () => {
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

  it("should handle setSearchTerm", () => {
    const newState = restaurantsReducer(initialState, setSearchTerm("pizza"));
    expect(newState.searchValue).toEqual("pizza");
    expect(newState.page).toEqual(1);
  });

  it("should handle getRestaurants.pending", () => {
    const newState = restaurantsReducer(initialState, {
      type: "restaurants/get/pending",
    });
    expect(newState.status).toEqual("loading");
    expect(newState.error).toBeUndefined();
  });

  it("should handle getRestaurants.fulfilled", () => {
    const mockRestaurants = [{ id: "1", name: "Restaurant 1" }];
    const newState = restaurantsReducer(initialState, {
      type: "restaurants/get/fulfilled",
      payload: mockRestaurants,
    });
    expect(newState._restaurants).toEqual(mockRestaurants);
    expect(newState.status).toEqual("succeeded");
    expect(newState.hasMore).toEqual(false);
    expect(newState.restaurants).toEqual(
      mockRestaurants.slice(0, initialState.pageSize)
    );
    expect(newState.page).toEqual(2);
  });

  it("should handle getRestaurants.rejected", () => {
    const errorMessage = "Failed to fetch restaurants";
    const newState = restaurantsReducer(initialState, {
      type: "restaurants/get/rejected",
      error: { message: errorMessage },
    });
    expect(newState.status).toEqual("failed");
    expect(newState.error).toEqual(errorMessage);
  });
});

describe("async actions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("getRestaurants action creator", async () => {
    const dispatch: Dispatch<any> = jest.fn();
    const getState = () => mockRootState;
    await getRestaurants()(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/get/pending",
        meta: expect.objectContaining({
          arg: undefined,
          requestId: expect.any(String),
          requestStatus: "pending",
        }),
      })
    );

    await dispatch(
      getRestaurants.fulfilled(mockData, "", undefined, { meta: undefined })
    );

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/get/fulfilled",
        payload: mockData,
        meta: expect.objectContaining({
          arg: undefined,
          requestId: expect.any(String),
          requestStatus: "fulfilled",
        }),
      })
    );
  });

  it("nextPageWithDelay action creator", async () => {
    const dispatch: Dispatch<any> = jest.fn();
    const getState = () => mockRootState;

    await nextPageWithDelay({ delayMs: 100 })(dispatch, getState, undefined);

    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/nextPageWithDelay/pending",
        meta: expect.objectContaining({
          arg: { delayMs: 100 },
          requestId: expect.any(String),
          requestStatus: "pending",
        }),
      })
    );

    await dispatch(
      nextPageWithDelay.fulfilled(
        mockData,
        "",
        { delayMs: 100 },
        { meta: undefined }
      )
    );

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/nextPageWithDelay/fulfilled",
        payload: mockData,
        meta: expect.objectContaining({
          arg: { delayMs: 100 },
          requestId: expect.any(String),
          requestStatus: "fulfilled",
        }),
      })
    );
  });

  it("searchWithDelay action creator", async () => {
    const dispatch: Dispatch<any> = jest.fn();
    const getState = () => mockRootState;

    await searchWithDelay({ searchTerm: "pizza", delayMs: 100 })(
      dispatch,
      getState,
      undefined
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/searchWithDelay/pending",
        meta: expect.objectContaining({
          arg: { searchTerm: "pizza", delayMs: 100 },
          requestId: expect.any(String),
          requestStatus: "pending",
        }),
      })
    );

    await dispatch(
      searchWithDelay.fulfilled(
        mockData,
        "",
        { searchTerm: "pizza", delayMs: 100 },
        { meta: undefined }
      )
    );

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/searchWithDelay/fulfilled",
        payload: mockData,
        meta: expect.objectContaining({
          arg: { searchTerm: "pizza", delayMs: 100 },
          requestId: expect.any(String),
          requestStatus: "fulfilled",
        }),
      })
    );
  });

  it("filterByLabelWithDelay action creator", async () => {
    const dispatch: Dispatch<any> = jest.fn();
    const getState = () => mockRootState;

    await filterByLabelWithDelay({ id: "1", delayMs: 100 })(
      dispatch,
      getState,
      undefined
    );

    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/filterByLabelWithDelay/pending",
        meta: expect.objectContaining({
          arg: { id: "1", delayMs: 100 },
          requestId: expect.any(String),
          requestStatus: "pending",
        }),
      })
    );

    await dispatch(
      filterByLabelWithDelay.fulfilled(
        mockData,
        "",
        { id: "1", delayMs: 100 },
        { meta: undefined }
      )
    );

    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "restaurants/filterByLabelWithDelay/fulfilled",
        payload: mockData,
        meta: expect.objectContaining({
          arg: { id: "1", delayMs: 100 },
          requestId: expect.any(String),
          requestStatus: "fulfilled",
        }),
      })
    );
  });
});
