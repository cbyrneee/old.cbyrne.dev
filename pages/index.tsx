import Head from 'next/head'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <Head>
        <title>Conor Byrne</title>
        <meta name="description" content="Hi, I'm Conor. I'm a Java, Kotlin and Web Developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Conor Byrne
        </h1>

        <p className={styles.subtitle}>
          Java, Kotlin and Web Developer
        </p>
      </main>
    </div>
  )
}

/**
 *    <footer className={styles.footer}>
        <p>Coded and designed with ❤️ by Conor Byrne</p>
      </footer>
 */
