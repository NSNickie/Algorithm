# Python



## 2235. Add Two Integers

Given two integers `num1` and `num2`, return the **sum** of the two integers.

### Code

```python
class Solution(object):
    def sum(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
        return num1+num2
        
```

### Complexity

- Time complexity: **O(1)**
- Space complexity: **O(1)**



## 1695. Maximum Erasure Value

You are given an array of positive integers `nums` and want to erase a subarray containing **unique elements**. The **score** you get by erasing the subarray is equal to the **sum** of its elements.

Return *the **maximum score** you can get by erasing **exactly one** subarray.*

An array `b` is called to be a subarray of `a` if it forms a contiguous subsequence of `a`, that is, if it is equal to `a[l],a[l+1],...,a[r]` for some `(l,r)`.

### Code

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
    let curSum = 0
    let max = -Infinity
    let left = 0
    const arr = new Int8Array(10001)

    for (let right = 0; right < nums.length; right++) {
        while (arr[nums[right]] > 0) {
            arr[nums[left]]--
            curSum -= nums[left]
            left++
        }
        arr[nums[right]]++
        curSum += nums[right]
        max = Math.max(curSum, max)
    }
    return max
    // let curSum = 0
    // let max = -Infinity
    // let left = 0
    // const set = new Set()
    // for (let right = 0; right < nums.length; right++) {
    //     while (set.has(nums[right])) {
    //         set.delete(nums[left])
    //         curSum -= nums[left]
    //         left++
    //     }
    //     set.add(nums[right])
    //     curSum += nums[right]
    //     max = Math.max(curSum, max)

    // }
    // return max
};
```

### Complexity

- Time complexity: **O(N)**
- Space complexity:
  1. Method 1 : **O(1)**, because we initialize the Int8Array with 10001 size.
  2. Method 2 : **O(U)**, U is the biggest in nums.



## 2958. Length of Longest Subarray With at Most K Frequency

You are given an integer array `nums` and an integer `k`.

The **frequency** of an element `x` is the number of times it occurs in an array.

An array is called **good** if the frequency of each element in this array is **less than or equal** to `k`.

Return *the length of the **longest** **good** subarray of* `nums`*.*

A **subarray** is a contiguous non-empty sequence of elements within an array.

### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    const map = new Map()
    let max = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        while (map.get(nums[right]) && map.get(nums[right]) >= k) {
            map.set(nums[left], map.get(nums[left]) - 1)
            left++
        }
        map.set(nums[right], (map.get(nums[right]) || 0) + 1)
        max = Math.max(right-left + 1, max)
        // console.log(map)
    }
    return max
};
```

### Complexity

- Time complexity: **O(N)**
- Space complexity: **O(N)**



## 2779. Maximum Beauty of an Array After Applying Operation

You are given a **0-indexed** array `nums` and a **non-negative** integer `k`.

In one operation, you can do the following:

- Choose an index `i` that **hasn't been chosen before** from the range `[0, nums.length - 1]`.
- Replace `nums[i]` with any integer from the range `[nums[i] - k, nums[i] + k]`.

The **beauty** of the array is the length of the longest subsequence consisting of equal elements.

Return *the **maximum** possible beauty of the array* `nums` *after applying the operation any number of times.*

**Note** that you can apply the operation to each index **only once**.

A **subsequence** of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the order of the remaining elements.

### Code 

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
    nums.sort((a, b) => a - b)
    let max = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        while (nums[right] - nums[left] > 2 * k) {
            left++
        }
        max = Math.max(right - left + 1, max)
    }
    return max
};
```

### Complexity

- Time complexity: **O(NlogN)**
- Space complexity: **O(1)**



## 2024. Maximize the Confusion of an Exam

A teacher is writing a test with `n` true/false questions, with `'T'` denoting true and `'F'` denoting false. He wants to confuse the students by **maximizing** the number of **consecutive** questions with the **same** answer (multiple trues or multiple falses in a row).

You are given a string `answerKey`, where `answerKey[i]` is the original answer to the `ith` question. In addition, you are given an integer `k`, the maximum number of times you may perform the following operation:

- Change the answer key for any question to `'T'` or `'F'` (i.e., set `answerKey[i]` to `'T'` or `'F'`).

Return *the **maximum** number of consecutive* `'T'`s or `'F'`s *in the answer key after performing the operation at most* `k` *times*.

### Code

```javascript
/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
    let maxT = 0
    let leftT = 0
    let fCount = 0
    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'F') {
            while (fCount >= k) {
                if (answerKey[leftT] === 'F') {
                    fCount--
                }
                leftT++
            }
            fCount++
        }
        maxT = Math.max(i - leftT + 1, maxT)
    }

    let maxF = 0
    let leftF = 0
    let tCount = 0
    for (let i = 0; i < answerKey.length; i++) {
        if (answerKey[i] === 'T') {
            while (tCount >= k) {
                if (answerKey[leftF] === 'T') {
                    tCount--
                }
                leftF++
            }
            tCount++
        }

        maxF = Math.max(i - leftF + 1, maxF)
    }
    // console.log(maxF,maxT)
    return Math.max(maxF,maxT)
};
```

### Complexity

- Time complexity: **O(N)**
- Space complexity: **O(1)**