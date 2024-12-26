/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const ans = new Array(n);
  let r = k > 0 ? k + 1 : n;
  let curSum = 0;
  const abs = Math.abs(k);
  for (let i = r - abs; i < r; i++) {
    curSum += code[i];
  }

  for (let i = 0; i < n; i++) {
    ans[i] = curSum;
    curSum += code[r % n] - code[(r - k) % n];
    r++;
  }
  return ans;
};
