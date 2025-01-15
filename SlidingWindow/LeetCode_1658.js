/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  let totalSum = 0;
  for (const num of nums) {
    totalSum += num;
  }
  if (totalSum - x < 0) {
    return -1;
  }
  let min = Infinity;
  let left = 0;
  let curSum = 0;
  for (let right = 0; right < nums.length; right++) {
    curSum += nums[right];
    while (curSum > totalSum - x) {
      curSum -= nums[left];
      left++;
    }
    if (curSum === totalSum - x) {
      min = Math.min(nums.length - (right - left + 1), min);
    }
  }
  return min === Infinity ? -1 : min;
};
