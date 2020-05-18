import Link from 'next/link';
import Moment from 'react-moment';
import { getIcon } from '../../utils/weatherHelper';
import dailyStyles from './daily.module.scss';

import Layout from '../../components/layout/layout';

const Daily = ({ location, daily }) => {
  console.log(daily)
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
      <Link href={`/city/weather?city=${city}`}><a className={dailyStyles.back}>&#8592; Go back</a></Link>
      <h1 className={dailyStyles.title}>{ link.toUpperCase() }</h1>
      <div className={dailyStyles.container}>
        {
          daily.map((day, idx) => {
            return (
              <div>
                <div>
                  <small><Moment add={{ days: `${idx+1}` }} format="dddd">{datetime}</Moment></small>
                  <h2><Moment add={{ days: `${idx+1}` }} format="DD MMM">{datetime}</Moment></h2>
                </div>
                <div>
                  <img src={getIcon(day.weather[0].icon)} alt={day.weather[0].description} />
                  <div>
                    <p>High: {Math.floor(day.temp.max)}&deg;</p>
                    <p>Low: {Math.floor(day.temp.min)}&deg;</p>
                    <small>Feels like: {Math.floor(day.feels_like.day)}</small>
                  </div>
                </div>
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