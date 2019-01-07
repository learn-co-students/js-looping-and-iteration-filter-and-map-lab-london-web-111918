// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name;
  });
}

function exactMatch(drivers, objectAtt) {
  return drivers.filter(driver => {
    for (const key in objectAtt) {
      return driver[key] === objectAtt[key];
    }
  });
}

function exactMatchToList (drivers, objectAtt) {
  return exactMatch(drivers, objectAtt).map(driver => {
    return driver.name;
  });
}
