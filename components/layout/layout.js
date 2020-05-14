import Head from 'next/head';
import layoutStyles from './layout.module.scss'

import Header from './header';
import Search from './search';
import Footer from './footer';

export const author = 'Dave Regg';
export const siteTitle = 'Next.js Weather App';

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className={layoutStyles.main}>
        <Header />
        <Search />
        <div className={layoutStyles.content}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;