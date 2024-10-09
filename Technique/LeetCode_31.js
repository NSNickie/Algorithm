/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length < 2) {
        return
    }
    let i = nums.length - 2
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--
    }
    if (i >= 0) {
        let j = nums.length - 1
        while (j >= 0 && nums[j] <= nums[i]) {
            j--
        }
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    reverse(nums, i + 1)

    function reverse(nums, start) {
        let left = start, right = nums.length - 1
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
        }
    }
};