/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
  let lastDuplicate = 0;
  let max = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (i >= 1 && s[i] === s[i - 1]) {
      left = lastDuplicate;
      lastDuplicate = i;
    }
    max = Math.max(i - left + 1, max);
  }
  return max;
};
