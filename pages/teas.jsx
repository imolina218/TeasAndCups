import Layout from '../components/Layout'
import styles from "../styles/Teas.module.css"

const Teas = () => {
  return (
    <Layout
      page="Teas"
    >
      <main className={`container ${styles.content}`}>
        <div className={styles.heading}>
          <div className={styles.linel}></div>
            <h2>Types of Teas by Colour</h2>
          <div className={styles.liner}></div>
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
              <img src="/img/GreenTea.png" alt="Tea herbs image" />
            </div>
          </div>
          
          <div className={styles.teasr}>

            <div>
              <img src="/img/Yellowtea.png" alt="Tea herbs image" />
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
              <img src="/img/WhiteTea.png" alt="Tea herbs image" />
            </div>
          </div>

          <div className={styles.teasr}>

            <div>
              <img src="/img/Blacktea.png" alt="Tea herbs image" />
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
              <img src="/img/OolongTea.png" alt="Tea herbs image" />
            </div>
          </div>

          <div className={styles.teasr}>

            <div>
              <img src="/img/RedTea.png" alt="Tea herbs image" />
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

      </main>
    </Layout>
  )
}

export default Teas