// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let result = drivers.map(function (driver) { return driver.toLowerCase() })
  return result;
}

function nameToAttributes(drivers) {
  let splitDiver = drivers.map(function (driver) { return driver.split(" ") })
  let result = splitDiver.map(function (driver) { return Object.assign({}, { firstName: driver[0], lastName: driver[1] }); });
  return result;
}

function attributesToPhrase(drivers) {
  let result = drivers.map(function (driver) { return `${driver.name} is from ${driver.hometown}` })
  return result
}
