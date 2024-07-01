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

Just don't think to much. Use a for loop to iterate throuth the array and check if the max jump index is bigger than the length of the array. Return true if it is, otherwise return false. This is because no matter where the index comes from, the max jump number is always the sum of the index and the value.
