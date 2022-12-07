import Layout from '../components/Layout'
import styles from "../styles/Index.module.css"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Layout
      page="Home"
    >
      <main className={styles.content}>
        <div className={styles.aboutus}>
          <p>
            We focus on providing content to tea lovers that are 
            interested in learning more about this amazing world.
          </p>
          <form action=''>
            <input type='text' placeholder='Enter your email address'/>
            <button type='submit'>Get Started</button>
          </form>
        </div>
        {/* <div className={styles.footer}>
          <Footer /> 
        </div> */}
      </main>
    </Layout>
  )
}
