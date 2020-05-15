/*

TODO
= Weekly and Daily components
    - More information on separate pages
= Hover on Current component
    - More information
= Button to toggle F and C
= Adjust Daily component so it isn't redundant
= Adjust CSS so it isn't redundant
    - Universal classes

*/

import Layout from '../components/layout/layout';

const Homepage = () => {
  return (
    <Layout>
      <h1>Get some weather</h1>
      <p>Search for your location in the search bar</p>
      <p>Or click common cities above.</p>
    </Layout>
  )
}
export default Homepage;