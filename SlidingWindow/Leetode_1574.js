/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
  let left = 0;
  while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
    // console.log(lef)
    left++;
  }
  if (left === arr.length - 1) {
    return 0;
  }

  let right = arr.length - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  let i = 0,
    j = right;
  let min = Math.min(right, arr.length - left - 1);
  while (i <= left && j < arr.length) {
    // console.log(`i:${i},j:${j}`)
    if (arr[i] <= arr[j]) {
      min = Math.min(min, j - i - 1);
      i++;
    } else {
      j++;
    }
  }
  return min;
};
