/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
    let result = false
    let doubleSum = 0
    let singleSum = 0
    for (const num of nums) {
        if (num < 10) {
            singleSum += num
        } else {
            doubleSum += num
        }
    }
    return singleSum !== doubleSum
};