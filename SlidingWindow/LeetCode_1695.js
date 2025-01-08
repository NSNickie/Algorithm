/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let curSum = 0;
  let max = -Infinity;
  let left = 0;
  const arr = new Int8Array(10001);

  for (let right = 0; right < nums.length; right++) {
    while (arr[nums[right]] > 0) {
      arr[nums[left]]--;
      curSum -= nums[left];
      left++;
    }
    arr[nums[right]]++;
    curSum += nums[right];
    max = Math.max(curSum, max);
  }
  return max;
  // let curSum = 0
  // let max = -Infinity
  // let left = 0
  // const set = new Set()
  // for (let right = 0; right < nums.length; right++) {
  //     while (set.has(nums[right])) {
  //         set.delete(nums[left])
  //         curSum -= nums[left]
  //         left++
  //     }
  //     set.add(nums[right])
  //     curSum += nums[right]
  //     max = Math.max(curSum, max)

  // }
  // return max
};
