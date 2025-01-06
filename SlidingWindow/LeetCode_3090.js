/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= 2) {
      while (map.get(s[i]) >= 2) {
        map.set(s[left], map.get(s[left]) - 1);
        left++;
        // console.log(left)
      }
    }
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    max = Math.max(i - left + 1, max);
  }
  return max;
};
