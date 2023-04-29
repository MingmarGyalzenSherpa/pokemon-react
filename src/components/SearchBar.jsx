import React from "react";

import "../assets/style/searchbar.css";
export default function SearchBar({ handleClick }) {
  let query;
  const handleChange = (e) => {
    query = e.target.value.toLowerCase();
    console.log(query);
  };

  return (
    <div className="searchbar">
      <form>
        <input
          type="text"
          className="searchbar__input"
          placeholder="Enter Pokemon"
          onChange={handleChange}
        ></input>
        <button
          className="searchbar__btn"
          onClick={(e) => {
            e.preventDefault();
            handleClick(query);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
