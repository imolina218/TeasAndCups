import Layout from '../components/Layout'
import styles from "../styles/Index.module.css"

export default function Home() {
  return (

    <Layout
      page="Home"
    >
      <main className={`container ${styles.content}`}>
        <div className={styles.aboutus}>
          <h2>About Us</h2>
          <p>
            Welcome to Teas&Cups readers!
          </p>
          <br />
          <p>
            We are a group of people in love and completly dedicated 
            to the tea community. We focuse on providing content to tea lovers
            that are interested to learn more about this amazing world.
          </p>
          <br />
          <p>
            Enjoy the content.
          </p>
        </div>

      </main>
    </Layout>

  )
}
