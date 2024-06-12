# Binary Search

## 35.Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

### Thought

A classical binary search problem.

- First solution

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

- Second solution

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

- Third solution

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
