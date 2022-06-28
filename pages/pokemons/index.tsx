import { Pokemon } from 'pokenode-ts';

export default function ShowPokemon({
  pokemon,
}: {
  pokemon: Pokemon,
})
{
  return <h1>{pokemon.name}</h1>
}