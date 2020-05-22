export function roundToHour(date) {
  let p = 60 * 60 * 1000;
  return new Date(Math.round(date.getTime() / p ) * p);
}