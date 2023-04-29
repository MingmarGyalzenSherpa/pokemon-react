import React from "react";

import "../assets/style/pokecard.css";
import PokeImgWrapper from "./PokeImgWrapper";
import PokeTitleWrapper from "./PokeTitleWrapper";
import PokeDetails from "./PokeDetails";

export default function PokeCard({ pokemon }) {
  return (
    <div className="pokecard">
      <PokeTitleWrapper
        name={pokemon.species?.name.toUpperCase()}
        hp={pokemon.stats && pokemon.stats[0].base_stat}
      />
      <PokeImgWrapper
        img={
          pokemon.sprites?.other.home.front_default ||
          pokemon.sprites?.other["official-artwork"].front_default
        }
      />
      <PokeDetails pokemon={pokemon} />
    </div>
  );
}
