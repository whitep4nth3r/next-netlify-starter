import Head from "next/head";
import Link from "next/link";
import styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticProps() {
  const bitcoin = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then((res) => res.json());

  return {
    props: {
      bitcoin,
    },
    revalidate: 1, // Activates Incremental Static Revalidation with a revalidation period of 1 second
  };
}

export default function Weather({ bitcoin }) {
  console.log(bitcoin);
  return (
    <div className={styles.container}>
      <Head>
        <title>Check the price of Bitcoin</title>
        <meta name="description" content="Check the weather. This page uses Incremental Static Revalidation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Bitcoin</h1>

        <p>Updated {bitcoin.time.updated}</p>

        <p>${bitcoin.bpi.USD.rate}</p>

        <p>£{bitcoin.bpi.GBP.rate}</p>

        <p>€{bitcoin.bpi.EUR.rate}</p>

        <div className={styles.explainer}>
          <p>
            This is a static route. Find the file at <code>/pages/bitcoin.js</code>
          </p>
          <p>
            This page uses incremental static regeneration to rebuild this static page (rather than the whole site!)
            when the price of Bitcoin changes.
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
              target="_blank"
              rel="noreferrer">
              Next.js docs for Incremental Static Regeneration.
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
