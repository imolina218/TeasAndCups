import Layout from '../components/Layout'
import Image from 'next/image'
import Footer from "../components/Footer"
import styles from "../styles/Teas.module.css"

const Teas = () => {
  return (
    <Layout
      page="Teas"
    >
      <main className={styles.content}>
        <div className={styles.title}>
          <h1>Types of Teas by Color</h1>
          <div className={styles.next}>
            <Image
              src='/img/next.webp'
              alt="next"
              width={120}
              height={120}
              priority
            />
          </div>
        </div>

        <div className={styles.teas}>
          <div className={styles.teasl}>
            <div>
              <p><span>Type:</span> Green</p>
              <p><span>Properties:</span> Rich in antioxidants and reduces inflammation</p>
              <p><span>Origin:</span> China</p>
              <p><span>Brew Time:</span> 2 minutes</p>
              <p><span>Temperature:</span> 80°C</p>
            </div>
            
            <div>
              <Image
                src='/img/GreenTea.webp'
                alt="green tea"
                width={400}
                height={200}
                priority
              />
            </div>
          </div>
          
          <div className={styles.teasr}>

            <div>
              <Image
                src='/img/YellowTea.webp'
                alt="yellow tea"
                width={500}
                height={300}
                priority
              />
            </div>            
  
            <div>
              <p><span>Type:</span> Yellow</p>
              <p><span>Properties:</span> Lowers blood sugar and prevents osteoporosis</p>
              <p><span>Origin:</span> China</p>
              <p><span>Brew Time:</span> 3 minutes</p>
              <p><span>Temperature:</span> 93°C</p>
            </div>
          </div>

          <div className={styles.teasl}>
            <div>
              <p><span>Type:</span> White</p>
              <p><span>Properties:</span> Prevents skin aging and protects teeth from bacteria</p>
              <p><span>Origin:</span> China</p>
              <p><span>Brew Time:</span> 1 minutes</p>
              <p><span>Temperature:</span> 85°C</p>
            </div>
            
            <div>
              <Image
                src='/img/WhiteTea.webp'
                alt="white tea"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          <div className={styles.teasr}>

            <div>
              <Image
                src='/img/BlackTea.webp'
                alt="black tea"
                width={500}
                height={300}
                priority
              />
            </div>            
  
            <div>
              <p><span>Type:</span> Black</p>
              <p><span>Properties:</span> Boosts heart health and lowers cholesterol</p>
              <p><span>Origin:</span> China</p>
              <p><span>Brew Time:</span> 3 minutes</p>
              <p><span>Temperature:</span> 85°C</p>
            </div>
          </div>

          <div className={styles.teasl}>
            <div>
              <p><span>Type:</span> Oloong</p>
              <p><span>Properties:</span> Lowers risk of cancer and prevents diabetes</p>
              <p><span>Origin:</span> China</p>
              <p><span>Brew Time:</span> 2 minutes</p>
              <p><span>Temperature:</span> 80°C</p>
            </div>
            
            <div>
              <Image
                src='/img/OolongTea.webp'
                alt="oolong tea"
                width={500}
                height={300}
                priority
              />
            </div>
          </div>

          <div className={styles.teasr}>

            <div>
              <Image
                src='/img/RedTea.webp'
                alt="red tea"
                width={500}
                height={300}
                priority
              />
            </div>            
  
            <div>
              <p><span>Type:</span> Red</p>
              <p><span>Properties:</span> Lowers blood pressure and boosts liver health</p>
              <p><span>Origin:</span> Africa</p>
              <p><span>Brew Time:</span> 3 minutes</p>
              <p><span>Temperature:</span> 93°C</p>
            </div>
          </div>

        </div>
        <Footer />
      </main>
    </Layout>
  )
}

export default Teas