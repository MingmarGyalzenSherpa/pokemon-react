import React from "react";

export default function PokeTitleWrapper({ name, hp }) {
  console.log(hp);
  return (
    <div className="poke-title-wrapper">
      <div className="poke-title">
        <h3>{name}</h3>
      </div>
      <div className="stat-hp">HP {hp} </div>
    </div>
  );
}
