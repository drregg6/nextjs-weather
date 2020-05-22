export function getIcon(img) {
  return `http://openweathermap.org/img/wn/${img}@2x.png`;
}

export function changeUnit(temp, unit='c') {
  unit = unit.toLowerCase();

  if (unit === 'c') return temp;
  if (unit === 'f') return Math.floor((temp * 1.8) + 32);
  if (unit === 'k') return Math.floor(temp + 273.15);
}