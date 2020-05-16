/*

Use a grid instead of flexbox
In order to generate hourly into two rows

*/

import Moment from 'react-moment';
import hourlyStyles from './hourly.module.scss';
import Link from 'next/link';

import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

const Hourly = ({ hourly, datetime }) => {
  console.log(hourly);
  return (
    <div className={hourlyStyles.container}>
      <h1 className={hourlyStyles.subtitle}>Twelve hour forecast</h1>
      <div className={hourlyStyles.forecast}>
        {
          hourly.slice(0,6).map((hour, idx) => {
            return (
              <div key={idx} className={hourlyStyles.hour}>
                <h2 className={hourlyStyles.time}><Moment add={{ hours: `${idx}` }} format="H:mm">{datetime}</Moment></h2>
                <div className={hourlyStyles.details}>
                  <img src={getIcon(hour.weather[0].icon)} alt={hour.weather[0].description} />
                  <p>Temp: {Math.floor(hour.temp)}&deg;</p>
                </div>
              </div>
            )
          })
        }
        <div className={hourlyStyles.link}>
          <Link href="#"><a>See further into the day...</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Hourly;