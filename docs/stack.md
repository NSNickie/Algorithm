# Stack

## 20. Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Thought

Since it is a problem of stack, then we should think about using it. Apparently we can use a stack to record indegree of each parentheses. Then we use a map to record every parenthesis. When the character is a left parenthesis, we push it into the stack. If it is a right parenthesis, we pop a element from the stack and check if it is the corresponding  closing bracket.

```javascript
var isValid = function (s) {
    const stack = []
    const map = new Map([['(', ')'], ['[', ']'], ['{', '}']])
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
            const c = stack.pop()

            if (char !== map.get(c)) {
                return false
            }
        }
    }
    return stack.length === 0
};
```

## 394. Decode String

Given an encoded string, return its decoded string.

The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there will not be input like `3a` or `2[4]`.

The test cases are generated so that the length of the output will never exceed `105`.

### Thought

We can use stack to save every character and brackets. First, if we meet number, we record it until it ends. Next, If we meet right bracket, then go back and record the characters until meet left bracket. Then we reverse and multiple the characters and push them into the stack. Then the result shows.

## 739. Daily Temperatures

Given an array of integers `temperatures` represents the daily temperatures, return *an array* `answer` *such that* `answer[i]` *is the number of days you have to wait after the* `ith` *day to get a warmer temperature*. If there is no future day for which this is possible, keep `answer[i] == 0` instead.



## 347. Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return *the* `k` *most frequent elements*. You may return the answer in **any order**.

 

## Thought

- Apparently we can use brute force algorithm. Count all elements in the array and store them in a map. Then use an array to sort their rank by the number of times of appearance. Then return the result.
- But obviously we should use another way to solve it.
