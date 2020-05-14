

import Layout from '../../components/layout';

// Will return weather from the search query
const Weather = (props) => {
  return (
    <Layout>
      <div>

      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  console.log(ctx);
  const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=39.95&lon=-75.16&appid=${process.env.WEATHER_API}&units=imperial`);
  const data = await res.json();
  return {
    props: {
      results: data.results
    }
  }
}

export default Weather;