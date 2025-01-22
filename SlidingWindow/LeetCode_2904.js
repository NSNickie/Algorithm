/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
  let left = 0;
  let curOneCount = 0;
  let min = Infinity;
  let result = 0;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === "1") {
      curOneCount++;
    }
    while (curOneCount > k || s[left] === "0") {
      if (s[left] === "1") {
        curOneCount--;
      }
      left++;
    }
    if (curOneCount === k) {
      const curLen = right - left + 1;
      if (curLen < min) {
        min = curLen;
        result = s.substring(left, right + 1);
      } else if (curLen === min) {
        const curSub = s.substring(left, right + 1);
        if (curSub < result) {
          result = curSub;
        }
      }
    }
  }
  return curOneCount < k ? "" : result;
};
