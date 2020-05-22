export function getIcon(img) {
  return `http://openweathermap.org/img/wn/${img}@2x.png`;
}

export function changeUnit(temp, unit='f') {
  unit = unit.toLowerCase();

  if (unit === 'f') return temp;
  if (unit === 'c') return Math.floor((temp - 32) / 1.8);
  if (unit === 'k') return Math.floor((temp + 459.67) * 5/9);
}

export function toCelsius(temp) {
  return Math.floor((temp - 32) / 1.8);
}

export function toFahrenheit(temp) {
  return Math.floor((temp * 1.8) + 32);
}