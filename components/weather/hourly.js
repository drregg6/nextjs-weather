import Moment from 'react-moment';
import hourlyStyles from './hourly.module.scss';

import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

const Hourly = ({ hourly }) => {
  console.log(hourly)
  const firstSix = hourly.slice(0,6);
  const lastSix = hourly.slice(6);
  return (
    <div className={hourlyStyles.container}>
      <h1>Twelve hour forecast</h1>
      <div className={hourlyStyles.forecast}>
        <div className={hourlyStyles.row}>
        {
          firstSix.map((hour, idx) => {
            const datetime = new Date(hour.dt);
            return (
              <div key={idx} className={hourlyStyles.hour}>
                <img src={getIcon(hour.weather[0].icon)} alt={hour.weather[0].description} />
                <div>
                  <p>Temp: {Math.floor(hour.temp)}&deg;</p>
                  <small>Feels like: {Math.floor(hour.feels_like)}&deg;</small>
                </div>
                <div>
                  <p>{`${capitalize(hour.weather[0].description)}`}</p>
                </div>
                <small>{hour.dt}</small>
              </div>
            )
          })
        }
        </div>
        <div className={hourlyStyles.row}>
        {
          lastSix.map((hour, idx) => {
            const datetime = new Date(hour.dt);
            return (
              <div key={idx} className={hourlyStyles.hour}>
                <img src={getIcon(hour.weather[0].icon)} alt={hour.weather[0].description} />
                <div>
                  <p>Temp: {Math.floor(hour.temp)}&deg;</p>
                  <small>Feels like: {Math.floor(hour.feels_like)}&deg;</small>
                </div>
                <div>
                  <p>{`${capitalize(hour.weather[0].description)}`}</p>
                </div>
                <small>{hour.dt}</small>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Hourly;