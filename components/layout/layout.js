import Head from 'next/head';
import layoutStyles from './layout.module.scss'

import Header from './header';
import Footer from './footer';

export const author = 'Dave Regg';
export const siteTitle = 'Next.js Weather App';

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;