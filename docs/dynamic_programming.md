# Dynamic Programming

## 70. Climbing Stairs

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

### Thought

A famous concept in dynamic programming is **State Transition Equation**. In this problem, the equation is `f(x)=f(x-1)+f(x-2)`. It means the answer of x is the sum of x-1 and x-2. Thus we can solve this problem.