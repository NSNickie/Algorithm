# Greedy

## 121. Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return _the maximum profit you can achieve from this transaction_. If you cannot achieve any profit, return `0`.

### Thought

Obviously we can use double for loop to solve this problem, but it will exceed the time limit. Thus when we are doing the for loop, we can save the minimum number. In the same time, we save the result which is the difference between current value and the minimum number. Finally we can get the correct answer.

## 55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

### Thought

Just don't think too much. Use a for loop to iterate throuth the array and check if the max jump index is bigger than the length of the array. Return true if it is, otherwise return false. This is because no matter where the index comes from, the max jump number is always the sum of the index and the value.

## 45. Jump Game Ⅱ

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]` and
- `i + j < n`

Return _the minimum number of jumps to reach_ `nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.

### Thought

Just don't think too much. **Use a for loop to simulate the jump process until we reach to the end**. For every step, we jump as far as we can then record the step. Finally, we can get the minimum steps to reach the end. This is called <u>**Greedy Strategy**</u>.

## 763. Partition Labels

You are given a string `s`. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be `s`.

Return _a list of integers representing the size of these parts_.

### Thought

Apparently we need to record the last index of each characters. Use a for loop to go over the string `s` and save each last index of all characters in a map. Then go over the string `s` one more time to decide the end.
