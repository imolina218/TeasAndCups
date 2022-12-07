import Image from "next/image"
import Layout from '../components/Layout'
import Footer from "../components/Footer"
import styles from "../styles/Cups.module.css"

const Cups = () => {
  return (
    <Layout
      page="Cups"
    >
      <main className={styles.content}>
        <div className={styles.title}>
          <h1>Types of Cups</h1>
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

        <div className={styles.cups}>
          <div className={styles.cupsl}>
            <div>
              <h3>Ceramic</h3>
              <p>
                Ceramic is a material that is mechanically strong and can be 
                given the desired shape easily. It have a long life as 
                compared to mugs made of glass.
              </p>
              <p>
                Ceramic includes stoneware, porcelain and terracotta. They are 
                a popular choice both in-terms of aesthetics, usage and has 
                resistance to higher temperatures, and eliminates any metal 
                or other material tastes seeping into your tea. 
              </p>
            </div>
            
            <div className={styles.ceramic}>
              <Image
                src='/img/CeramicCup.webp'
                alt="ceramic cup"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
          
          <div className={styles.cupsr}>

            <div>
              <Image
                src='/img/GlassCup.webp'
                alt="glass cup"
                width={600}
                height={400}
                priority
              />
            </div>            
  
            <div>
              <h3>Glass</h3>
              <p>
                Glass pitchers are used for brewing tea as well. Vitrified glass 
                does not react with the tea at all, but it can lose heat quickly 
                depending on its thickness. Borosilicate glass is a good choice, 
                almost as good as porcelain and less fragile. 
              </p>
              <p>
                Double walled glass  
                cups are an inspired choice where the inner wall retains the heat 
                while the outer one makes it easier to hold. What”s more, there is 
                something to how the tea looks through the two layers of glass.
              </p>
            </div>
            
          </div>
          
          <div className={styles.cupsl}>

            <div>
              <h3>Plastic</h3>
              <p>
                Plastic cups, like stoneware and clay cups, are not recommended 
                by tea connoisseurs at all. Use them if you must, but know that 
                not all plastics are chemically inert.
              </p>
              <p>
                So, when you drink hot tea or coffee, heat from the drink is 
                transferred to the plastic cup, accelerating leaching out of 
                additives from the plastic into the hot drinks or food. Some 
                of these additives can be harmful and are responsible for 
                many types of cancer and hormonal disruption.
              </p>
            </div>

            <div className={styles.plastic}>
              <Image
                src='/img/PlasticCup.webp'
                alt="plastic cup"
                width={300}
                height={500}
                priority
              />
            </div>
          </div>
          
          <div className={styles.cupsr}>

            <div>
              <Image
                src='/img/MetalCup.webp'
                alt="glass cup"
                width={450}
                height={400}
                priority
              />
            </div>

            <div>
              <h3>Stainless Steel</h3>
              <p>
                Stainless steel cups are the hardest of the lot, 
                but the material does not always live up to its name. 
                It was found out that scratched stainless steel utensils
                can leach iron and nickel into the food.
              </p>
              <p>
                Plus, there is the issue of stainless steel 
                cups getting too hot for sipping in a short time. 
                Due to its inherent heat conductivity, the metal transfers 
                heat to the lip much faster than, say, a porcelain cup, 
                making it slightly inconvenient to drink from.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </Layout>
  )
}

export default Cups