const fetchPokemon = (pokemonName) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((pokemon) => {
      const extractedTypes = pokemon.types.map((type) => type.type.name);
      return {
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
        types: extractedTypes,
      };
    });
};

module.exports = fetchPokemon;
