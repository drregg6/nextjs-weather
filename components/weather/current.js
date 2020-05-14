import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

const Current = ({ current }) => {
  console.log(current)
  return (
    <div>
      <div>
        <img src={getIcon(current.weather[0].icon)} alt={current.weather[0].description} />
      </div>
      <div>
        <p>Temp: <span>{Math.floor(current.temp)}&deg;</span></p>
        <small>Feels like: <span>{Math.floor(current.feels_like)}&deg;</span></small>
      </div>
      <div>
        <p>Weather: {`${capitalize(current.weather[0].description)}`}</p>
      </div>
    </div>
  )
}

export default Current;