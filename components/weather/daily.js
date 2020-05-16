import Moment from 'react-moment';
import dailyStyles from './daily.module.scss';
import Link from 'next/link';

import { getIcon } from '../../utils/weatherHelper';
import { capitalize } from '../../utils/stringHelper';

const Daily = ({ daily, datetime }) => {
  console.log(daily)
  return (
    <div className={dailyStyles.container}>
      <h1 className={dailyStyles.subtitle}>Future Cast</h1>
      <div className={dailyStyles.forecast}>
        {
          daily.slice(1,3).map((day, idx) => {
            return (
              <div key={idx} className={dailyStyles.day}>
                <h2 className={dailyStyles.dayname}><Moment add={{ days: `${idx + 1}` }} format="dddd">{datetime}</Moment></h2>
                <img src={getIcon(day.weather[0].icon)} alt={day.weather[0].description} />
                <div>
                  <p>High: {Math.floor(day.temp.max)}&deg;</p>
                  <p>Low: {Math.floor(day.temp.min)}&deg;</p>
                </div>
              </div>
            )
          })
        }
        <div className={dailyStyles.link}>
          <Link href="#"><a>See further into the future...</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Daily;