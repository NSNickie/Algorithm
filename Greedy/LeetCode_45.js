/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let end = 0
    let step = 0
    let start = 0
    while (end < nums.length - 1) {
        let max = end
        for (let i = start; i <= end; i++) {
            max = Math.max(max, i + nums[i])
        }
        start = end + 1
        end = max
        step++
    }
    return step
};