# Array

## 88.Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

### Thought

Apparently we can't use a new array to store the answer. So we need to use num1 to merge the array. We can do this by the end of the array: check the last number of nums1 and nums2 and compare them. Put the result to the end of num1 until i(index of nums1) or j is less than 0. At last we need to consider about if there are surplus numbers in nums2. We can put them all into the nums1.

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }

  return nums1;
};
```

## 27.Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

```c
int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

### Thought

Technically, we can just make a new array to store answers. But this method doesn't meet the requirements of the question because we need to remove all occurrences of val in nums in-place. We can use two-pointer method to solve the problem.

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j++] = nums[i];
    }
  }
  return j;
};
```

## 26.Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

```c
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNumsd.length;
for (int i = 0; i < k; i++) {
assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

### Thought

The problem is just like 27.

## 122.Best Time to Buy and Sell Stock II

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can buy it then immediately sell it on the **same day**.

Find and return *the **maximum** profit you can achieve*.

### Thought

1. Method 1, we can use **greedy algorithm** to solve this problem. The **core** **idea** of greedy algorithm is that **local optimal choices lead to a global optimal solution**. In the stock trading problem, capturing every price increase (the difference between two consecutive days) as individual profit will yield the maximum profit overall.

   ```javascript
   /**
    * @param {number[]} prices
    * @return {number}
    */
   var maxProfit = function (prices) {
       let profit = 0
       for (let i = 1; i < prices.length; i++) {
           if (prices[i] > prices[i - 1]) {
               profit += prices[i] - prices[i - 1]
           }
       }
       return profit
   };
   ```

2. Method 2, **dynamic programming**. Dynamic programming is a method for solving problems by breaking them into overlapping subproblems and solving each subproblem only once, storing the results to avoid redundant computations. For the stock trading problem, we use DP to track the maximum profit while considering whether we currently "hold a stock" or "don't hold a stock".

   - State Representation

     Define two states for each day i:

     - `dp[i][0]` : Maximum profit on day i if **we don't hold a stock**.
     - `dp[i][1]` : Maximum profit on day i if **we hold a stock**.

   - State Transition

     - if we **don't hold a stock** on day i, we either:
       - Did not hold a stock on day `i-1` (`dp[i-1][0]`)
       - Sold a stock on day i (`dp[i-1][1]+price[i]`)
       - Formula:`dp[i][0] = max(dp[i-1][0],dp[i-1][1]+price[i])`
     - If we hold a stock on day i, we either:
       - Bought a stock on day i (`dp[i][0]-price[i]`)
       - Held a stock on day i-1 (`dp[i-1][1]`)
       - Formula: `dp[i][1] = max(dp[i][0]-price[i],dp[i-1][1])`

   - Base Cases:

     - On day 0:
       - `dp[0][0]=0`: No stock, no profit.
       - `dp[0][1]=-price[0]` : Bought a stock, negative profit.

   ```javascript
   function maxProfit(prices) {
       let dp0 = 0; 
       let dp1 = -prices[0];
   
       for (let i = 1; i < prices.length; i++) {
           let newDp0 = Math.max(dp0, dp1 + prices[i]);
           let newDp1 = Math.max(dp1, dp0 - prices[i]);
           dp0 = newDp0;
           dp1 = newDp1;
       }
       return dp0;
   }
   
   ```

   

## 80.Remove Duplicates from Sorted Array II

Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` *after placing the final result in the first* `k` *slots of* `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** with O(1) extra memory.

**Custom Judge:**

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

### Thought

The problem is just like question 27. But there is something different, each numbers can appear at most 2 times. We can use nums[k-2] to controll it. 

### Answer

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (j < 2 || nums[i] !== nums[j - 2]) {
            nums[j++] = nums[i]
        }
    }
    return j
};
```



## 169. Majority Element

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

### Thought

Apparrently the problem is a classical <u>**Boyer-Moore algorithm**</u>. The **<u>Boyer-Moore Voting Algorithm</u>** is a clever technique used to find the majority element in an array, where the majority element is the one that appears more than half the time ( if it exists ). It achieves this in **O(n)** time complexity uses **O(1)** extra space.

Core Idea

The algorithm works by maintaining a **candidate** for the majority element and a **counter** to track how many times the candidate appears in comparison to other elements.

Steps:

1. **Initialization**: Start with an empty candidate and a counter set to zero.
2. **Candiate Selection**:
   - Traverse the array.
   - If the counter is 0, set the current element as the candidate and set the counter to 1.
   - Otherwise:
     - If the current element matches the candidate, increment the counter.
     - If it doesn't match, decrement the counter.
3. **Verification (Optional)**: Once the traversal is complete, the candidate is the potential majority element. If needed,  verify its count in a second pass.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let candidate = null
    let count = 0
    for (const num of nums) {
        if (!count) {
            candidate = num
        }
        num === candidate ? count++ : count--
    }
    return candidate
};
```

