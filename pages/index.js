import Head from "next/head";
import Link from "next/link";
import styles from "@styles/Layout.module.css";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js on Netlify: it just works!</title>
        <meta name="description" content="Next.js on Netlify: it just works!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Welcome! Browse Pokemon and check the weather.</h1>
        <Link href="/pokemon">
          <a>View all Pokemon</a>
        </Link>

        <div className={styles.explainer}>
          <p>
            This is a static route. Find the file at <code>/pages/index.js</code>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
