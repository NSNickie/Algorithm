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



## 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

Given an array of integers `arr` and two integers `k` and `threshold`, return *the number of sub-arrays of size* `k` *and average greater than or equal to* `threshold`.

### Thought

A classic fixed-length sliding window problem.

### Code

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let result = 0;
  let curTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    curTotal += arr[i];
    if (i < k - 1) {
      continue;
    }
    if (curTotal / k >= threshold) {
      result++;
    }
    curTotal -= arr[i - k + 1];
  }
  return result;
};

```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**

## 

## 2090. K Radius Subarray Averages

You are given a **0-indexed** array `nums` of `n` integers, and an integer `k`.

The **k-radius average** for a subarray of `nums` **centered** at some index `i` with the **radius** `k` is the average of **all** elements in `nums` between the indices `i - k` and `i + k` (**inclusive**). If there are less than `k` elements before **or** after the index `i`, then the **k-radius average** is `-1`.

Build and return *an array* `avgs` *of length* `n` *where* `avgs[i]` *is the **k-radius average** for the subarray centered at index* `i`.

The **average** of `x` elements is the sum of the `x` elements divided by `x`, using **integer division**. The integer division truncates toward zero, which means losing its fractional part.

- For example, the average of four elements `2`, `3`, `1`, and `5` is `(2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75`, which truncates to `2`.

### Thought

A special sliding window problem. The key is that *do not* use middle index to calculate but do use the end index. 

### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    let curTotal = 0
    const result = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        if (i - k < 0 || i + k >= nums.length) {
            result[i] = -1

        }
        curTotal += nums[i]
        if (i >= 2 * k) {
            result[i - k] = Math.floor(curTotal / (k * 2 + 1))
            curTotal -= nums[i - 2 * k]
        }
    }
    return result
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(n)**



## 2379. Minimum Recolors to Get K consecutive Black Blocks

You are given a **0-indexed** string `blocks` of length `n`, where `blocks[i]` is either `'W'` or `'B'`, representing the color of the `ith` block. The characters `'W'` and `'B'` denote the colors white and black, respectively.

You are also given an integer `k`, which is the desired number of **consecutive** black blocks.

In one operation, you can **recolor** a white block such that it becomes a black block.

Return *the **minimum** number of operations needed such that there is at least **one** occurrence of* `k` *consecutive black blocks.*

### Thought

Classic sliding window problem. Initial first window and calculate rest blocks of them.

### Code

```javascript
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let curBlacks = 0;
  let max = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'B') {
      curBlacks++;
      max = Math.max(curBlacks, max);
    }
  }
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === 'B') curBlacks++;
    if (blocks[i - k] === 'B') curBlacks--;
    max = Math.max(curBlacks, max);
  }
  return k - max;
};

```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**



## 1052. Grumpy Bookstore Owner

There is a bookstore owner that has a store open for `n` minutes. You are given an integer array `customers` of length `n` where `customers[i]` is the number of the customers that enter the store at the start of the `ith` minute and all those customers leave after the end of that minute.

During certain minutes, the bookstore owner is grumpy. You are given a binary array grumpy where `grumpy[i]` is `1` if the bookstore owner is grumpy during the `ith` minute, and is `0` otherwise.

When the bookstore owner is grumpy, the customers entering during that minute are not **satisfied**. Otherwise, they are satisfied.

The bookstore owner knows a secret technique to remain **not grumpy** for `minutes` consecutive minutes, but this technique can only be used **once**.

Return the **maximum** number of customers that can be *satisfied* throughout the day.

### Code

```javascript
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let maxTolerant = 0;
  let currTolerant = 0;
  let defaultClients = 0;
  for (let i = 0; i < customers.length; i++) {
    if (i < minutes) {
      if (grumpy[i] === 1) {
        currTolerant += customers[i];
      } else {
        defaultClients += customers[i];
      }
      // console.log(defaultClients)
      maxTolerant = Math.max(currTolerant, maxTolerant);
      continue;
    }
    if (grumpy[i] === 1) {
      currTolerant += customers[i];
    } else {
      defaultClients += customers[i];
    }
    if (grumpy[i - minutes] === 1) {
      currTolerant -= customers[i - minutes];
    }
    maxTolerant = Math.max(currTolerant, maxTolerant);
    // console.log(defaultClients)
  }
  return defaultClients + maxTolerant;
};

```



### Complexit

- Time complexity: **O(n)**
- Space complexity: **O(1)**
