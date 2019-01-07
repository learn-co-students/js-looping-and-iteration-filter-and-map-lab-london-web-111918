// Code your solution here:
function driversWithRevenueOver(collection, amount) {
  const newArr = collection.filter(function (driver) {
    return driver.revenue > amount
  }).slice()
  return newArr
}

function driverNamesWithRevenueOver(collection, amount) {
  const newArr = []
  collection.filter(driver => {return driver.revenue > amount})
  .map(driver => newArr.push(driver.name))
  return newArr
}

function exactMatch(collection, obj) {
  const key = Object.keys(obj)[0]
  const newArr = collection.filter(function (driver) {
    return driver[key] === obj[key]
  })
  return newArr
}

function exactMatchToList(collection, obj) {
  const key = Object.keys(obj)[0]
  const newArr = collection.filter(function (driver) {
    return driver[key] === obj[key]
  }).map((driver) => driver.name)
  return newArr
}
