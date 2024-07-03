"use client";
import React, { FC } from "react";
import SearchIcon from "../../icons/SearchIcon";
import styles from "./styles.module.css";

interface SearchBarProps {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "search",
}) => {
  return (
    <div className={styles.root}>
      <SearchIcon></SearchIcon>
      <input
        {...(value ? { value } : {})}
        placeholder={
          placeholder.length > 1
            ? placeholder.charAt(0).toUpperCase() + placeholder.slice(1)
            : placeholder
        }
        onChange={onChange}
        className={styles.inputBox}
      />
    </div>
  );
};

export default SearchBar;
