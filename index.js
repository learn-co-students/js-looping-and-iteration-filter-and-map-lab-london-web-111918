// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter( x => x.revenue > revenue);
};

function driverNamesWithRevenueOver(drivers, revenue) {
  const arr = drivers.filter( x => x.revenue > revenue);
  return arr.map (x => x.name)
};

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, matcher) {

      return exactMatch(drivers, matcher).map(x => x.name);
}
