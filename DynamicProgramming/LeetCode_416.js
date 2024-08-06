/**
 * @param {number[]} nums
 * @return {boolean}
 */
// A not very good method
var canPartition = function (nums) {
    let capacity = 0
    for (const num of nums) {
        capacity += num
    }

    if (capacity % 2 !== 0) {
        return false
    }
    capacity = capacity / 2
    const dp = new Array(nums.length + 1)
    for (let i = 0; i < nums.length + 1; i++) {
        dp[i] = new Array(capacity + 1).fill(false)
    }
    dp[0][0] = true

    for (let i = 1; i < nums.length + 1; i++) {
        for (j = 1; j <= capacity + 1; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
            }
        }
    }
    return dp[nums.length][capacity]
};

