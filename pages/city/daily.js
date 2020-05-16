import Link from 'next/link';

import Layout from '../../components/layout/layout';

const Daily = ({ location, daily }) => {
  const city = 'Philadelphia';
  return (
    <Layout>
      <h1>Hi from Daily</h1>
      <Link href={`/city/weather?city=${city}`}><a>Go back</a></Link>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const loc_res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=9509e53adb5442c8829342e5c5b15438&q=${ctx.query.city}`);
  const loc_data = await loc_res.json();
  // access lat and long from data
  const { lat, lng } = loc_data.results[0].geometry;
  // search for weather data with lat and long data
  const weather_res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API}&units=imperial`);
  const weather_data = await weather_res.json()

  console.log(weather_data);
  // return to props
  return {
    props: {
      location: loc_data.results[0].components,
      daily: weather_data.daily
    }
  }
}

export default Daily;