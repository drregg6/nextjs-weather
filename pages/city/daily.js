import { useState } from 'react';
import Link from 'next/link';
import {
  changeUnit,
  toMilesPerHour,
  windDegToDir
} from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';
import dailyStyles from './daily.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import Layout from '../../components/layout/layout';
import Day from '../../components/daily/day';

const Daily = ({ location, daily }) => {
  console.log(daily);
  const [ units, changeUnits ] = useState({
    isFahrenheit: false,
    isCelsius: true,
    isKelvin: false
  });
  let { isFahrenheit, isCelsius } = units;
  
  const datetime = Date.now();
  const { city, state } = location.components;
  let link;
  if (city !== undefined) {
    link = city.toLowerCase();
  } else {
    link = state.toLowerCase();
  }

  const handleFahrenheit = () => {
    changeUnits({
      isFahrenheit: true,
      isCelsius: false,
      isKelvin: false
    });
  }
  const handleCelsius = () => {
    changeUnits({
      isFahrenheit: false,
      isCelsius: true,
      isKelvin: false
    });
  }
  const handleKelvin = () => {
    changeUnits({
      isFahrenheit: false,
      isCelsius: false,
      isKelvin: true
    })
  }

  return (
    <Layout>
      <div className={`${dailyStyles.top} ${utilStyles.aLittleLarger}`}>
        <Link href={`/city/weather?city=${link}`}><a className={dailyStyles.back}>&#8592; Go back</a></Link>
        <p><span onClick={handleCelsius} className={utilStyles.pointer}>&deg;C</span> | <span onClick={handleFahrenheit} className={utilStyles.pointer}>&deg;F</span> | <span onClick={handleKelvin} className={utilStyles.pointer}>&deg;K</span></p>
      </div>
      <h1 className={utilStyles.title}>{ capitalize(link) }</h1>
      <div className={`${dailyStyles.container} ${utilStyles.mt5}`}>
        {
          daily.map((day, idx) => {
            const desc = day.weather[0].description;
            const icon = day.weather[0].icon;
            const humidity = day.humidity;
            const windDeg = windDegToDir(day.wind_deg);

            let windSpd = Math.floor(day.wind_speed);
            let highTemp = Math.floor(day.temp.max);
            let lowTemp = Math.floor(day.temp.min);
            let feelsLike = Math.floor(day.feels_like.day);
            if (isFahrenheit) {
              highTemp = changeUnit(highTemp, 'f');
              lowTemp = changeUnit(lowTemp, 'f');
              feelsLike = changeUnit(feelsLike, 'f');
              windSpd = toMilesPerHour(windSpd);
            } else if (isCelsius) {
              highTemp = changeUnit(highTemp, 'c');
              lowTemp = changeUnit(lowTemp, 'c');
              feelsLike = changeUnit(feelsLike, 'c');
              windSpd = Math.floor(day.wind_speed);
            } else {
              highTemp = changeUnit(highTemp, 'k');
              lowTemp = changeUnit(lowTemp, 'k');
              feelsLike = changeUnit(feelsLike, 'k');
              windSpd = Math.floor(day.wind_speed);
            }
            return (
              <Day
                datetime={datetime}
                key={idx}
                idx={idx}
                humidity={humidity}
                highTemp={highTemp}
                lowTemp={lowTemp}
                feelsLike={feelsLike}
                isFahrenheit={isFahrenheit}
                isCelsius={isCelsius}
                desc={desc}
                icon={icon}
                humidity={humidity}
                windDeg={windDeg}
                windSpd={windSpd}
              />
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
  const weather_res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${process.env.WEATHER_API}&units=metric`);
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