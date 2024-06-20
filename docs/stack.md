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



## 739. Daily Temperatures

Given an array of integers `temperatures` represents the daily temperatures, return *an array* `answer` *such that* `answer[i]` *is the number of days you have to wait after the* `ith` *day to get a warmer temperature*. If there is no future day for which this is possible, keep `answer[i] == 0` instead.

