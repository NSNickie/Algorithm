/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
  let curMap = new Map();
  let total = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      total += nums[i];
      curMap.set(nums[i], (curMap.get(nums[i]) || 0) + 1);
      continue;
    }
    curMap.set(nums[i], curMap.get(nums[i]) ? curMap.get(nums[i]) + 1 : 1);

    total += nums[i];
    if (curMap.size >= m) {
      max = Math.max(total, max);
    }
    // console.log(curArr)
    // console.log(curSet)

    const leftNum = nums[i - k + 1];
    curMap.set(leftNum, curMap.get(leftNum) - 1);
    if (curMap.get(leftNum) === 0) {
      curMap.delete(leftNum);
    }
    total -= leftNum;
  }
  return max;
};
