/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const curMap = {};
  let curSum = 0;
  let max = 0;
  let uniqueCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      if (!curMap[nums[i]]) uniqueCount++;
      curMap[nums[i]] = curMap[nums[i]] ? curMap[nums[i]] + 1 : 1;
      curSum += nums[i];
      continue;
    }
    if (!curMap[nums[i]]) uniqueCount++;
    curMap[nums[i]] = curMap[nums[i]] ? curMap[nums[i]] + 1 : 1;
    curSum += nums[i];
    if (uniqueCount === k) {
      max = Math.max(curSum, max);
    }
    curMap[nums[i - k + 1]] = curMap[nums[i - k + 1]] - 1;
    if (curMap[nums[i - k + 1]] === 0) {
      delete curMap[nums[i - k + 1]];
      uniqueCount--;
    }

    curSum -= nums[i - k + 1];
    // console.log(curMap)
  }
  return max;
};
