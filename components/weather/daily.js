import Moment from 'react-moment';
import dailyStyles from './daily.module.scss';
import Router from 'next/router';

import { getIcon, changeUnit } from '../../utils/weatherHelper';

const Daily = ({
  link,
  daily,
  datetime,
  isFahrenheit,
  isCelsius
}) => {
  // Router
  const handleClick = () => {
    Router.push({
      pathname: `/city/daily`,
      query: {
        city: `${link}`
      }
    })
  }
  return (
    <div className={dailyStyles.container}>
      <h1 className={dailyStyles.subtitle}>Future Cast</h1>
      <div className={dailyStyles.forecast}>
        {
          daily.map((day, idx) => {
            const desc = day.weather[0].description;
            const icon = day.weather[0].icon;
            
            let highTemp = Math.floor(day.temp.max);
            let lowTemp = Math.floor(day.temp.min);
            if (isFahrenheit) {
              highTemp = changeUnit(highTemp, 'f');
              lowTemp = changeUnit(lowTemp, 'f');
            } else if (isCelsius) {
              highTemp = changeUnit(highTemp, 'c');
              lowTemp = changeUnit(lowTemp, 'c');
            } else {
              highTemp = changeUnit(highTemp, 'k');
              lowTemp = changeUnit(lowTemp, 'k');
            }

            return (
              <div key={idx} className={dailyStyles.day}>
                <h2 className={dailyStyles.dayname}><Moment add={{ days: `${idx}` }} format="dddd">{datetime}</Moment></h2>
                <img src={getIcon(icon)} alt={desc} />
                <div>
                  <p>High: {highTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
                  <p>Low: {lowTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
                </div>
              </div>
            )
          })
        }
        <div className={dailyStyles.link}>
          <span className={dailyStyles.linktext} onClick={handleClick}>See further into the future...</span>
        </div>
      </div>
    </div>
  )
}

export default Daily;