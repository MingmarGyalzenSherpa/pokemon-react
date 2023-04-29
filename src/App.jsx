import { useEffect, useState } from "react";
import "./assets/style/app.css";
import Headers from "./components/Headers";
import PokeCard from "./components/PokeCard";
import ButtonWrapper from "./components/ButtonWrapper";
const URL = "https://pokeapi.co/api/v2/pokemon/";
const LIMIT = 1010;
function App() {
  const generateRandomPokemonIndex = (limit) => {
    return Math.ceil(Math.random() * limit);
  };

  const [query, setQuery] = useState(generateRandomPokemonIndex(LIMIT));

  const [pokemon, setPokemon] = useState({});

  const getPokemon = (query) => {
    fetch(URL + query)
      .then((response) => response.json())
      .then((pokemon) => setPokemon(pokemon));
  };

  const handleSearchClick = (query) => {
    setQuery(query);
  };

  const handleRandomGeneratorClick = () => {
    setQuery(generateRandomPokemonIndex(LIMIT));
  };

  useEffect(() => {
    getPokemon(query);
  }, [query]);
  console.log(pokemon);
  return (
    <div className="app">
      <Headers handleClick={handleSearchClick} />
      <PokeCard pokemon={pokemon} />
      <ButtonWrapper handleClick={handleRandomGeneratorClick} />
    </div>
  );
}

export default App;
