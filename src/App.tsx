import "./App.css";
import PokemonCard from './components/PokemonCard.tsx';
const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


function App() {
  return (
    <article> 
      <PokemonCard pokemon={pokemonList[0]} />
    </article>
  );

}

export default App;