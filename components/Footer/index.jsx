import styles from "@styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with <img src="/netliheart.svg" alt="Netlify Heart Logo" className={styles.logo} /> for you
    </footer>
  );
}
