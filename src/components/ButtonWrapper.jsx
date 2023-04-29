import React from "react";
import "../assets/style/buttonWrapper.css";
export default function ButtonWrapper({ handleClick }) {
  return (
    <div className="button-wrapper">
      <button className="btn-random" onClick={handleClick}>
        GENERATE RANDOM
      </button>
    </div>
  );
}
