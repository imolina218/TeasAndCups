import Head from "next/head"
import Header from "./Header"

const Layout = ({children, page}) => {
    const pageTitle = `Teas&Cups - ${page}`
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Blog Website of Teas and Cups"/>
            </Head>
            
            <Header />

            {children}
        </div>
    )
}

export default Layout