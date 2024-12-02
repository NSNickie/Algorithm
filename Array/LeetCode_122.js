/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let profit = 0
  // for (let i = 1; i < prices.length; i++) {
  //     if (prices[i] > prices[i - 1]) {
  //         profit += prices[i] - prices[i - 1]
  //     }
  // }
  // return profit
  let dp0 = 0;
  let dp1 = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    let newDp0 = Math.max(dp0, prices[i] + dp1);
    let newDp1 = Math.max(dp0 - prices[i], dp1);
    dp0 = newDp0;
    dp1 = newDp1;
  }
  return dp0;
};
