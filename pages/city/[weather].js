/*

TODO
= fallback to index when error
= create components for flash, hourly, and daily
= create components to isolate and provide more information(?)

*/

import Layout from '../../components/layout/layout';

// Will return weather from the search query
const Weather = ({ weather, location }) => {
  console.log(location)
  const { city, state, country_code } = location.components;
  const { current, daily, hourly } = weather;
  console.log(weather)
  return (
    <Layout>
      <div>
        <h1>{`${city ? city : state}, ${country_code.toUpperCase()}`}</h1>
      </div>
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
      location: loc_data.results[0],
      weather: weather_data
    }
  }
}

export default Weather;