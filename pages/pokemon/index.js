import Head from "next/head";
import Link from "next/link";
import styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticProps() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9").then((res) => res.json());

  const pokemonCollection = data.results.map((pokemon) => pokemon.name);

  return {
    props: {
      pokemonCollection,
    },
  };
}

export default function Home({ pokemonCollection }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Choose your Pokemon</title>
        <meta name="description" content="Click on a Pokemon name to view a profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Click on a Pokemon name to view a profile</h1>
        <ol className={styles.list}>
          {pokemonCollection.map((pokemon) => (
            <li key={pokemon} className={styles.listItem}>
              <Link href={`/pokemon/${pokemon}`}>
                <a>{pokemon}</a>
              </Link>
            </li>
          ))}
        </ol>

        <div className={styles.explainer}>
          <p>
            This is a static route that uses <code>getStaticProps()</code> to fetch the data for the page at build time.
            Find the file at <code>/pages/pokemon/index.js</code>
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://nextjs.org/docs/api-reference/data-fetching/get-static-props"
              target="_blank"
              rel="noreferrer">
              Next.js docs for getStaticProps().
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
