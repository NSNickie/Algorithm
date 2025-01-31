/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  const diffCount = new Set(nums).size;
  let left = 0;
  let totalCount = 0;
  const map = new Map();
  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);
    while (map.size === diffCount) {
      totalCount += nums.length - right;
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) {
        map.delete(nums[left]);
      }
      left++;
    }
  }
  return totalCount;
};
