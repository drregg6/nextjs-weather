import Moment from 'react-moment';
import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

import hourStyles from './hour.module.scss';

const Hour = ({
  idx,
  datetime,
  icon,
  desc,
  temp,
  isFahrenheit,
  isCelsius,
  feelsLike,
  windSpd,
  windDeg
}) => {
  return (
    <div className={hourStyles.container}>
      <h2><Moment add={{ hours: `${idx}` }} format="H:mm">{datetime}</Moment></h2>
      <img src={getIcon(icon)} alt={desc} />
      <small>{capitalize(desc)}</small>
      <p>{temp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
      <p>{feelsLike} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
      <p>{windSpd} {windDeg} {isFahrenheit ? 'miles/hr' : 'meter/sec'}</p>
    </div>
  )
}

export default Hour;