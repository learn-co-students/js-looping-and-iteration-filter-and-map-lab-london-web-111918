// Code your solution here:
function driversWithRevenueOver(drivers, number) {
  const result = drivers.filter(driver => driver.revenue > number);
  return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(
    driver => driver.name
  );
}

function exactMatch(drivers, object) {

  result = drivers.filter(driver =>
    {for (const key in object) {
      return driver[key] === object[key]}
    }
  );
  return result;
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(
    driver => driver.name
  );
}
