/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;
  for (const num of nums) {
    if (!count) {
      candidate = num;
    }
    num === candidate ? count++ : count--;
  }
  return candidate;
};
