import Layout from '../components/Layout'
import styles from "../styles/Index.module.css"
import Footer from "../components/Footer"
import Form from '../components/Form'

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

          <Form/>
        </div>


        {/* <div className={styles.footer}>
          <Footer /> 
        </div> */}
      </main>
    </Layout>
  )
}
