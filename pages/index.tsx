import Head from 'next/head'
import React, {useState} from 'react';
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { GetStaticProps } from 'next'
import { Pokemon } from 'pokenode-ts';
import { getPokemons } from '../lib/pokemons';
import { Dispatch, SetStateAction } from 'react';

const LIMIT :number = 12;
const OFFSET :number = 0;

export const getStaticProps: GetStaticProps = async () => {

  let initial_pokemons :Pokemon[] = await getPokemons(LIMIT, OFFSET)
  return {
    props: {
      initial_pokemons
    }
  }
}


export default function Home({
  initial_pokemons
}: {
  initial_pokemons: Pokemon[]
})
{
  const [offset, setOffset] :[number, Dispatch<SetStateAction<number>>] = useState(12)
  const [pokemons, setPokemons] :[Pokemon[], Dispatch<SetStateAction<Pokemon[]>>] = useState(initial_pokemons)

  const loadMorePokemons = async() => {
    const new_offset :number = offset + LIMIT
    const new_initial_pokemons :Pokemon[] = await getPokemons(LIMIT, offset)
    setOffset(new_offset)
    setPokemons(pokemons.concat(new_initial_pokemons))
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link href="//db.onlinewebfonts.com/c/073a3b73a63a87e100f6bb8f003fc0d3?family=Flexo+Light" rel="stylesheet" type="text/css"/>
      </Head>
      <section className={utilStyles.padding}>
        <ul className={utilStyles.columns}>
          {pokemons.map(({ id, name, sprites, types }) => (
            <li className={utilStyles.listItem} key={id}>
              <img src={sprites.other['official-artwork'].front_default} className={utilStyles.pokeImages}></img>
              <small className={utilStyles.pokeNumber}>N.°{"0".repeat(3 - id.toString().length)}{id}</small>
              <strong >{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
              <ul className={utilStyles.typeColumns}>
                {types.map(({type}) => (
                  <li className={utilStyles.typeTag}>{type.name}</li>
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

    </Layout>
  )
}
