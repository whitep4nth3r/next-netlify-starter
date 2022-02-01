import Head from "next/head";
import Link from "next/link";
import styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export async function getStaticProps() {
  const weather = {};

  return {
    props: {
      weather,
    },
  };
}

export default function Weather({ weather }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Check the weather</title>
        <meta name="description" content="Check the weather. This page uses Incremental Static Revalidation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.explainer}>
          <p>
            This is a static route. Find the file at <code>/pages/weather.js</code>
          </p>
          <p>
            This page uses incremental static regeneration to rebuild this static page (rather than the whole site!)
            when the weather report changes.
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
