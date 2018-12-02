const s = require('systeminformation')

module.exports = async () => {
  const [ a, b, c, d, e ] = await Promise.all([ s.cpu(), s.cpuFlags(), s.cpuCache(), s.cpuCurrentspeed(), s.cpuTemperature() ])
  return Object.assign({}, a, b, c, d, e)
}
