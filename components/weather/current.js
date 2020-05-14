const Current = ({ current }) => {
  console.log(current)
  return (
    <div>
      <div>
        <p>Temp: <span>{Math.floor(current.temp)}&deg;</span></p>
        <small>Feels like: <span>{Math.floor(current.feels_like)}&deg;</span></small>
      </div>
      <div>
        <p>Weather: {`${current.weather[0].description.charAt(0).toUpperCase() + current.weather[0].description.slice(1).toLowerCase()}`}</p>
      </div>
    </div>
  )
}

export default Current;