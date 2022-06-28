import Head from 'next/head'
import Layout, { TITLE } from '../components/layout'
import { GetStaticProps } from 'next'
import { Pokemon } from 'pokenode-ts';
import { getPokemons } from '../lib/pokemons';
import PokemonIndex from './pokemons';

const PAGE_SIZE :number = 12;
const INITIAL_OFFSET :number = 0;

export const getStaticProps: GetStaticProps = async () => {

  let initial_pokemons :Pokemon[] = await getPokemons(PAGE_SIZE, INITIAL_OFFSET)
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
  return (
    <Layout>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <PokemonIndex
        initial_pokemons={initial_pokemons}
        page_size={PAGE_SIZE}
      />
    </Layout>
  )
}
