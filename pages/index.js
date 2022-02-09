import Head from "next/head";
import Link from "next/link";
import styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getServerSideProps(context) {
  const name = context.query.name || "stranger";

  return {
    props: {
      name,
    },
  };
}

export default function Home({ name }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js on Netlify: it just works!</title>
        <meta name="description" content="Next.js on Netlify: it just works!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Welcome {name}!</h1>
        <h2>Browse Pokemon and check the price of Bitcoin.</h2>
        <p>
          <Link href="/pokemon">
            <a>View all Pokemon</a>
          </Link>
        </p>
        <p>
          <Link href="/bitcoin">
            <a>Check Bitcoin</a>
          </Link>
        </p>
        <div className={styles.explainer}>
          <p>
            This is a route that uses <code>getServerSideProps()</code> to show dynamic data at request time. Experiment
            with adding <code>?name=YOUR_NAME</code> to the URL.
          </p>
          <p>
            Find the file at <code>/pages/index.js</code>
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props"
              target="_blank"
              rel="noreferrer">
              Next.js docs for getServerSideProps().
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
