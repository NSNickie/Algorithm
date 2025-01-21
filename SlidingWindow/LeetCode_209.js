/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = nums.length + 1;
  let curSum = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    curSum += nums[right];
    while (curSum - nums[left] >= target) {
      curSum -= nums[left++];
    }
    if (curSum >= target) {
      min = Math.min(min, right - left + 1);
    }
  }
  return min <= nums.length ? min : 0;
};
