/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let result = 0
    for (const num of nums) {
        if ((num + 1) % 3 === 0 || (num - 1) % 3 === 0) {
            result++
        }
    }

    return result
};