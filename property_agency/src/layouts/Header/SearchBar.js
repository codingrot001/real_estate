import React from "react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="hidden lg:flex items-center" onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for properties"
        className="py-2 px-4 rounded-l bg-gray-200 ring-2 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 font-semibold text-white py-2 px-4 border-blue-500 rounded-r ring-2 ring-blue-500 hover:ring-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
