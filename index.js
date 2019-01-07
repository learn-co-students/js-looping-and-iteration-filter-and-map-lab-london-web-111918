// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) { return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name})
}

function exactMatch(drivers, attrObject) {
  let key = Object.keys(attrObject)
  let value = Object.values(attrObject)
  return drivers.filter(function (driver) { return driver[key[0]] === value[0]})
}

function exactMatchToList(drivers, attrObject) {
  return exactMatch(drivers, attrObject).map(function (driver) { return driver.name })
}
