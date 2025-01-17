/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  const count = { a: 0, b: 0, c: 0 };
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    count[s[i]]++;
  }
  // console.log(count)
  if (count["a"] < k || count["b"] < k || count["c"] < k) {
    return -1;
  }
  const cur = { a: 0, b: 0, c: 0 };
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    cur[s[i]]++;
    while (
      count["a"] - cur["a"] < k ||
      count["b"] - cur["b"] < k ||
      count["c"] - cur["c"] < k
    ) {
      cur[s[left]]--;
      left++;
    }
    max = Math.max(i - left + 1, max);
  }
  return s.length - max;
};
