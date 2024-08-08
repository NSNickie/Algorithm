/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    // function factorial(num) {
    //     if (num === 0) { return 1; }
    //     else { return num * factorial(num - 1); }
    // }
    // const result = factorial((m + n - 2)) / (factorial(n - 1) * factorial(m - 1))
    // return result

    const dp = new Array(m)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n).fill(0)
    }
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]

};