/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    let sort_nums = nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < sort_nums.length; i++) {
        if (sort_nums[i] === target) {
            res.push(i)
        }
    }
    return res
};