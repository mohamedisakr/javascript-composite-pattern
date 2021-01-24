/*
(1) Sales = 45*locks + 30*stocks + 35*barrels
(2) Commission = 0.10*sales (for $0 ≤ sales ≤ $1000)
(3) Commission = $100 + 0.15*(sales – $1000) (for $1000 < sales ≤ $1800)
(4) Commission = $220 + 0.20*(sales – $1800) (for sales > $1800)
*/
function calculateSales(locks, stocks, barrels) {
  return 45 * locks + 30 * stocks + 35 * barrels;
}

function calculateCommission(sales) {
  if (sales > 0 && sales <= 1000) {
    return 0.1 * sales;
  } else if (sales > 1000 && sales <= 1800) {
    return 100 + 0.15 * (sales - 1000);
  } else if (sales > 1800) {
    return 220 + 0.2 * (sales - 1800);
  }
}

// // 1st failed case ==>> [PASSED]
// // $1100.00 $115.00 $100.00 Fail $15.00
// let expected = 115;
// let actual = calculateCommission(1100);
// console.log(expected === actual);

// // 2nd failed case ==>> [PASSED]
// // $1700.00 $205.00 $190.00 Fail $15.00
// expected = 205;
// actual = calculateCommission(1700);
// console.log(expected === actual);

// // 3rd failed case ==>> [PASSED]
// // $1800.00 $220.00 $205.00 Fail $15.00
// expected = 220;
// actual = calculateCommission(1800);
// console.log(expected === actual);

// 4th failed case ==>> [PASSED]
// $1900.00 $240.00 $260.00 Fail –$20.00
expected = 240;
actual = calculateCommission(1900);
console.log(expected === actual);

// // 5th failed case ==>> [PASSED]
// // $1005.00 $100.75 $85.75 Fail $15.00
// expected = 100.75;
// actual = calculateCommission(1005);
// console.log(expected === actual);
