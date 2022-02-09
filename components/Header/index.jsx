import Link from "next/link";
import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/pokemon">
              <a>Pokemon</a>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/bitcoin">
              <a>Bitcoin</a>
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
