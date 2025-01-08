/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  const map = new Map();
  let max = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    while (map.get(nums[right]) && map.get(nums[right]) >= k) {
      map.set(nums[left], map.get(nums[left]) - 1);
      left++;
    }
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);
    max = Math.max(right - left + 1, max);
    // console.log(map)
  }
  return max;
};
