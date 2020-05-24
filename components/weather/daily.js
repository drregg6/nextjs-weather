import Moment from 'react-moment';
import Router from 'next/router';
import { getIcon, changeUnit } from '../../utils/weatherHelper';

import dailyStyles from './daily.module.scss';
import utilStyles from '../../styles/utils.module.scss';

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
      <h1 className={`${utilStyles.doubleSize} ${utilStyles.mb1}`}>Future Cast</h1>
      <div>
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
              <div key={idx} className={`${utilStyles.ptb1} ${dailyStyles.day}`}>
                <h2 className={`${utilStyles.aLittleLarger}`}><Moment add={{ days: `${idx}` }} format="ddd">{datetime}</Moment></h2>
                <img src={getIcon(icon)} alt={desc} />
                <div>
                  <p className={`${utilStyles.aLittleLarger}`}>
                    <span className={utilStyles.warm}>{highTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</span> / <span className={utilStyles.cold}>{lowTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</span>
                  </p>
                </div>
              </div>
            )
          })
        }
        <div className={`${utilStyles.ptb3} ${utilStyles.aLittleLarger} ${dailyStyles.link}`}>
          <span className={`${dailyStyles.linkText} ${utilStyles.pointer}`} onClick={handleClick}>See further into the future...</span>
        </div>
      </div>
    </div>
  )
}

export default Daily;