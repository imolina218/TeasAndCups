import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.nav}>
            <nav className={styles.index}>
              <Link href="/">Home</Link>
              <span> | </span>
              <Link href="/history">History</Link>
              <span> | </span>
              <Link href="/teas">Teas</Link>
              <span> | </span>
              <Link href="/cups">Cups</Link>
            </nav>
          </div>

        <p /* className={styles.copyright} */>All rights might be reserved</p>
      </div>

    </footer>
  )
}

export default Footer