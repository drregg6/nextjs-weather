import Layout from '../components/layout';

const handleSubmit = ev => {
  console.log()
  ev.preventDefault();
}

const Homepage = () => (
  <Layout>
    <h1>Hello world!</h1>
    <p>Search for your location in the search bar</p>
    <p>Or click common cities above.</p>
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input type="text" />
      <input type="submit" value="Search" />
    </form>
  </Layout>
)

export default Homepage;