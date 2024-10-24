function PokemonCard({pokemon}) {

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