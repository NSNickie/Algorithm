# Sliding Window

## 1456. Maximum Number of Vowels in a Substring of Given Length

Given a string `s` and an integer `k`, return *the maximum number of vowel letters in any substring of* `s` *with length* `k`.

**Vowel letters** in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

### Thought 

*(from God Ling)*

**Fixed-length sliding window routine** 

I summarize it into three steps: **add - update -remove**.

1. **Add**: The element at index `i` enters the window, updating relevant statistics. if `i < k -1`, repeat the first step.
2. **Update**: Update the answer. This is generally about updating the maximum/minimum value.
3. **Remove**: The element at index `i-k+1`leaves the window, updating relevant statistics.

These three steps apply to all fixed-length sliding window problems.

### Code

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let result = 0
    let currVowel = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            currVowel++
        }
        if (i < k - 1) {
            continue
        }
        result = Math.max(result, currVowel)
        if (s[i - k + 1] === 'a' || s[i - k + 1] === 'e' || s[i - k + 1] === 'i' || s[i - k + 1] === 'o' || s[i - k + 1] === 'u') {
            currVowel--
        }
    }
    return result
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**



## 643. Maximum Average Subarray I

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose **length is equal to** `k` that has the maximum average value and return *this value*. Any answer with a calculation error less than `10-5` will be accepted.

### Thought

This is a classic fixed-length sliding window problem.

1. **Add**: Add nums[i] and calculate nums[i] into current total value.
2. **Update**: Calculate the average and update the max average.
3. **Remove**: The element nums[i-k+1] leaves the window and update current toatal value.

### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let result = nums[0]
    let currTotal = 0
    for (let i = 0; i < nums.length; i++) {
        currTotal += nums[i]
        if (i < k - 1) {
            continue
        }
       
        result = Math.max(currTotal / k, result)
        currTotal -= nums[i - k + 1]
    }
    return result
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**