import Moment from 'react-moment';
import dailyStyles from './daily.module.scss';

import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

const Daily = ({ daily }) => {
  console.log(daily)
  return (
    <div className={dailyStyles.container}>
      <h1>Three Day Forecast</h1>
      <div className={dailyStyles.forecast}>
        {
          daily.map((day, idx) => {
            const datetime = new Date(day.dt);
            return (
              <div key={idx} className={dailyStyles.day}>
                <img src={getIcon(day.weather[0].icon)} alt={day.weather[0].description} />
                <div>
                  <p>High: {Math.floor(day.temp.max)}&deg;</p>
                  <p>Low: {Math.floor(day.temp.min)}&deg;</p>
                  <small>High feels like: {Math.floor(day.feels_like.day)}&deg;</small>
                </div>
                <div>
                  <p>{`${capitalize(day.weather[0].description)}`}</p>
                </div>
                <small>{day.dt}</small>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Daily;