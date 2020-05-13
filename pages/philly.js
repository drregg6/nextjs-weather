import fetch from 'node-fetch';

import Layout from '../components/layout';

const Philly = ({ weather }) => {
  const { current, daily, hourly } = weather;
  console.log(weather);
  return (
    <Layout>
      <h1>Philadelphia Weather</h1>
      <div>
        <p>Temp: { current.feels_like }</p>
        <p>Weather: { current.weather[0].main }</p>
      </div>
    </Layout>
  )
}

Philly.getInitialProps = async (context) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.95&lon=-75.16&appid=${process.env.WEATHER_API}&units=imperial`);
  const data = await res.json();
  return {
    weather: data
  }
}

export default Philly;