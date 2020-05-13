const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  env: {
    WEATHER_API: '780062c871d1cd69decae7b5869ddeba'
  }
}