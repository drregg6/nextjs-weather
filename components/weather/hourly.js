import Moment from 'react-moment';
import hourlyStyles from './hourly.module.scss';
import Router from 'next/router';

import { getIcon } from '../../utils/weatherHelper';

const Hourly = ({ link, hourly, datetime }) => {
  // Router
  const handleClick = () => {
    Router.push({
      pathname: `/city/hourly`,
      query: {
        city: `${link}`
      }
    })
  }

  console.log(hourly);
  return (
    <div className={hourlyStyles.container}>
      <h1 className={hourlyStyles.subtitle}>Six hour forecast</h1>
      <div className={hourlyStyles.forecast}>
        {
          hourly.slice(0,6).map((hour, idx) => {
            return (
              <div key={idx} className={hourlyStyles.hour}>
                <h2 className={hourlyStyles.time}><Moment add={{ hours: `${idx}` }} format="H:mm">{datetime}</Moment></h2>
                <div className={hourlyStyles.details}>
                  <img src={getIcon(hour.weather[0].icon)} alt={hour.weather[0].description} />
                  <p>Temp: {Math.floor(hour.temp)}&deg;</p>
                </div>
              </div>
            )
          })
        }
        <div className={hourlyStyles.link}>
          <span className={hourlyStyles.linktext} onClick={handleClick}>See further into the day...</span>
        </div>
      </div>
    </div>
  )
}

export default Hourly;