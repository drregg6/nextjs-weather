import Moment from 'react-moment';
import { getIcon, changeUnit } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

import currentStyles from './current.module.scss';

const Current = ({
  current,
  datetime,
  isFahrenheit,
  isCelsius
}) => {
  const icon = current.weather[0].icon;
  const desc = current.weather[0].description;

  let temp = Math.floor(current.temp);
  let feelsLike = Math.floor(current.feels_like);
  if (isFahrenheit) {
    temp = changeUnit(temp, 'f');
    feelsLike = changeUnit(feelsLike, 'f');
  } else if (isCelsius) {
    temp = changeUnit(temp, 'c');
    feelsLike = changeUnit(feelsLike, 'c');
  } else {
    temp = changeUnit(temp, 'k');
    feelsLike = changeUnit(feelsLike, 'k');
  }
  console.log(current);
  return (
    <div className={currentStyles.container}>
      <p><Moment format="DD MMMM, YYYY">{datetime}</Moment></p>
      <img src={getIcon(icon)} alt={desc} />
      <div className={currentStyles.temp}>
        <p>{temp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</p>
        <small>Feels like: <span>{feelsLike} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}</span></small>
      </div>
      <div className={currentStyles.desc}>
        <p>{`${capitalize(desc)}`}</p>
      </div>
    </div>
  )
}

export default Current;