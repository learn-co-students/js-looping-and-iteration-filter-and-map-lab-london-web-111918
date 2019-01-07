// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(function (word) {return word.length > 6; });
// const result = words.filter(word => word.length > 6); // arrow function is a succinct version of the above. Also implicitly returns block

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(
    driver => driver.name
  );
}

function exactMatch(drivers, object) {
  return drivers.filter( function(driver) {
    for (const key in object) {
      return driver[key] === object[key];
    }
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(
    driver => driver.name
  );
}
