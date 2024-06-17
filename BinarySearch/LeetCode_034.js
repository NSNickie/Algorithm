/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    function lowerBound(nums, target) {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] < target) { 
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    }
    const start = lowerBound(nums, target)
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1]
    }
    const end = lowerBound(nums, target + 1) - 1
    return [start, end]
};