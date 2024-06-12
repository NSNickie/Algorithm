# Binary Search

## 35.Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

### Thought

A classical binary search problem.

- First solution, closed interval

```javascript
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1; //[left,right]
  //not empty
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
```

- Second solution, semi shrouded interval

```javascript
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length; // [left,right)
  // not empty
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1; //[mid+1,right)
    } else {
      right = mid; //[left,mid])
    }
  }
  return left;
}
```

- Third solution, open interval

```javascript
function searchInsert(nums, target) {
  let left = -1;
  let right = nums.length;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return right;
}
```

## 74.Search A 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m \* n)) time complexity.

### Thought

Well, we can use a for loop to and do binary search on each row. But the time complexity is O(m\*logn) and it doesn't meet the requirements of the problem. And we can use the first number and the last number of each row to skip some rows.

```javascript
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let left = 0;
    let right = matrix[i].length - 1;
    //skip rows
    if (matrix[i][0] > target || matrix[i][right] < target) {
      continue;
    }
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (matrix[i][mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (matrix[i][left] === target) {
      return true;
    }
  }
  return false;
};
```

But we can do better. We can unfold the matrix to an one dimensional array, then we calculate the row and column of each index. Then we use them to do binary search on the array.

```javascript
var searchMatrix = function (matrix, target) {
  const rowC = matrix.length;
  const colC = matrix[0].length;
  let left = 0;
  let right = rowC * colC - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midValue = matrix[Math.floor(mid / colC)][mid % colC];
    if (midValue < target) {
      left = mid + 1;
    } else if (midValue > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};
```

## 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

### Thought

1. Ask for the lower bound of a number(>=target), use lowerBound(nums,target)
2. Ask for the index of the number > target, use lowerBound(nums,target+1).
3. Ask for the index of the number < target, use lowerBound(nums,target)-1
4. Ask for the index of the number <= target, use lowerBound(nums,target+1)-1

So, we can use No.1 and No.4 to calculate the lower and the upper bound of target.

```javascript
const start = lowerBound(nums, target);
if (start === nums.length || nums[start] !== target) {
  return [-1, -1];
}
const end = lowerBound(nums, target + 1) - 1;
return [start, end];
```
