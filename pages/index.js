/*

TODO
= Adjust CSS so it isn't redundant
    - Universal classes
    - Color scheme
    - Sidebar layout
= Submit button should work when enter is clicked
= Break up functions

*/

import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.scss';

const Homepage = () => {
  return (
    <Layout>
      <h1 className={`${utilStyles.title} ${utilStyles.mtb3}`}>Get some weather</h1>
      <p className={`${utilStyles.subtitle}`}>
        Search for your location in the search bar<br />
        Or click common cities above.
      </p>
    </Layout>
  )
}
export default Homepage;