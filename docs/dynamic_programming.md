# Dynamic Programming

## 70. Climbing Stairs

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Thought

A famous concept in dynamic programming is **State Transition Equation**. In this problem, the equation is `f(x)=f(x-1)+f(x-2)`. It means the answer of x is the sum of x-1 and x-2. Thus we can solve this problem.



## 118. Pascal's Triangle

Given an integer `numRows`, return the first num Rows of **Pascal's triangle**.

### Thought

Imagine that each row of the triangle is an array. Each element in the array is the sum of the value of upper row corresponding index and index+1. That means,  `row[j] = result[i - 1][j - 1] + result[i - 1][j]`. Thus we can solve this problem.



## 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return *the maximum amount of money you can rob tonight **without alerting the police***.

### Thought

A very classical problem of dynamic programming. The state transition equation is `maxMoney[i]=Math.max(maxMoney[i-2]+nums[i]+maxMoney[i-1])`. With the equation we can solve this problem.





