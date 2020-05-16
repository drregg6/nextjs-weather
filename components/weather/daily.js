import Moment from 'react-moment';
import dailyStyles from './daily.module.scss';
import Router from 'next/router';

import { getIcon } from '../../utils/weatherHelper';

const Daily = ({ link, daily, datetime }) => {
  // Router
  const handleClick = () => {
    Router.push({
      pathname: `/city/daily`,
      query: {
        city: `${link}`
      }
    })
  }
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
          <span className={dailyStyles.linktext} onClick={handleClick}>See further into the future...</span>
        </div>
      </div>
    </div>
  )
}

export default Daily;