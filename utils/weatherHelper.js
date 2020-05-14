export function getIcon(img) {
  return `http://openweathermap.org/img/wn/${img}@2x.png`;
}

export function toCelsius(temp) {
  return Math.floor((temp - 32) / 1.8);
}

export function toFahrenheit(temp) {
  return Math.floor((temp * 1.8) + 32);
}