/*

TODO
= break up functions
= color scheme

*/
import { useState } from 'react';
import weatherStyles from './weather.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import Layout from '../../components/layout/layout';
import Current from '../../components/weather/current';
import Hourly from '../../components/weather/hourly';
import Daily from '../../components/weather/daily';

// Will return weather from the search query
const Weather = ({ weather, location }) => {
  const [ units, changeUnits ] = useState({
    isFahrenheit: false,
    isCelsius: true,
    isKelvin: false
  });
  let { isFahrenheit, isCelsius } = units;

  const datetime = Date.now();
  const { city, state, state_code, country_code } = location.components;
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

  const { current } = weather;
  const daily = weather.daily.slice(0,5)
  const hourly = weather.hourly.slice(0,12);
  return (
    <Layout>
      <div className={weatherStyles.container}>
        <div className={utilStyles.mb5}>
          <h1 className={utilStyles.title}>{`${city ? city : state}, ${state_code !== undefined ? state_code + ',' : ''} ${country_code.toUpperCase()}`}</h1>
          <p className={`${utilStyles.doubleSize}`}><span onClick={handleCelsius} className={utilStyles.pointer}>&deg;C</span> | <span onClick={handleFahrenheit}  className={utilStyles.pointer}>&deg;F</span> | <span onClick={handleKelvin}  className={utilStyles.pointer}>&deg;K</span></p>
        </div>
        <div className={weatherStyles.main}>
          <Hourly
            isFahrenheit={isFahrenheit}
            isCelsius={isCelsius}
            link={link}
            hourly={hourly}
            datetime={datetime}
          />
          <Current
            isFahrenheit={isFahrenheit}
            isCelsius={isCelsius}
            current={current}
            datetime={datetime}
          />
          <Daily
            isFahrenheit={isFahrenheit}
            isCelsius={isCelsius}
            link={link}
            daily={daily}
            datetime={datetime}
          />
        </div>
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
      weather: weather_data
    }
  }
}

export default Weather;