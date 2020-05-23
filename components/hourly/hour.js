import Moment from 'react-moment';
import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';
import { roundToHour } from '../../utils/dateHelper';

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
  const time = new Date(datetime);
  return (
    <tr>
      <td>
        <p><Moment add={{ hours: `${idx}` }} format="H:mm">{roundToHour(time)}</Moment></p>
      </td>
      <td className={hourStyles.image}>
        <img src={getIcon(icon)} alt={desc} />
      </td>
      <td>{capitalize(desc)}</td>
      <td>
        {temp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}
      </td>
      <td>
        {feelsLike} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}
      </td>
      <td>
        {windSpd} {windDeg} {isFahrenheit ? 'miles/hr' : 'meter/sec'}
      </td>
    </tr>
  )
}

export default Hour;