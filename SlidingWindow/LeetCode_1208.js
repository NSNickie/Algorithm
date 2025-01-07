/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let curCost = 0;
  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    const cost = Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));
    curCost += cost;
    while (curCost > maxCost) {
      curCost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left++;
    }

    max = Math.max(right - left + 1, max);
  }
  return max;
};
