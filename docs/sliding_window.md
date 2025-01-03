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



## 1461. Check If a String Contains All Binary Codes of Size K

Given a binary string `s` and an integer `k`, return `true` *if every binary code of length* `k` *is a substring of* `s`. Otherwise, return `false`.

### Thought

Classic sliding window problem. We can make a set to store all combination and return true if the size is equal to $2^k$. However string operation is not very efficient. There is a better way called ***Hash Scroll*** to replace string operation.

### Code

- **String operation**

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let curStr = ''
    const set = new Set()
    const total = 1 << k
    for (let i = 0; i < s.length; i++) {
        if (i < k) {
            curStr += s[i]
            continue
        }
        set.add(curStr)
        if (set.size === total) {
            return true
        }
        curStr += s[i]
        curStr = curStr.slice(1)
        set.add(curStr)
    }
    // console.log(set)
    return set.size === total
};
```

- **Hash Scroll**

```javascript
var hasAllCodes = function(s, k) {
    if (s.length < k) return false;

    const seen = new Set();
    const total = 1 << k; // 2^k
    let hash = 0;

    for (let i = 0; i < s.length; i++) {
        hash = ((hash << 1) & (total - 1)) | (s[i] - '0'); 
        if (i >= k - 1) seen.add(hash);                  
        if (seen.size === total) return true;
    }

    return false;
};

```

  

### **hash = ((hash << 1) & (total - 1)) | (s[i] - '0')???**

### Complexity

- Time complexity: **O(N)**
- Space complexity: **O(1)**



## 2841. Maximum Sum of Almost Unique Subarray

You are given an integer array `nums` and two positive integers `m` and `k`.

Return *the **maximum sum** out of all **almost unique** subarrays of length* `k` *of* `nums`. If no such subarray exists, return `0`.

A subarray of `nums` is **almost unique** if it contains at least `m` distinct elements.

A subarray is a contiguous **non-empty** sequence of elements within an array.

### Thought

Classic sliding window problem. We can use a map to store count of every index.   Use a variable to recored total sum.

### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
    let curMap = new Map()
    let total = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (i < k - 1) {
            total += nums[i]
            curMap.set(nums[i], (curMap.get(nums[i]) || 0) + 1);
            continue
        }
        curMap.set(nums[i], curMap.get(nums[i]) ? curMap.get(nums[i]) + 1 : 1)

        total += nums[i]
        if (curMap.size >= m) {
            max = Math.max(total, max)
        }
        // console.log(curArr)
        // console.log(curSet)

        const leftNum = nums[i - k + 1];
        curMap.set(leftNum, curMap.get(leftNum) - 1);
        if (curMap.get(leftNum) === 0) {
            curMap.delete(leftNum);
        }
        total -= leftNum;
    }
    return max
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(m)**



## 2461. Maximum Sum of Distinct Subarrays With Length K

You are given an integer array `nums` and an integer `k`. Find the maximum subarray sum of all the subarrays of `nums` that meet the following conditions:

- The length of the subarray is `k`, and
- All the elements of the subarray are **distinct**.

Return *the maximum subarray sum of all the subarrays that meet the conditions**.* If no subarray meets the conditions, return `0`.

*A **subarray** is a contiguous non-empty sequence of elements within an array.*

### Thought

A classic sliding window problem. We can use a variable and a map to record current situation. 

### Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const curMap = {};
  let curSum = 0;
  let max = 0;
  let uniqueCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      if (!curMap[nums[i]]) uniqueCount++;
      curMap[nums[i]] = curMap[nums[i]] ? curMap[nums[i]] + 1 : 1;
      curSum += nums[i];
      continue;
    }
    if (!curMap[nums[i]]) uniqueCount++;
    curMap[nums[i]] = curMap[nums[i]] ? curMap[nums[i]] + 1 : 1;
    curSum += nums[i];
    if (uniqueCount === k) {
      max = Math.max(curSum, max);
    }
    curMap[nums[i - k + 1]] = curMap[nums[i - k + 1]] - 1;
    if (curMap[nums[i - k + 1]] === 0) {
      delete curMap[nums[i - k + 1]];
      uniqueCount--;
    }

    curSum -= nums[i - k + 1];
    // console.log(curMap)
  }
  return max;
};

```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**



## 1423. Maximum Points You Can Obtain from Cards

There are several cards **arranged in a row**, and each card has an associated number of points. The points are given in the integer array `cardPoints`.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly `k` cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array `cardPoints` and the integer `k`, return the *maximum score* you can obtain.

### Thought

**Key Insights**

**Method1**

1. **Global Approach: Total Sum - Minimum Subarray Sum**
   - instead of directly picking `k` cards, think of the problem as **removing a continuous subarray of size** `n-k` from the array. The remaining cards will give you the maximum score.
   - Hence, the problem can be rephrased as finding the **minimum sum of a subarray of size `n-k`** and subtracting it from the total sum of the array. 
2. **Sliding Window Technique**
   - Use a sliding window of size `n-k` to efficiently calculate the minimum sum of such a subarray.
   - The sliding window keeps track of the sum as the window slides across the array, minimizing redundant calculations.
3. **Optimization**
   - Compute the total sum in **O(n)** using `reduce`.
   - Use the sliding window to find the minimum subarray sum in **O(n)**.

**Method2**

Directly pick `k` cards from either end of the array and calculate the maximum score. This involves systematically exploring all posiible splits between the front and back portions.

### Code

```javascript
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let curSum = 0;
  let max = -Infinity;
  for (let i = 0; i < k; i++) {
    curSum += cardPoints[i];
  }
  max = curSum;
  for (let i = 1; i <= k; i++) {
    curSum += cardPoints[cardPoints.length - i] - cardPoints[k - i];
    max = Math.max(curSum, max);
  }
  return max;

  // let curSum = 0
  // let min = Infinity
  // let total = 0
  // const window = cardPoints.length - k
  // for (let i = 0; i < cardPoints.length; i++) {
  //     total += cardPoints[i]
  //     if (i < window - 1) {
  //         curSum += cardPoints[i]
  //         continue
  //     }

  //     curSum += cardPoints[i]
  //     min = Math.min(min, curSum)
  //     // console.log(curSum)
  //     // console.log(min)
  //     curSum -= cardPoints[i - window + 1]

  // }
  // return window === 0 ? total : total - min
};


```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(1)**



## 1652. Defuse the Bomb

You have a bomb to defuse, and your time is running out! Your informer will provide you with a **circular** array `code` of length of `n` and a key `k`.

To decrypt the code, you must replace every number. All the numbers are replaced **simultaneously**.

- If `k > 0`, replace the `ith` number with the sum of the **next** `k` numbers.
- If `k < 0`, replace the `ith` number with the sum of the **previous** `k` numbers.
- If `k == 0`, replace the `ith` number with `0`.

As `code` is circular, the next element of `code[n-1]` is `code[0]`, and the previous element of `code[0]` is `code[n-1]`.

Given the **circular** array `code` and an integer key `k`, return *the decrypted code to defuse the bomb*!

### Code

```javascript
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const n = code.length
    const ans = new Array(n)
    let r = k > 0 ? k + 1 : n
    let curSum = 0
    const abs = Math.abs(k)
    for (let i = r - abs; i < r; i++) {
        curSum += code[i]
    }

    for (let i = 0; i < n; i++) {
        ans[i] = curSum
        curSum += code[r % n] - code[(r - k) % n]
        r++
    }
    return ans
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(n)**



## 1297. Maximum Number of Occurrences of a Substring

Given a string `s`, return the maximum number of occurrences of **any** substring under the following rules:

- The number of unique characters in the substring must be less than or equal to `maxLetters`.
- The substring size must be between `minSize` and `maxSize` inclusive.

### Thought

The solution uses the **sliding window technique** to efficiently find the most frequent substring of size `minSize`that has at most `maxLetters`unique characters.

1. Use a sliding window of fixed size `minSize`to iterate through the string.
2. Maintain:
   - A `charFrequencyMap`to track the count of characters in the current window.
   - A `wordMap`to count the frequency of valid substrings.
3. At each step:
   - Check if the substring meets the unique character constraint.
   - Update the frequency in `wordMap`and track the maximum frequency.
4. Dynamically update the sliding window by adding the next character and removing the oldest one.

### Code

```javascript
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
    const wordMap = new Map()
    const curLetterMap = new Map()
    let max = 0
    for (let i = 0; i < minSize; i++) {

        curLetterMap.set(s[i], (curLetterMap.get(s[i]) || 0) + 1)

    }

    for (let i = minSize; i <= s.length; i++) {
        const subString = s.slice(i - minSize, i)
        if (curLetterMap.size <= maxLetters) {
            wordMap.set(subString, (wordMap.get(subString) || 0) + 1)
            max = Math.max(wordMap.get(subString), max)
        }
        if (i === s.length) {
            break
        }
        const addChar=s[i]
        const removeChar=s[i-minSize]
       
        curLetterMap.set(addChar, (curLetterMap.get(s[i]) || 0) + 1)
        // console.log(curLetterMap)
        curLetterMap.set(removeChar, curLetterMap.get(removeChar) - 1)

        if (curLetterMap.get(removeChar) <= 0) {
            curLetterMap.delete(removeChar)
        }
    }
    // console.log(wordMap)
    // console.log(curLetterMap)
    return max
};
```

### Complexity

- Time complexity: **O(N)**
- Space complexity: **O(N)**



## 2269. Find The K-Beauty of a Number

The **k-beauty** of an integer `num` is defined as the number of **substrings** of `num` when it is read as a string that meet the following conditions:

- It has a length of `k`.
- It is a divisor of `num`.

Given integers `num` and `k`, return *the k-beauty of* `num`.

Note:

- **Leading zeros** are allowed.
- `0` is not a divisor of any value.

A **substring** is a contiguous sequence of characters in a string.

### Thought

A classic sliding window problem.

### Code

```javascript
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
    let curStr = ''
    let count = 0
    const str = num.toString()
    for (let i = 0; i < k; i++) {
        curStr = curStr.concat(str[i])
    }
    
    // console.log(curStr)
    for (let i = k; i <= str.length; i++) {
        // console.log(parseInt(curStr))
        if (num % parseInt(curStr) === 0) {
            count++
        }
        if (i === str.length) {
            break
        }
        curStr = curStr.concat(str[i])
        curStr = curStr.slice(1)
    }
    return count
};
```

### Complexity

- Time complexity: **O(N)**
- Space complexity: **O(1)**



## 1984. Minimum Difference Between Highest and Lowest of K Scores

You are given a **0-indexed** integer array `nums`, where `nums[i]` represents the score of the `ith` student. You are also given an integer `k`.

Pick the scores of any `k` students from the array so that the **difference** between the **highest** and the **lowest** of the `k` scores is **minimized**.

Return *the **minimum** possible difference*.

### Thought

**Key Steps**:

1. **Sort the Scores:**

   Sorting the array ensures that all possible subsets of `k` consecutive scores are arranged in increasing order, which minimizes the difference between the highest and lowest scores in any such subset.

2. **Sliding Window Approach:**

   - Iterate over the sorted array with a sliding window of size `k`.

   - At each step, calculate the difference between the first and last elements of the window (i.e., `nums[i+k-1] - nums[i]`).

   - Track the minimum difference:

     Keep track of the smallest difference encountered during the iteration.

### Code

```javascript
/**
 * @param {number[]} numsd
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b)
    let minDiff = Infinity
    for (let i = 0; i <= nums.length - k; i++) {
        const diff = nums[i + k - 1] - nums[i]
        minDiff = Math.min(minDiff, diff)
    }
    return minDiff
}; 
```

### Complexity

- Time complexity: **O($nlogn$)**
- Space complexity: **O(1)**



# Variable-length sliding window

## 3. Combination Sum IV

Given a string `s`, find the length of the **longest** **substring** without repeating characters.

### Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set()
    let max = 0
    let left = 0
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++
        }
        set.add(s[i])
        max = Math.max(max, i - left + 1)
    }
    return max
};
```

### Complexity

- Time complexity: **O(n)**
- Space complexity: **O(∣Σ∣)**



## 3090. Maximum Length Substring With Two Occurrences

Given a string `s`, return the **maximum** length of a substring such that it contains *at most two occurrences* of each character.

