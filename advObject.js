salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  },
  {
    name: "Fido",
    province: 'AB',
    sales: [445, 232]
  }
];

////////////////////////

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var results = {};

  function sum(array) {
    total = 0
    for (var i in array) {
      total += array[i];
    }
    return total;
  }

  for (item in salesData) {
    results[salesData[item]['name']] = {}
    results[salesData[item]['name']]['totalSales'] = 0
    results[salesData[item]['name']]['totalTaxes'] = 0
  }


  for (item in salesData) {
    var companytotalSales = sum(salesData[item]['sales'])
    results[salesData[item]['name']]['totalSales'] += companytotalSales
    var companytotalTaxes = companytotalSales * taxRates[salesData[item]['province']];
    results[salesData[item]['name']]['totalTaxes'] += companytotalTaxes
  }

  return results
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);