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
  feelsLike,
  windSpd,
  windDeg
}) => {
  return (
    <div className={hourStyles.container}>
      <h2><Moment add={{ hours: `${idx}` }} format="H:mm">{datetime}</Moment></h2>
      <div>
        <img src={getIcon(icon)} alt={desc} />
        <small>{capitalize(desc)}</small>
        <p>Temp: {temp}&deg;</p>
      </div>
    </div>
  )
}

export default Hour;