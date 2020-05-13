import axios from 'axios';

import Layout from '../components/layout';

const Philly = ({ weather }) => {
  console.log(weather);
  return (
    <Layout>
      <h1>Philadelphia Weather</h1>
      <div>
        
      </div>
    </Layout>
  )
}

Philly.getInitialProps = async (context) => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=39.95&lon=-75.16&appid=${process.env.WEATHER_API}&units=imperial`);
  console.log(res)
  return {
    weather: res.data
  }
}

export default Philly;