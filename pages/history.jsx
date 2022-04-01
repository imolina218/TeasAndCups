import Link from "next/link"
import Layout from '../components/Layout'
import styles from "../styles/History.module.css"

const History = () => {
  return (
    <Layout
      page="History"
    >
      <main className={`container ${styles.content}`}>
        <div className={styles.teaandcups}>
          <div className={styles.heading}>
            <h2>Short History of the Tea</h2>
          </div>
          
          <p>
            It is impossible to know whether there is any truth in this story. 
            But tea drinking certainly became established in China many 
            centuries before it had even been heard of in the west.
            <br /><br /> Containers for tea have been found in tombs dating from the Han dynasty 
            (206 BC - 220 AD) but it was under the Tang dynasty (618-906 AD), 
            that tea became firmly established as the national drink of China. 
            It became such a favourite that during the late eighth century a 
            writer called Lu Yu wrote the first book entirely about tea, the 
            Ch'a Ching, or Tea Classic. It was shortly after this that tea was 
            first introduced to Japan, by Japanese Buddhist monks who had 
            travelled to China to study. 
            <br /><br />Tea drinking has become a vital part 
            of Japanese culture, as seen in the development of the Tea Ceremony, 
            which may be rooted in the rituals described in the Ch'a Ching.
          </p>
          <br />
          <p>
            Today the tea auction declined, but an essential element of modern 
            tea-drinking took off - the tea bag. Tea bags were invented in 
            America in the early twentieth century, but sales only really 
            took off in Britain in the 1970s. Nowadays it would be hard for 
            many tea-drinkers to imagine life without them. 
            <br /><br />Such is the British 
            enthusiasm for tea that even after the dismantling of the Empire, 
            British companies continue to play a leading role in the world's 
            tea trade and British brands dominate the world market. With recent 
            scientific research indicating that tea drinking may have direct 
            health benefits, it is assured that for centuries to come there 
            will be a place at the centre of the people life for a nice cup of tea.
          </p>

          <Link href="/teas">Types of Teas</Link>
        </div>
        
        <div className={styles.split}>
          <div className={styles.linel}></div>
          <div className={styles.liner}></div>
        </div>

        <div className={styles.teaandcups}>
          <div className={styles.heading}>
            <h2>Short History of the Cup</h2>
          </div>
          
          <p>
            The history of saucers is recent as compared to its counterpart, as 
            it appeared in the year 1700. At first, it was the custom to drink 
            the tea from the tea bowl. Later, a small amount of tea was poured 
            into the saucer to promote rapid cooling. With time, the size of 
            saucers has changed significantly, now functioning more like a 
            platform to hold the cup in its center. Though in several parts 
            of the world, a considerable number of people still practice this 
            custom from time to time, presumably as a tradition.
          </p>
          <br />
          <p>
            Tea cups were first exported by the East India Trading Company from 
            China during the time of George IV of United Kingdom. This way, cups 
            made of porcelain and clay began to manufacture in both, China and 
            India. 
            <br /><br /> In the year 1750, a man named Robert Adams influenced the 
            addition of handles to the cups. He motivated this new design because 
            the traditional ones could sometimes be very clumsy.
          </p>
          <br />
          <p>
            With time, the materials used to make these tea sets evolved a lot. 
            You can find cups and saucers made up of bone china, glass, 
            ceramic, stainless steel and plastic.
          </p>

          <Link href="/cups">Types of Cups</Link>
        </div>
        
      </main>

    </Layout>
  )
}

export default History