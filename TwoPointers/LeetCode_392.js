/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s.length) return true;
  let sPointer = 0;
  let tPointer = 0;
  while (tPointer <= t.length - 1) {
    if (t[tPointer] === s[sPointer]) {
      sPointer++;
    }
    tPointer++;
  }
  return sPointer === s.length;
};
