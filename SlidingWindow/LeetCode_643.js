/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let result = nums[0]
    let currTotal = 0
    for (let i = 0; i < nums.length; i++) {
        currTotal += nums[i]
        if (i < k - 1) {
            continue
        }
       
        result = Math.max(currTotal / k, result)
        currTotal -= nums[i - k + 1]
    }
    return result
};