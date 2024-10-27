import React from "react";
  
  interface NavBarProps {
    pokemonList: { name: string; imgSrc?: string }[];
    setPokemonIndex: (index: number) => void; 
  }

  const NavBar : React.FC<NavBarProps> = ({pokemonList, setPokemonIndex}) => {
  
    return (
        <section>
          {pokemonList.map((pokemon, index) => (
            <button
              key={pokemon.name}
              onClick={() => setPokemonIndex(index)}
            >
              {pokemon.name}
            </button>
          ))}
        </section>
  );
};

export default NavBar;