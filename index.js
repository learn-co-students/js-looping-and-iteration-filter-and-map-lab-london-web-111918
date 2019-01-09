// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(driver => {
    if (driver.revenue > revenue){
      return (driver)}
  })
}

function driverNamesWithRevenueOver(driver, revenue){
    return driversWithRevenueOver(driver, revenue).map(driver => {
      return driver.name
  });
}

function exactMatch(drivers, obj){
  let key = Object.keys(obj)[0]
  let newDrivers = drivers.filter(driver => {
    return driver[key] === obj[key]
  })
  return newDrivers
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(driver => {
    return driver.name
});
}

exactMatchToList(drivers, {name: Sally})

drivers = [{ name: 'Sally',   revenue: 400 },
      { name: 'Annette', revenue: 200 },
      { name: 'Jim',     revenue: 150 },
      { name: 'Sally',   revenue: 200 }]
