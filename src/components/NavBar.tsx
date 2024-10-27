import React from "react";
  
  interface NavBarProps {
    pokemonList: { name: string; imgSrc?: string }[];
    setPokemonIndex: (index: number) => void; 
  }

  const NavBar: React.FC<NavBarProps> = ({ pokemonList, setPokemonIndex }) => {

    const handlePikachu = (index: number, name: string) => {

      if (name === "pikachu") {
        alert("pika pikachu !!!");
      }
      setPokemonIndex(index);
    };

    return (
        <section>
          {pokemonList.map((pokemon, index) => (
            <button
              key={pokemon.name}
              onClick={() => handlePikachu(index, pokemon.name)}>
              {pokemon.name}
            </button>
          ))}
        </section>
  );
};

export default NavBar;