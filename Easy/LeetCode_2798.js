/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let result = 0
    for (const hour of hours) {
        if (hour >= target) {
            result++
        }
    }
    return result;
};