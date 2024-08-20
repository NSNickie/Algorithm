# Technique

## LC. 136 [Single Number](https://leetcode.cn/problems/single-number/)

Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

#### Thought

The easiest way is using XOR bitwise operator to find out the result. Declare a result as 0 and do XOR with every number in the array. Then we can get correct result. Solve!

