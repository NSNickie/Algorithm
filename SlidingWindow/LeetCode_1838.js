/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  if (nums.length <= 1) {
    return nums.length;
  }
  nums.sort((a, b) => a - b);
  let windowSum = nums[0];
  let left = 0;
  let max = 0;
  for (let right = 1; right < nums.length; right++) {
    windowSum += nums[right];

    while (nums[right] * (right - left + 1) - windowSum > k) {
      windowSum -= nums[left];
      left++;
    }
    max = Math.max(right - left + 1, max);
  }
  return max;
};
