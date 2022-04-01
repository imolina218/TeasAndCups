import Link from "next/link"
import styles from "../styles/Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTelegram, faTwitter, faReddit } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <nav className={styles.navigation}>
          <Link href="/">Home</Link>
          <Link href="/history">Hystory</Link>
          <Link href="/teas">Teas</Link>
          <Link href="/cups">Cups</Link>
        </nav>
        
        <nav className={styles.socials}>
          <a href=""><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
          <a href=""><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          <a href=""><FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon></a>
          <a href=""><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
          <a href=""><FontAwesomeIcon icon={faReddit}></FontAwesomeIcon></a>
        </nav>
          
      </div>

      <p className={styles.copyright}>All rights reserved</p>

    </footer>
  )
}

export default Footer