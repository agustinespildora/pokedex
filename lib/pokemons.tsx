import { MainClient, NamedAPIResourceList } from 'pokenode-ts';
import { Pokemon } from 'pokenode-ts';



export async function getPokemons(limit :number, offset :number) {

  const api = new MainClient();

  const api_pokemons :NamedAPIResourceList = await api
  .pokemon
  .listPokemons(offset, limit)

  const getPokemon = async (name :string) => {
    let pokemon :Pokemon = await api.pokemon
    .getPokemonByName(name)
    return pokemon
  }
  
  let pokemons :Pokemon[] = await Promise.all(api_pokemons.results.map(async (pokemon) :Promise<Pokemon> => {
    return await getPokemon(pokemon.name)
  }));

  return pokemons
}