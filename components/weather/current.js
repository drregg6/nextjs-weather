import Moment from 'react-moment';

import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

import currentStyles from './current.module.scss';

const Current = ({ current, datetime }) => {
  console.log(current)
  return (
    <div className={currentStyles.container}>
      <p><Moment format="DD MMMM, YYYY">{datetime}</Moment></p>
      <img src={getIcon(current.weather[0].icon)} alt={current.weather[0].description} />
      <div className={currentStyles.temp}>
        <p>{Math.floor(current.temp)}&deg;</p>
        <small>Feels like: <span>{Math.floor(current.feels_like)}&deg;</span></small>
      </div>
      <div className={currentStyles.desc}>
        <p>{`${capitalize(current.weather[0].description)}`}</p>
      </div>
    </div>
  )
}

export default Current;