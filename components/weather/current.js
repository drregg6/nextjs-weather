import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

import currentStyles from './current.module.scss';

const Current = ({ current }) => {
  console.log(current)
  return (
    <div className={currentStyles.container}>
      <div>
        <img src={getIcon(current.weather[0].icon)} alt={current.weather[0].description} />
      </div>
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