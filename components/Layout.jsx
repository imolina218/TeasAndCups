import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, page}) => {
  return (
    <div>
        <Head>
          <title>Teas&Cups - {page}</title>
          <meta name="description" content="Blog Website of Teas and Cups"/>
        </Head>
        
        <Header />

        {children}

        <Footer />
    </div>
  )
}

export default Layout