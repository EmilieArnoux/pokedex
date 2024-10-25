import "./App.css";
import PokemonCard from './components/PokemonCard.tsx';
import {useState} from "react";


    const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  function App() {

  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleNext = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setpokemonIndex(pokemonIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setpokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <section>
      <article> 
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </article>
      <button type="button" onClick={handlePrevious}>PRECEDENT</button>
      <button type="button" onClick={handleNext}>SUIVANT</button>
    </section>

  );
    
  }
    
    export default App;