/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
    let tested = 0
    for (const item of batteryPercentages) {
        if (item - tested > 0) {
            tested++
        }
    }
    return tested
};