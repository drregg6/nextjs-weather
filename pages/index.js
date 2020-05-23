/*

TODO
= Adjust CSS so it isn't redundant
    - Color scheme
= Submit button should work when enter is clicked
= Break up functions

*/
import Layout from '../components/layout/layout';
import utilStyles from '../styles/utils.module.scss';
import { capitalize } from '../utils/stringHelper';

const Homepage = ({ name, weather }) => {
  const temp = Math.floor(weather.current.temp);
  const desc = capitalize(weather.current.weather[0].description);
  return (
    <Layout>
      <h1 className={`${utilStyles.title} ${utilStyles.mb1}`}>{name}</h1>
      <h2 className={`${utilStyles.subtitle} ${utilStyles.mb5}`}>
        {temp} &deg;C with {desc}
      </h2>
      <p className={`${utilStyles.doubleSize} ${utilStyles.primaryText} ${utilStyles.mt3}`}>
        Want a different city?
      </p>
      <p className={`${utilStyles.doubleSize} ${utilStyles.primaryText}`}>
        More information?
      </p>
      <p className={`${utilStyles.doubleSize} ${utilStyles.primaryText}`}>
        See further into the day or week?
      </p>
      <p className={`${utilStyles.doubleSize}`}>
        Search for new cities above!
      </p>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const cities = [
    {
      name: 'Boulder, CO, USA',
      lat: 40.014984,
      lng: -105.270546
    },
    {
      name: 'Windsor, Canada',
      lat: 42.317432,
      lng: -83.026772
    },
    {
      name: 'Yosemite, CA, USA',
      lat: 37.865101,
      lng: -119.538330
    },
    {
      name: 'Moscow, Russia',
      lat: 55.766174,
      lng: 37.610561
    },
    {
      name: 'Mexico City, Mexico',
      lat: 19.432526,
      lng: -99.194954
    },
    {
      name: 'Paris, France',
      lat: 48.855701,
      lng: 2.317000
    },
    {
      name: 'Vienna, Austria',
      lat: 48.108334,
      lng: 16.316944
    },
    {
      name: 'Chicago, IL, USA',
      lat: 41.913399,
      lng: -87.648201
    },
    {
      name: 'Sao Paulo, Brazil',
      lat: -23.566221,
      lng: -46.667358
    },
    {
      name: 'Cape Town, South Africa',
      lat: -33.927551,
      lng: 18.457073
    }
  ];
  const city = cities[Math.floor(Math.random() * cities.length)];
  // search for weather data with lat and long data
  const weather_res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lng}&appid=${process.env.WEATHER_API}&units=metric`);
  const weather_data = await weather_res.json();

  console.log(weather_data);
  // return to props
  return {
    props: {
      name: city.name,
      weather: weather_data
    }
  }
}

export default Homepage;