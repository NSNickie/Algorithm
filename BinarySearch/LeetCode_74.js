/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rowC = matrix.length;
    const colC = matrix[0].length;
    let left = 0;
    let right = rowC * colC - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = matrix[Math.floor(mid / colC)][mid % colC]
        if (midValue < target) {
            left = mid + 1;
        } else if (midValue > target) {
            right = mid - 1;
        } else {
            return true
        }
    }

    return false;
};