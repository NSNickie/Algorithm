/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function (s, k) {
  let left = 0;
  let totalCount = 0;

  const map = new Map();
  for (let right = 0; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1);
    while (map.get(s[right]) >= k) {
      totalCount += s.length - right;
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
  }
  return totalCount;
};
