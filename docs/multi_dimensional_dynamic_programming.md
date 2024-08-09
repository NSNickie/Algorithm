# Multi Dimensional Dynamic Programming

## 62. Unique Paths

There is a robot on an `m x n` grid. The robot is initially located at the **top-left corner** (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

Given the two integers `m` and `n`, return _the number of possible unique paths that the robot can take to reach the bottom-right corner_.

The test cases are generated so that the answer will be less than or equal to `2 * 109`.

### Thought

Actually there is a simple way to solve this multi-dimensional dynamic programming problem. Using the combination method can solve the problem easily and happily. `C(m,n)=(n!)/(n!(m-n)!)` can solve this!
Or we can use dynamic programming. Create a array `dp[m][n]` to store possible routes of each blocks. The state transition equation is `dp[i][j]=dp[i-1][j]+dp[i][j-1]`. Giving every first line and column block as value 1. Using the state transition we can solve this problem.

## 64.[Minimum Path Sum](https://leetcode.cn/problems/minimum-path-sum/)

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

#### Thought

This problem is almost the same as 62. We can use a `dp` to record every block minimum steps. Then we go over the grip and calculate all minimum steps. The state transition equation is `dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j]`. Return the result `dp[gird.length-1][grid[0].length-1]`.

