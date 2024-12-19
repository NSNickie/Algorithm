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

