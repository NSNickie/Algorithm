# Dynamic Programming

## 70. Climbing Stairs

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Thought

A famous concept in dynamic programming is **State Transition Equation**. In this problem, the equation is `f(x)=f(x-1)+f(x-2)`. It means the answer of x is the sum of x-1 and x-2. Thus we can solve this problem.

## 118. Pascal's Triangle

Given an integer `numRows`, return the first num Rows of **Pascal's triangle**.

### Thought

Imagine that each row of the triangle is an array. Each element in the array is the sum of the value of upper row corresponding index and index+1. That means, `row[j] = result[i - 1][j - 1] + result[i - 1][j]`. Thus we can solve this problem.

## 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return \*the maximum amount of money you can rob tonight **without alerting the police\***.

### Thought

A very classical problem of dynamic programming. The state transition equation is `maxMoney[i]=Math.max(maxMoney[i-2]+nums[i], maxMoney[i-1])`. With the equation we can solve this problem.

## 279. Perfect Squares

Given an integer `n`, return _the least number of perfect square numbers that sum to_ `n`.

A **perfect square** is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, `1`, `4`, `9`, and `16` are perfect squares while `3` and `11` are not.

### Thought

The state transition equation is `dp[i]=Math.min(dp[i],dp[i-j*j]+1)`.

## 322. Coin Change

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return _the fewest number of coins that you need to make up that amount_. If that amount of money cannot be made up by any combination of the coins, return `-1`.

You may assume that you have an infinite number of each kind of coin.

### Thought

The state transition equation is `dp[i]=Math.min(dp[i],dp[i-coin]+1)`. It means that if we choose one coin, the number we need is `dp[i-coin]+1`. We can choose the minimum number of results.



## 139. Word Break

Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

### Thought

A classical dynamic programming problem. Use a array `dp` to check every character possible result. With double for loop, we can find all possible results.  Return the last value of `dp`. 
