import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Pokedex Agustín Espíldora'
export const siteTitle = 'Pokédex'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.secondBackground}>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="https://assets.pokemon.com/static2/_ui/img/favicon.ico" />
          <meta
            name="description"
            content="Agustín Espíldora's Pokedex with Next.js & Typescript"
          />
          <meta
            property="og:image"
            content={`https://assets.pokemon.com/static2/_ui/img/favicon.ico`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="https://i.postimg.cc/sxLhZWQz/1642119089352.jpg"
                className={`${utilStyles.profileImage}`}
                height={144}
                width={144}
                alt={name}
              />
              <h1>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
    
  )
}