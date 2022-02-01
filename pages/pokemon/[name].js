/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticPaths() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9").then((res) => res.json());

  const paths = data.results.map((pokemon) => ({
    params: {
      name: pokemon.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { name } = params;

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => res.json());

  const pokemon = {
    name,
    imageUrl: data.sprites.front_default,
  };

  return {
    props: {
      pokemon,
    },
  };
}

export default function PokemonSingle({ pokemon }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pokemon.name}</title>
        <meta name="description" content={`A profile page for ${pokemon.name}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.imageUrl} alt={pokemon.name} height="100" width="100" />

        <div className={styles.explainer}>
          <p>
            This is a dynamic page route generated with <code>getStaticPaths()</code> in{" "}
            <code>/pages/pokemon/[name].js</code>
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://nextjs.org/docs/api-reference/data-fetching/get-static-paths"
              target="_blank"
              rel="noreferrer">
              Next.js docs for getStaticPaths().
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
