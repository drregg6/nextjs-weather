import Head from 'next/head';
import layoutStyles from './layout.module.scss'

import Header from './header';
import Search from './search';
import Footer from './footer';

export const author = 'Dave Regg';
export const siteTitle = 'Next.js Weather App';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div  className={layoutStyles.container}>
        <div className={layoutStyles.main}>
          <Header />
          <Search />
          <div className={layoutStyles.content}>
            {props.children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;