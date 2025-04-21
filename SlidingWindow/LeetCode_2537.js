/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    let left = 0
    let totalCount = 0
    let pairs = 0
    const map = new Map()

    for (let right = 0; right < nums.length; right++) {
        pairs += map.get(nums[right]) || 0
        map.set(nums[right], (map.get(nums[right]) || 0) + 1)
        while (pairs >= k) {
            pairs -= map.get(nums[left]) - 1
            map.set(nums[left], map.get(nums[left]) - 1)
            if (map.get(nums[left]) === 0) {
                map.delete(nums[left])
            }
            left++
        }
        totalCount += left
    }
    return totalCount
};