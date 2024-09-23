// src/components/SearchBar.tsx
import React from "react";
import SearchIcon2 from "../assets/icons/SearchIcon2";
import SearchIcon from "../assets/icons/SearchIcon";

const SearchBar: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-3 text-gray-500 dark:text-gray-300">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 w-full rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      <span className="absolute right-3 text-gray-500 dark:text-gray-300">
        <SearchIcon2 />
      </span>
    </div>
  );
};

export default SearchBar;
