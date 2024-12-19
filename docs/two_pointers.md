# Two Pointers

## 125. Valid Palindrome

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` *if it is a **palindrome**, or* `false` *otherwise*.

### Thought

Classic two-pointer problem.

1. **Preprocessing the String**:
   - First, remove all non-alphanumeric characters (e.g., punctuation, spaces) using a regular expression.
   - Convert the string to lowercase to ignore case sensitivity.
2. **Using Two Pointers:**
   - Initialize two pointers: one starting at the beginning of the string (`left`) and the other at the end (`right`).
   - Compare the characters at the two pointers. If they match, move the `left` pointer to the right and the `right` pointer to the left.
   - If they don't match, the string is not a palindrome, so return `false`.
3. **Stop Condition:**
   - Continue the process until the `left` pointer crosses the `right` pointer. If all characters match during this traversal, return `true`.

### Code

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^\w]|_/g, '').toLocaleLowerCase()

    // console.log(s)
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true



    // s = s.replace(/[^\w]|_/g, '')
    // s = s.toLocaleLowerCase()
    // const origin = s.split('')
    // const reverse = origin.toReversed()
    // for (let i = 0; i < origin.length; i++) {
    //     if (origin[i] !== reverse[i]) {
    //         return false
    //     }
    // }
    // return true
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**



## 392. Is Subsequence

Given two strings `s` and `t`, return `true` *if* `s` *is a **subsequence** of* `t`*, or* `false` *otherwise*.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

### Code

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (!s.length) return true
    let sPointer = 0
    let tPointer = 0
    while (tPointer <= t.length - 1) {
        if (t[tPointer] === s[sPointer]) {
            sPointer++
        }
        tPointer++
    }
    return sPointer === s.length 
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**