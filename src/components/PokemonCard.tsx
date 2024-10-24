interface PokemonCardProps {
    pokemon: {
        name: string; 
        imgSrc?: string;
        alt?: string;
    }
}
  
function PokemonCard({pokemon}:PokemonCardProps) {

    return (
    <figure> 
        <article>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
        </article>
        <figcaption>{pokemon.name}</figcaption>
     </figure>
     );
  }

  export default PokemonCard;
