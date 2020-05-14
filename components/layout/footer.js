import footerStyles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.left}>
        <p>
          Copyright <a href="http://www.daveregg.com" rel="noopener noreferrer" target="_blank">Dave Regg</a>
        </p>
      </div>
      <div className={footerStyles.right}>
        <p>
          Weather data <a href="https://www.openweathermap.com" rel="noopener noreferrer" target="_blank">Open Weather Map</a>
        </p>
        <p>
          Location data <a href="https://www.opencagedata.com" target="_blank" rel="noopener noreferrer">Open Cage Data</a>
        </p>
      </div>
    </footer>
  )
}