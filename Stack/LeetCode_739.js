/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // const result = []
    // for (let i = 0; i < temperatures.length; i++) {
    //     result[i] = 0
    //     for (let j = i + 1; j < temperatures.length; j++) {
    //         if (temperatures[j] > temperatures[i]) {
    //             result[i] = j - i
    //             break
    //         }
    //     }

    // }
    // return result
    const result = new Array(temperatures.length).fill(0)
    const stack = []
    for (let i = temperatures.length - 1; i >= 0; i--) {
        const num = temperatures[i]
        while (stack.length && num >= temperatures[stack[stack.length - 1]]) {
            stack.pop()
        }
        if (stack.length) {
            result[i] = stack[stack.length - 1] - i
        }
        stack.push(i)
    }
    return result
};