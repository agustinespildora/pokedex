import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

const NAME = 'Pokedex Agustín Espíldora'
export const TITLE = 'Pokédex'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={utilStyles.secondBackground}>
      <div className={utilStyles.container}>
        <Head>
          <link rel="icon" href="https://assets.pokemon.com/static2/_ui/img/favicon.ico" />
          <meta
            name="description"
            content="Agustín Espíldora's Pokedex with Next.js & Typescript"
          />
          <meta
            property="og:image"
            content={`http://assets.pokemon.com/static2/_ui/img/favicon.ico`}
          />
          <meta name="og:title" content={TITLE} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={utilStyles.header}>
          <Image
            priority
            src="https://i.postimg.cc/sxLhZWQz/1642119089352.jpg"
            className={`${utilStyles.profileImage}`}
            height={144}
            width={144}
            alt={NAME}
          />
          <h1>{NAME}</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
    
  )
}