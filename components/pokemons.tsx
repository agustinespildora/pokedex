import React, {useState} from 'react';
import { Pokemon } from 'pokenode-ts';
import { Dispatch, SetStateAction } from 'react';
import utilStyles from '../styles/utils.module.css'
import { getPokemons } from '../lib/pokemons';



export default function PokemonIndex({
  initial_pokemons,
  page_size
}: {
  initial_pokemons :Pokemon[],
  page_size :number
})
{

  const [offset, setOffset] :[number, Dispatch<SetStateAction<number>>] = useState(12)
  const [pokemons, setPokemons] :[Pokemon[], Dispatch<SetStateAction<Pokemon[]>>] = useState(initial_pokemons)

  const spanishTypes = (type) => {
    switch (type) {
      case "water":
        return "Agua"
      case "fire":
        return "Fuego"
      case "grass":
        return "Planta"
      case "poison":
        return "Veneno"
      case "bug":
        return "Bicho"
      case "normal":
        return "Normal"
      case "electric":
        return "Eléctrico"
      case "flying":
        return "Volador"
      case "ground":
        return "Tierra"
      case "fairy":
        return "Hada"  
      case "fighting":
        return "Luchador"
      case "psychic":
        return "Psíquico"
      case "rock":
        return "Roca"
      case "steel":
        return "Acero"
      case "ice":
        return "Hielo"
      case "ghost":
        return "Fantasma"
      case "dragon":
        return "Dragón"
      }
  }
  const loadMorePokemons = async() => {
    const new_offset :number = offset + page_size
    const new_initial_pokemons :Pokemon[] = await getPokemons(page_size, offset)
    setOffset(new_offset)
    setPokemons(pokemons.concat(new_initial_pokemons))
  }

  return (
    <section className={utilStyles.padding}>
      <ul className={utilStyles.columns}>
        {pokemons.map(({ id, name, sprites, types }) => (
          <li className={utilStyles.listItem} key={id}>
            <img src={sprites.other['official-artwork'].front_default} className={utilStyles.pokeImages}></img>
            <small className={utilStyles.pokeNumber}>N.°{"0".repeat(3 - id.toString().length)}{id}</small>
            <strong >{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
            <ul className={utilStyles.typeColumns}>
              {types.map(({type}) => (
                <li className={`${utilStyles[type.name]} ${utilStyles.typeTag}`}>{spanishTypes(type.name)}</li>
                ))
              }
            </ul>
          </li>
        ))
        }
      </ul>
      <div className={utilStyles.center}>
        <button type="button" className={utilStyles.button} onClick={loadMorePokemons}>Cargar más Pokémon</button>
      </div>
    </section>
  )
}