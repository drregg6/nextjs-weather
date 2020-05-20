/*

Prec %
Wind Dir / Speed
Humidity %

*/

import Link from 'next/link';
import Moment from 'react-moment';
import {
  getIcon,
  toCelsius,
  toFahrenheit
} from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';
import dailyStyles from './daily.module.scss';

import Layout from '../../components/layout/layout';

const Daily = ({ location, daily }) => {
  console.log(daily)
  let isFahrenheit = true;
  let isCelsius = false;
  const datetime = Date.now();
  const { city, state } = location.components;
  let link;
  if (city !== undefined) {
    link = city.toLowerCase();
  } else {
    link = state.toLowerCase();
  }

  const handleFahrenheit = () => {

  }
  const handleCelsius = () => {

  }

  return (
    <Layout>
      <div className={dailyStyles.top}>
        <Link href={`/city/weather?city=${city}`}><a className={dailyStyles.back}>&#8592; Go back</a></Link>
        <p><span>C</span> | <span>F</span></p>
      </div>
      <h1 className={dailyStyles.title}>{ capitalize(link) }</h1>
      <div className={dailyStyles.container}>
        {
          daily.slice(0,5).map((day, idx) => {
            const humidity = day.humidity;
            const highTemp = Math.floor(day.temp.max);
            const lowTemp = Math.floor(day.temp.min);
            const feelsLike = Math.floor(day.feels_like.day);
            return (
              <div key={idx} className={dailyStyles.day}>
                <div className={dailyStyles.dayTitle}>
                  <small><Moment add={{ days: `${idx}` }} format="dddd">{datetime}</Moment></small>
                  <h2><Moment add={{ days: `${idx+1}` }} format="DD MMM">{datetime}</Moment></h2>
                </div>
                <img src={getIcon(day.weather[0].icon)} alt={day.weather[0].description} />
                <small>{ capitalize(day.weather[0].description) }</small>
                <p>{highTemp}&deg;F / {lowTemp}&deg;F</p>
                <small>{feelsLike}&deg;F</small>
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
      daily: weather_data.daily
    }
  }
}

export default Daily;