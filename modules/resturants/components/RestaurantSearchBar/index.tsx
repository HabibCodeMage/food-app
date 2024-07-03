"use client";
import SearchBar from "@/modules/common/components/SearchBar";
import { AppDispatch, RootState } from "@/modules/common/store";
import { debounce } from "@/modules/common/utils";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../state/restaurants-slice";
import { searchWithDelay } from "../../state/restaurants-actions";

const RestaurantSearchBar = () => {
  const dispatch: AppDispatch = useDispatch();

  const debouncedSetSearchTerm = debounce((term: string) => {
    dispatch(setSearchTerm(term));
    dispatch(searchWithDelay({ searchTerm: term, delayMs: 1000 }));
  }, 700);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearchTerm(event.target.value);
  };

  return (
    <div>
      <SearchBar
        onChange={handleChange}
        placeholder="Enter restaurant name..."
      />
    </div>
  );
};

export default RestaurantSearchBar;
