/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    // const arr=nums.sort((a,b)=>{return a-b})
    // return arr[Math.floor(arr.length/2)]
    let count = 0
    let candidate = 0
    for (const num of nums) {
        if (count === 0) {
            candidate = num
        }
        if (num === candidate) {
            count++
        } else {
            count--
        }
    }
    return candidate
};