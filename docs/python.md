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