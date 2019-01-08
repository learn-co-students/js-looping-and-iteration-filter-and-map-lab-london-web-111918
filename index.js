function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver['revenue'] > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(
    function(driver) { return driver['name']
  })
};

function exactMatch(drivers, obj){
  return drivers.filter(
    driver => { for(const key in obj) {
      return obj[key] === driver[key] }
    }
    );
  return driver
};

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(
    function(driver) {return driver['name']
  });
};
