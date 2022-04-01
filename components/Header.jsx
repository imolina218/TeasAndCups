import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">

        <div className={styles.main}>

          <div className={styles.herbs}>
            <Image width={500} height={400} src="/img/Herbs.png" alt="Tea Herbs Image" />
          </div>

          <div className={styles.bar}>

            <Link href="/">
              <h1>Teas&Cups<span>Made For Tea Lovers</span></h1>
            </Link>
            
            <nav className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/history">Hystory</Link>
              <Link href="/teas">Teas</Link>
              <Link href="/cups">Cups</Link>
            </nav>
  
          </div>
          
          <div className={styles.cup}>
            <Image priority width={500} height={500} src="/img/TeaCupPNGsmoke2.png" alt="Tea Cup Image" />
          </div>

        </div>
        
      </div>
    </header>
  )
}

export default Header