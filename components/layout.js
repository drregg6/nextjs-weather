import Head from 'next/head';

import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout;