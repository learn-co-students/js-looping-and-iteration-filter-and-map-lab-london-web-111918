// Code your solution here:
function driversWithRevenueOver(drivers, amount){
  const newArr = drivers.slice();
  return newArr.filter(function(driver){
    return driver.revenue > amount;
    return newArr;
  });
}

function driverNamesWithRevenueOver(drivers, amount){
  return driversWithRevenueOver(drivers, amount).map(function(driver){
    return driver['name'];
  })
}

function exactMatch(drivers,obj){
  return drivers.filter(function(driver){
    for (const key in obj){
      return driver[key] === obj[key]
    };
  })
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(function(driver){
    return driver.name;
  })
}
