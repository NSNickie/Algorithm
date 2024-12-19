/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let result = 0;
  let curTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    curTotal += arr[i];
    if (i < k - 1) {
      continue;
    }
    if (curTotal / k >= threshold) {
      result++;
    }
    curTotal -= arr[i - k + 1];
  }
  return result;
};
