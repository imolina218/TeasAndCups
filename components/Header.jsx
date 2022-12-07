import Link from "next/link"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div>
          <Link href="/">
            <h1>Teas&Cups</h1>
          </Link>
        </div>

        <div>
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
      </div>
    </header>
  )
}

export default Header
