import React from "react";

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
  interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
    handlePrevious: () => void;
    handleNext: () => void;
    isPreviousDisabled: boolean;
    isNextDisabled: boolean;
  }

  const NavBar : React.FC<NavBarProps> = ({handlePrevious, handleNext, isPreviousDisabled, isNextDisabled }) => {
  
  return (
    <div>
        <button type="button" onClick={handlePrevious} disabled={isPreviousDisabled}>PRECEDENT</button>
        <button type="button" onClick={handleNext} disabled={isNextDisabled}>SUIVANT</button>
    </div>
  );
};

export default NavBar;