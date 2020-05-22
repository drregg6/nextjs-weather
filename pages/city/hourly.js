import { useState } from 'react';
import Link from 'next/link';
import hourlyStyles from './hourly.module.scss';
import {
  changeUnit,
  windDegToDir,
  toMilesPerHour
} from '../../utils/weatherHelper';

import Layout from '../../components/layout/layout';
import Hour from '../../components/hourly/hour';

const Hourly = ({ location, hourly }) => {
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
      <div className={hourlyStyles.top}>
        <Link href={`/city/weather?city=${link}`}><a className={hourlyStyles.back}>&#8592; Go back</a></Link>
        <p><span onClick={handleCelsius}>&deg;C</span> | <span onClick={handleFahrenheit}>&deg;F</span> | <span onClick={handleKelvin}>&deg;K</span></p>
      </div>
      <h1 className={hourlyStyles.title}>{ link.toUpperCase() }</h1>
      <table className={hourlyStyles.container}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Image</th>
            <th>Description</th>
            <th>Temperature</th>
            <th>Feels Like</th>
            <th>Wind</th>
          </tr>
        </thead>
        <tbody>
        {
          hourly.slice(0,12).map((hour, idx) => {
            const icon = hour.weather[0].icon;
            const desc = hour.weather[0].description;
            const windDeg = windDegToDir(hour.wind_deg)

            let windSpd = hour.wind_speed;
            let temp = Math.floor(hour.temp);
            let feelsLike = Math.floor(hour.feels_like);
            if (isFahrenheit) {
              temp = changeUnit(temp, 'f');
              feelsLike = changeUnit(feelsLike, 'f');
              windSpd = toMilesPerHour(windSpd);
            } else if (isCelsius) {
              temp = changeUnit(temp, 'c');
              feelsLike = changeUnit(feelsLike, 'c');
              windSpd = Math.floor(hour.wind_speed);
            } else {
              temp = changeUnit(temp, 'k');
              feelsLike = changeUnit(feelsLike, 'k');
              windSpd = Math.floor(hour.wind_speed);
            }
            return (
              <Hour
                datetime={datetime}
                key={idx}
                icon={icon}
                temp={temp}
                feelsLike={feelsLike}
                isFahrenheit={isFahrenheit}
                isCelsius={isCelsius}
                idx={idx}
                desc={desc}
                windDeg={windDeg}
                windSpd={windSpd}
              />
            )
          })
        }
        </tbody>
      </table>
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
      hourly: weather_data.hourly
    }
  }
}

export default Hourly;