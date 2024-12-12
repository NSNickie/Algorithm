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



## 189.Rotate Array

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

### Thought

The problem can be solved by using a new array easily. But if we want to solve this with **O(1)** space complexity and **O(n)** time complexity, we can use **Reverse Array** method. 

Steps:

- Reverse the entire array.
- Reverse the first k elements.
- Reverse the remaining n - k elements

### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

```



## 274.H-Index

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `ith` paper, return *the researcher's h-index*.

According to the [definition of h-index on Wikipedia](https://en.wikipedia.org/wiki/H-index): The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

### Thought

To find the H-Index, we take the following approach:

1. **Sort the citations array in descending order**. This ensures that papers with the highest citations are processed first.
2. For each paper at position i in the sorted array, calculate the candidate **h** as **i+1** (since i+1 papers have been examined so far).
3. **Check if citations[i]>=i+1**:
   - If true, the candidate **h=i+1** is valid.
   - if false, stop the process and return the largest valid **h** found so far.

This approach ensures we maximize h whiel maintaining the conditions for the **H-index**.

### Code

```javascript
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => b - a)
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) {
            return i
        }
    }
    return citations.length
};
```

### Complexity

- Time complexity: **O(nlogn)**
- Space complexity: **O(1)**



## 380.Insert Delete GetRandom O(1)

Implement the `RandomizedSet` class:

- `RandomizedSet()` Initializes the `RandomizedSet` object.
- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the **same probability** of being returned.

You must implement the functions of the class such that each function works in **average** `O(1)` time complexity.

### Thought

We can use a map and a array to store elements. The key is val and the value is the index of val. When we remove the element, we can delete it from the array first then delete it from the map. In **getRandom** method, we can use **Math.floor** and **Math.random** to calculate a random index.

### Code

```javascript
var RandomizedSet = function () {
  this.map = new Map();
  this.arr = new Array();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) {
    return false;
  } else {
    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const index = this.map.get(val);

  const lastElement = this.arr[this.arr.length - 1];

  this.arr[index] = lastElement;
  this.map.set(lastElement, index);

  this.arr.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

```

### Complexity

- **Insert(val)**

  Time Complexity: **O(1)**

- **remove(val)**

  Time Complexity: **O(1)**

- **getRandom()**

  Time Complexity: **O(1)**

- **Total Space Complexity**

  **O(1)**



## 121.Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

### Thought

1. **Single Pass Solution**
   - Traverse the prices array from left to right while maintaining a variable `minPrice` to track the lowest stock price so far.
   - For each day, calculate the potential profit as `profit=prices[i]-minPrice`
   - Track the maximum profit using a variable `maxProfit` during the traversal.
   - At the end of the loop, return `maxProfit`.
2. **Optimization**
   - By keeping track of the minimum price, we avoid using nested loops.
   - The time complexity is reduced to O(n).

### Code

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0
    }
    let min = prices[0]
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            max = Math.max(max, prices[i] - min)
        }
    }
    return max
};
```

### Complexity

- Time Complexity: **O(n)**
- Space Complexiry: **O(1)**



## 134.Gas Station

There are `n` gas stations along a circular route, where the amount of gas at the `ith` station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `ith` station to its next `(i + 1)th` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return *the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return* `-1`. If there exists a solution, it is **guaranteed** to be **unique**.

### Thought

1. **Condition for Infeasibility**
   - if the total gas available`sum(gas)`is less than the total cost required `sum(cost)`, it is impossible to complete the circuit, so return `-1`.
2. **Greddy Algorithm Insight**
   - If starting from station `i`, we run out of gas at station `j`, then no station between `i` and `j` can be a valid starting point. This is because the accumulated fuel from `i` to `j` is negative, and no intermediate station will have more fuel to complete the trip.
3. **Steps**
   - **Initialize Variables**
     - `total_tank`: Tracks total fuel balance for the entire circuit.
     - `current_tank`: Tracks fuel balance in the current segment.
     - `starting_station`: Tracks the current candidate for a valid starting point.
   - **Traverse All Stations**:
     - Update `current_tank` and `total_tank` with `gas[i]-cost[i]`
     - If `current_tank` becomes negative, reset it to `0` and move the `starting_station` to `i+1`.
4. **Final Result**:
   - Return `starting_station` if `total_tank>=0`; otherwise return `-1`.

### Code

```javascript
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalTank = 0, currentTank = 0
    let startingStation = 0
    for (let i = 0; i < gas.length; i++) {
        totalTank += gas[i] - cost[i]
        currentTank += gas[i] - cost[i]
        if (currentTank < 0) {
            startingStation = i + 1
            currentTank = 0
        }

    }
    return totalTank >= 0 ? startingStation : -1
};
```

### Complexity Analysis

- Time complexity: **O(n)**
- Space complexity: **O(1)**

## 

## 55.Jump Game

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` *if you can reach the last index, or* `false` *otherwise*.

### Thought

This problem can be solved using a **greedy algorithm**.

1. **Core Idea**:
   - Maintain a variable `maxReach` that keeps track of the farthest index you can reach.
   - If the current index `i` exceeds `maxReach`, it means there is a "gap" in the array that you cannot cross, so return false.
   - As you iterate, update `maxReach=max(maxReach,i+nums[i])`. If `maxReach` reaches or exceeds the last index (`n-1`), return `true`.
2. **Steps**:
   - Initialize `maxReach=0`
   - Iterate through the array:
     - If `i>maxReach`, return `false`.
     - Otherwise, update `maxReach=max(maxReach,i+nums[i])`.
   - After the loop, if `maxReach>=nums.length-1`, return `true`

### Code

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxIndex) return false;
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= nums.length - 1) return true;
  }
  return false;
};

```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**

## 45.Jump Game II

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]` and
- `i + j < n`

Return *the minimum number of jumps to reach* `nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.

### Thought

- Traverse the array from the beginning to the second-last element (because once you reach the last element, no further jump is needed).
- Update `farthest` at each index to reflect the maximum reachable position.
- If you reach `current_end` during the traversal:
  - Increment the `jumps`counter
  - Update `current_end` to the value of `farthest`.

### Complexity

- Time complexity:**O(n)**
- Space complexity:**O(1)**



## 135.Candy

There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.

You are giving candies to these children subjected to the following requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

Return *the minimum number of candies you need to have to distribute the candies to the children*.

### Thought

The problem can be solved using a **two-pass greedy algorithm**:

1. **Left-to-right pass:**

   Ensure that every child who has a higher score than the child to their left gets more candies than the left child.

2. **Right-to-left pass:**

   Ensure that every child who has a higher score than the child to their right gets more candies than the right child.

**Steps:**

1. Create an array `candies` initialized to 1 for each child.
2. Traverse from left to right:
   - If `ratings[i]>ratings[i-1]`, update `candies[i]=candies[i-1]+1`.
3. Traverse from right to left:
   - If `ratings[i]>ratings[i+1]`, update `candies[i]=max(candies[i],candies[i+1]+1)`.
4. Finally, return the sum of the `candies` array.

### Complexity

- Time complexity:**O(n)**
- Space complexity:**O(n)**



## 238.Product of Array Except Self

Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

### Thought

**Key Idea**:

The solution involves calculating the **left product** and **right product** for each element.

**Key Points**:

1. **Left and Right Products**:

   For `answer[i]`, it equals the prodcut of all elements to the **left** of `i` and all elements to the **right** of `i`:

   ```javascript
   answer[i]=left_product[i]*right_product[i]
   ```

2. **Two Passes**:

   - In the first pass (left-to-right), calculate and store the **prefix product**.
   - In the second pass (right-to-left), calculate the **suffix product** and combine it with the prefix product.

### Code

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftProduct = 1;
  let rightProduct = 1;
  const answer = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return answer;
};

```

### Complexity

- Time complexity:**O(n)**
- Space complexity:**O(1)** (notice that inputs and outputs don't count in complexity analysis)



## 23.Roman to Integer

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. 
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. 
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

### Thought

Apparently we can use **switch-case** block and **if-else** to controll the outputs. Complexity is not bad though. However the code of this method is not clean. If  think carefully, we can find that big character is behind small character except special circumstances. Thus we can use **Map** and the rule to write cleaner code.

### Code

**Switch-case & if-else**:

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let answer = 0
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                if (i + 1 < s.length) {
                    if (s[i + 1] === 'V') {
                        answer += 4
                        break
                    } else if (s[i + 1] === 'X') {
                        answer += 9
                        break
                    }
                }
                answer += 1
                break
            case 'V':
                if (i - 1 >= 0) {
                    if (s[i - 1] === 'I') {
                        break
                    }
                }
                answer += 5
                break
            case 'X':
                if (i - 1 >= 0) {
                    if (s[i - 1] === 'I') {
                        break
                    }
                }
                if (i + 1 < s.length) {
                    if (s[i + 1] === 'L') {
                        answer += 40
                        break
                    } else if (s[i + 1] === 'C') {
                        answer += 90
                        break
                    }
                }
                answer += 10
                break
            case 'L':
                if (i - 1 >= 0) {
                    if (s[i - 1] === 'X') {
                        break
                    }
                }

                answer += 50
                break
            case 'C':
                if (i - 1 >= 0) {
                    if (s[i - 1] === 'X') {
                        break
                    }
                }
                if (i + 1 < s.length) {
                    if (s[i + 1] === 'D') {
                        answer += 400
                        break
                    } else if (s[i + 1] === 'M') {
                        answer += 900
                        break
                    }
                }
                answer += 100
                break
            case 'D':
                if (i - 1 >= 0) {
                    if (s[i - 1] === 'C') {
                        break
                    }
                }
                answer += 500
                break
            case 'M':
                if (i - 1 >= 0) {
                    if (s[i - 1] === 'C') {
                        break
                    }
                }
                answer += 1000
                break
        }
    }

    return answer
};
```

**Map**:

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    }
    let answer = 0
    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]]
        const next = map[s[i + 1]] || 0
        if (current < next) {
            answer -= current
        } else {
            answer += current
        }
    }
    return answer
};
```

### Complexity:

- Time complexity: **O(n)**
- Space complexity:**O(1)**



## 42.Trapping Rain Water

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

### Thought

We can use **Brute Force** to solve this problem. But if you try this method LeetCode will say *TLE (Time Limit Exceeded)* error. Time complexity of brute force method is $O(n^2)$ , so we cannot use it. Are there any other approaches?

The second approach is **Dynamic Programming**. 

1. Precompute `leftMax`and `rightMax`arrays:
   - `leftMax[i]`:Maximum height to the left of `i`.
   - `rightMax[i]`:Maximum height to the right of `i`.
2. Iterate through the array and calculate water trapped at each index.

This method can pass the complexity check. Time complexity of the approach is $O(n)$, space complexity of it is $O(n)$.

<u>*Is there any better approach?*</u>

Yes! Approach 3 : **Two Pointers**

1. Use two pointers (`left` and `right`) and two variables (`leftMax` and `rightMax`) to maintain the maximum heights dynamically.
2. Otherwise, calculate water based on `rightMax`, then move `right`.
3. Time Complexity: $O(n)$ , Space Complexity: $O(1)$

### Code

- Brute force

  ```javascript
  /**
   * @param {number[]} height
   * @return {number}
   */
  var trapBruteForce = function (height) {
    let water = 0;
    for (let i = 0; i < height.length; i++) {
      let leftMax = 0,
        rightMax = 0;
      for (let j = 0; j < i; j++) {
        leftMax = Math.max(leftMax, height[j]);
      }
      for (let j = i; j < height.length; j--) {
        rightMax = Math.max(rightMax, height[j]);
      }
      water = Math.max(0, Math.min(leftMax, rightMax) - height[i]);
    }
    return water;
  };
  ```

- Dynamic Programming

  ```javascript
  /**
   * @param {number[]} height
   * @return {number}
   */
  var trapDynamicProgramming = function (height) {
    let water = 0;
    const leftMax = new Array(height.length).fill(0);
    const rightMax = new Array(height.length).fill(0);
  
    leftMax[0] = height[0];
    rightMax[height.length - 1] = height[height.length - 1];
    for (let i = 1; i < height.length; i++) {
      leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }
    for (let i = height.length - 2; i >= 0; i--) {
      rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }
    for (let i = 0; i < height.length; i++) {
      water += Math.max(0, Math.min(leftMax[i], rightMax[i]) - height[i]);
    }
    return water;
  };
  ```

- Two Pointers

  ```javascript
  /**
   * @param {number[]} height
   * @return {number}
   */
  var trapTwoPointers = function (height) {
    let left = 0,
      right = height.length - 1;
    let leftMax = 0,
      rightMax = 0;
    let water = 0;
  
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          water += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          water += rightMax - height[right];
        }
        right--;
      }
    }
    return water;
  };
  ```

  

### Complexity

- Brute force
  1. Time complexity: $O(n^2)$ 
  2. Space complexity: $O(1)$
- Dynamic programming
  1. Time complexity: $O(n)$
  2. Space complexity: $O(1)$
- Two pointers
  1. Time complexity: $O(n)$
  2. Space complexity: $O(1)$



## 58.Length of Last Word

Given a string `s` consisting of words and spaces, return the length of the ***last*** word in the string.

A **word** is a maximal substring consisting of non-space characters only. 

### Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            continue
        }
        if (s[i] !== ' ') {
            count++
            if (!s[i - 1] || s[i - 1] === ' ') {
                return count
            }
        }
    }
};
```



### Complexity

- Time complexity: $O(n)$
- Space complextity: $O(1)$



## 14.Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

### Thought

Javascript has a convenient method called **startsWith**. We can use it to judge whether the string prefix is same as common. If the prefix is not match with common, cut the last character of it and match again.

### Code

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let common = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(common)) {
      common = common.slice(0, common.length - 1);
      if (common === '') return '';
    }
  }
  return common;
};

```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**
