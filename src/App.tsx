import "./App.css";
import PokemonCard from './components/PokemonCard.tsx';
import {useState} from "react";
import NavBar from './components/navbar.tsx';

    const pokemonList = [
  { name: "bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"},
  { name: "charmander", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"},
  { name: "squirtle", imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"},
  { name: "pikachu", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"},
  { name: "mew"},
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    return (
      <section>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      </section>
    );
  }
  
  export default App;