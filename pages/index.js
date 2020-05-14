/*

Instead of having a form with submit
Make it an input + Link disguised as a button

*/

import Link from 'next/link';
import { useState } from 'react';

import Layout from '../components/layout';

const Homepage = () => {
  const [input, setInput] = useState('')

  const handleChange = ev => {
    setInput(
      ev.target.value
    )
  }
  const handleSubmit = ev => {
    ev.preventDefault();

    // fetch city and turn into lat-long
    console.log(input)

    // push to weather page with weather api data

    setInput('');
  }
  
  return (
    <Layout>
      <h1>Hello world!</h1>
      <p>Search for your location in the search bar</p>
      <p>Or click common cities above.</p>
      <input type="text" placeholder="City" value={input} onChange={(ev) => handleChange(ev)} />
      <Link href={`/city/weather?city=${input}`}><a>Search</a></Link>
    </Layout>
  )
}
export default Homepage;