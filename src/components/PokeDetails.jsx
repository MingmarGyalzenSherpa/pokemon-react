import React from "react";

export default function PokeDetails({ pokemon }) {
  return (
    <div className="poke-details">
      <div className="types">
        Type:
        {pokemon.types &&
          pokemon.types.map((el, i) => " " + el.type.name.toUpperCase() + " ")}
      </div>

      <div className="move-wrapper">
        Moves:
        <div className="moves">
          {pokemon.moves?.slice(0, 4).map((el, i) => (
            <div className="move" key={i}>
              {el.move.name.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
