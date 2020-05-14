/*

TODO
= fallback to index when error
= create components for flash, hourly, and daily
= create components to isolate and provide more information(?)

*/
import weatherStyles from './weather.module.scss';
import Layout from '../../components/layout/layout';
import Current from '../../components/weather/current';
import Hourly from '../../components/weather/hourly';
import Daily from '../../components/weather/daily';

// Will return weather from the search query
const Weather = ({ weather, location }) => {
  const datetime = Date.now();
  const { city, state, country_code } = location.components;
  const { current } = weather;
  const daily = weather.daily.slice(0,3)
  const hourly = weather.hourly.slice(0,12);
  return (
    <Layout>
      <div>
        <div className={weatherStyles.current}>
          <h1 className={weatherStyles.title}>{`${city ? city : state}, ${country_code.toUpperCase()}`}</h1>
          <Current current={current} datetime={datetime} />
        </div>
        <Daily daily={daily} datetime={datetime} />
        <Hourly hourly={hourly} datetime={datetime} />
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