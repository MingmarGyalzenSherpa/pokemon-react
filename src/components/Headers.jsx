import React from "react";
import SearchBar from "./SearchBar";
import LogoWrapper from "./LogoWrapper";
import "../assets/style/header.css";
export default function Headers({ handleClick }) {
  return (
    <div className="header">
      <LogoWrapper />
      <SearchBar handleClick={handleClick} />
    </div>
  );
}
