# Greedy

## 121. Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

### Thought

Obviously we can use double for loop to solve this problem, but it will exceed the time limit. Thus when we are doing the for loop, we can save the minimum number. In the same time, we save the result which is the difference between current value and the minimum number. Finally we can get the correct answer.

