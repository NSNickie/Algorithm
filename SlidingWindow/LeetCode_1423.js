/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let curSum = 0;
  let max = -Infinity;
  for (let i = 0; i < k; i++) {
    curSum += cardPoints[i];
  }
  max = curSum;
  for (let i = 1; i <= k; i++) {
    curSum += cardPoints[cardPoints.length - i] - cardPoints[k - i];
    max = Math.max(curSum, max);
  }
  return max;

  // let curSum = 0
  // let min = Infinity
  // let total = 0
  // const window = cardPoints.length - k
  // for (let i = 0; i < cardPoints.length; i++) {
  //     total += cardPoints[i]
  //     if (i < window - 1) {
  //         curSum += cardPoints[i]
  //         continue
  //     }

  //     curSum += cardPoints[i]
  //     min = Math.min(min, curSum)
  //     // console.log(curSum)
  //     // console.log(min)
  //     curSum -= cardPoints[i - window + 1]

  // }
  // return window === 0 ? total : total - min
};
