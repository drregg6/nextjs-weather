import Moment from 'react-moment';

import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

const Hourly = ({ hourly }) => {
  console.log(hourly)
  return (
    <div>
      {
        hourly.map((hour, idx) => {
          const datetime = new Date(hour.dt);
          return (
            <div key={idx}>
              <div>
                <img src={getIcon(hour.weather[0].icon)} alt={hour.weather[0].description} />
              </div>
              <div>
                <p>Temp: {Math.floor(hour.temp)}&deg;</p>
                <small>Feels like: {Math.floor(hour.feels_like)}&deg;</small>
              </div>
              <div>
                <p>Weather: {`${capitalize(hour.weather[0].description)}`}</p>
              </div>
              <small>{hour.dt}</small>
            </div>
          )
        })
      }
    </div>
  )
}

export default Hourly;