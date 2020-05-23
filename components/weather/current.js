import Moment from 'react-moment';
import {
  getIcon,
  changeUnit,
  windDegToDir,
  toMilesPerHour
} from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

import currentStyles from './current.module.scss';
import utilStyles from '../../styles/utils.module.scss';

const Current = ({
  current,
  datetime,
  isFahrenheit,
  isCelsius
}) => {
  const icon = current.weather[0].icon;
  const desc = current.weather[0].description;
  const humidity = current.humidity;
  const windDeg = windDegToDir(current.wind_degree);
  let windSpd = Math.floor(current.wind_speed);

  let temp = Math.floor(current.temp);
  let feelsLike = Math.floor(current.feels_like);
  if (isFahrenheit) {
    temp = changeUnit(temp, 'f');
    feelsLike = changeUnit(feelsLike, 'f');
    windSpd = toMilesPerHour(windSpd);
  } else if (isCelsius) {
    temp = changeUnit(temp, 'c');
    feelsLike = changeUnit(feelsLike, 'c');
    windSpd = Math.floor(current.wind_speed);
  } else {
    temp = changeUnit(temp, 'k');
    feelsLike = changeUnit(feelsLike, 'k');
    windSpd = Math.floor(current.wind_speed);
  }
  console.log(current);
  return (
    <div className={currentStyles.container}>
      <h1 className={`${utilStyles.subtitle} ${utilStyles.mb4}`}>
        <Moment format="DD MMMM YYYY">{datetime}</Moment>
      </h1>
      <img src={getIcon(icon)} alt={desc} />
      <p className={`${utilStyles.italic} ${utilStyles.doubleSize}`}>
        {`${capitalize(desc)}`}
      </p>
      <div className={`${utilStyles.mtb4}`}>
        <p className={`${utilStyles.doubleSize}`}>
          {temp} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}
        </p>
        <p className={`${utilStyles.aLittleLarger}`}>
          <span className={`${utilStyles.strong}`}>Feels like:</span> {feelsLike} &deg;{isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'}
        </p>
      </div>
      <div className={`${currentStyles.moreInfo}`}>
        <p>
          <span className={`${utilStyles.strong}`}>Humidity: </span>{humidity}%
        </p>
        <p>
          <span className={`${utilStyles.strong}`}>Wind: </span>{windSpd} {isFahrenheit ? 'miles/hr' : 'meter/sec'} {windDeg}
        </p>
      </div>
    </div>
  )
}

export default Current;