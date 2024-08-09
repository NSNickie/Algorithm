/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    /**
     * @param {number[][]} grid
     * @return {number}
     */

    const m = grid.length
    const n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue
            if (i === 0 && j !== 0) {
                grid[i][j] = grid[i][j - 1] + grid[i][j]
            } else if (i !== 0 && j === 0) {
                grid[i][j] = grid[i - 1][j] + grid[i][j]
            } else {
                grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
            }
        }
    }
    return grid[m - 1][n - 1]
    // const dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0))
    // dp[0][0] = grid[0][0]
    // for (let i = 1; i < grid.length; i++) {
    //     dp[i][0] = dp[i - 1][0] + grid[i][0]
    // }
    // for (let i = 1; i < grid[0].length; i++) {
    //     dp[0][i] = dp[0][i - 1] + grid[0][i]
    // }

    // for (let i = 1; i < dp.length; i++) {
    //     for (let j = 1; j < dp[0].length; j++) {
    //         console.log(grid[i][j])
    //         dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    //     }
    // }
    // return dp[grid.length - 1][grid[0].length - 1]

};