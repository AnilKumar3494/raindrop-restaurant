import React from "react";
import { BsSearchHeart } from "react-icons/bs";
import "./searchbar.css";

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  // Update search query state on input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for your favorite food items..."
        aria-label="Search for food items"
        className="searchbar-input"
      />
      <button className="searchbar-button" aria-label="Search">
        <BsSearchHeart className="searchbar-icon" title="Search" />
      </button>
    </div>
  );
};

export default Searchbar;
