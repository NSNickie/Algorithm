/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  let curTotal = 0;
  const result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if (i - k < 0 || i + k >= nums.length) {
      result[i] = -1;
    }
    curTotal += nums[i];
    if (i >= 2 * k) {
      result[i - k] = Math.floor(curTotal / (k * 2 + 1));
      curTotal -= nums[i - 2 * k];
    }
  }
  return result;
};
