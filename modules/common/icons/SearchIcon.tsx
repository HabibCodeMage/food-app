import * as React from "react";
import IconProps from ".";

const SearchIcon: React.FC<IconProps> = ({
  width = "24px",
  height = "24px",
  fill = "none",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    {...props}
  >
    <path
      stroke="#989da2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.954 14.946 21 21m-4-11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  </svg>
);
export default SearchIcon;
