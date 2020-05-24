import Moment from 'react-moment';
import { roundToHour } from '../../utils/dateHelper';
import Router from 'next/router';
import { getIcon, changeUnit } from '../../utils/weatherHelper';

import hourlyStyles from './hourly.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const Hourly = ({
  link,
  hourly,
  datetime,
  isFahrenheit,
  isCelsius
}) => {
  // Router
  const handleClick = () => {
    Router.push({
      pathname: `/city/hourly`,
      query: {
        city: `${link}`
      }
    })
  }
  const time = new Date(datetime);

  console.log(hourly);
  return (
    <div className={hourlyStyles.container}>
      <h1 className={`${utilStyles.doubleSize} ${utilStyles.mb1}`}>Six hour forecast</h1>
      <div className={hourlyStyles.forecast}>
        {
          hourly.slice(0,5).map((hour, idx) => {
            const icon = hour.weather[0].icon;
            const desc = hour.weather[0].description;
            let temp = Math.floor(hour.temp);
            if (isFahrenheit) {
              temp = changeUnit(temp, 'f');
            } else if (isCelsius) {
              temp = changeUnit(temp, 'c');
            } else {
              temp = changeUnit(temp, 'k');
            }
            return (
              <div key={idx} className={`${hourlyStyles.hour} ${utilStyles.ptb1}`}>
                <h2 className={utilStyles.aLittleLarger}><Moment add={{ hours: `${idx}` }} format="H:mm">{roundToHour(time)}</Moment></h2>
                <img src={getIcon(icon)} alt={desc} />
                <p className={`${utilStyles.aLittleLarger}`}>{temp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
              </div>
            )
          })
        }
        <div className={`${utilStyles.ptb3} ${utilStyles.aLittleLarger} ${hourlyStyles.link}`}>
          <span className={`${hourlyStyles.linkText} ${utilStyles.pointer}`} onClick={handleClick}>See further into the day...</span>
        </div>
      </div>
    </div>
  )
}

export default Hourly;