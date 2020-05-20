import Link from 'next/link';
import Moment from 'react-moment';
import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';
import hourlyStyles from './hourly.module.scss';

import Layout from '../../components/layout/layout';

const Hourly = ({ location, hourly }) => {
  console.log(hourly)
  const datetime = Date.now();
  const { city, state } = location.components;
  let link;
  if (city !== undefined) {
    link = city.toLowerCase();
  } else {
    link = state.toLowerCase();
  }
  return (
    <Layout>
      <div className={dailyStyles.top}>
        <Link href={`/city/weather?city=${city}`}><a className={dailyStyles.back}>&#8592; Go back</a></Link>
        <p><span>C</span> | <span>F</span></p>
      </div>
      <h1 className={hourlyStyles.title}>{ link.toUpperCase() }</h1>
      <div className={hourlyStyles.container}>
        {
          hourly.map((hour, idx) => {
            return (
              <div key={idx}>
                <h2><Moment add={{ hours: `${idx+1}` }} format="H:mm">{datetime}</Moment></h2>
                <img src={getIcon(hour.weather[0].icon)} alt={hour.weather[0].description} />
                <small>{hour.weather[0].description}</small>
                <p>Temp: {Math.floor(hour.temp)}&deg;</p>
              </div>
            )
          })
        }
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
      hourly: weather_data.hourly
    }
  }
}

export default Hourly;