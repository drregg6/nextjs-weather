import Moment from 'react-moment';
import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

import dayStyles from './day.module.scss';

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
  desc
}) => {
  return (
    <div key={idx} className={dayStyles.day}>
      <div className={dayStyles.title}>
        <small><Moment add={{ days: `${idx}` }} format="dddd">{datetime}</Moment></small>
        <h2><Moment add={{ days: `${idx}` }} format="DD MMM">{datetime}</Moment></h2>
      </div>
      <img src={getIcon(icon)} alt={desc} />
      <small>{ capitalize(desc) }</small>
      <p>{highTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'} / {lowTemp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
      <small>{feelsLike} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</small>
      <div className={dayStyles.more}>
        <p>Humidity: {humidity}%</p>
      </div>
    </div>
  )
}

export default Day;