import Moment from 'react-moment';
import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

import dayStyles from './day.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const Day = ({
  highTemp,
  lowTemp,
  feelsLike,
  isFahrenheit,
  isCelsius,
  idx,
  datetime,
  humidity,
  icon,
  desc,
  windDeg,
  windSpd
}) => {
  console.log(windDeg);
  return (
    <div className={`${dayStyles.day} ${utilStyles.p2}`}>
      <div className={dayStyles.title}>
        <p className={utilStyles.aLittleLarger}><Moment add={{ days: `${idx}` }} format="dddd">{datetime}</Moment></p>
        <h2 className={utilStyles.doubleSize}><Moment add={{ days: `${idx}` }} format="DD MMM">{datetime}</Moment></h2>
      </div>
      <img src={getIcon(icon)} alt={desc} />
      <p className={`${utilStyles.italic}`}>{ capitalize(desc) }</p>
      <div className={`${dayStyles.temps} ${utilStyles.mtb2}`}>
        <p>{highTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'} / {lowTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
        <p>{feelsLike} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
      </div>
      <div className={`${dayStyles.more} ${utilStyles.normSize}`}>
        <p>
          <span className={utilStyles.strong}>Humidity:</span> {humidity}%
        </p>
        <p>
          <span className={utilStyles.strong}>Wind:</span> {windSpd} {isFahrenheit ? 'miles/hr' : 'meter/sec'} {windDeg}
        </p>
      </div>
    </div>
  )
}

export default Day;