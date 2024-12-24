/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let curStr = '';
  const set = new Set();
  const total = 1 << k;
  for (let i = 0; i < s.length; i++) {
    if (i < k) {
      curStr += s[i];
      continue;
    }
    set.add(curStr);
    if (set.size === total) {
      return true;
    }
    curStr += s[i];
    curStr = curStr.slice(1);
    set.add(curStr);
  }
  // console.log(set)
  return set.size === total;
};
