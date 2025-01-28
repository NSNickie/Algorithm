/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  if (nums.length === 0 || k > nums.length) {
    return 0;
  }
  const max = Math.max(...nums);
  let left = 0;
  let curCount = 0;
  let totalCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === max) {
      curCount++;
    }
    while (curCount >= k) {
      totalCount += nums.length - right;
      if (nums[left] === max) {
        curCount--;
      }
      left++;
    }
  }
  return totalCount;
};
