/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function (nums, target) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  let count = Math.floor(target / sum);
  let remainder = target % sum;
  if (sum === 0) {
    return target === 0 ? 0 : -1;
  }
  if (remainder === 0) {
    return count * nums.length;
  } else {
    const subLen = findSubArray(remainder);
    return subLen === -1 ? -1 : count * nums.length + subLen;
  }

  function findSubArray(remainder) {
    let left = 0;
    let curSum = 0;
    let min = Infinity;
    for (let right = 0; right < 2 * nums.length; right++) {
      curSum += nums[right % nums.length];
      while (curSum > remainder) {
        curSum -= nums[left % nums.length];
        left++;
      }
      if (curSum === remainder) {
        min = Math.min(min, right - left + 1);
      }
    }
    return min === Infinity ? -1 : min;
  }
};
