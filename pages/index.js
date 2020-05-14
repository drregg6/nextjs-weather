import Link from 'next/link';
import { useState } from 'react';

import homepageStyles from '../styles/homepage.module.scss';
import Layout from '../components/layout/layout';

const Homepage = () => {
  const [input, setInput] = useState('')

  const handleChange = ev => {
    setInput(
      ev.target.value
    )
  }
  
  return (
    <Layout>
      <h1>Get some weather</h1>
      <p className={homepageStyles.testing}>Search for your location in the search bar</p>
      <p>Or click common cities above.</p>
      <input
        type="text"
        placeholder="City"
        value={input}
        className={homepageStyles.input}
        onChange={(ev) => handleChange(ev)}
      />
      <Link href={`/city/weather?city=${input}`}><a className={homepageStyles.search}>Search</a></Link>
    </Layout>
  )
}
export default Homepage;